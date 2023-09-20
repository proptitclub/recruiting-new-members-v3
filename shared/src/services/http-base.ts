import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from 'axios';
import { decodeToken, removeAllCookies } from '../utility';

import Cookies from 'js-cookie';

const API_URL = '';

const fetchToken = (refreshToken: string) => {
  return axios
    .post(API_URL, {
      refresh_token: refreshToken,
    })
    .then(
      (resp) => {
        const {
          data: { access_token },
        } = resp;
        return Cookies.set('access_token', access_token);
      },
      (error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 400
        ) {
          window.location.href = '/login';
          removeAllCookies();
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    )
    .catch((error) => {
      return Promise.reject(error);
    });
};

const onRequest = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  let accessToken = Cookies.get('access_token') || '';
  const refreshToken = Cookies.get('refresh_token') || '';

  if (accessToken) {
    const decodedToken = decodeToken(accessToken);
    const expiredAt = decodedToken['exp'];

    if (expiredAt && Date.now() + 10 >= Number(expiredAt) * 1000) {
      await fetchToken(refreshToken);
      accessToken = Cookies.get('access_token') || '';
    }

    const authTokenConfig = {
      ...config,
      headers: new AxiosHeaders({
        'content-type': 'application/json',
        ...config.headers,
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      }),
    };

    return authTokenConfig;
  } else {
    removeAllCookies();
    window.location.href = '/login';
    return Promise.reject('empty access token');
  }
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  if (error?.response?.status === 403) {
    window.location.href = '/403';
    return Promise.reject(error);
  }
  return Promise.reject(error);
};

export default class HttpBase {
  public baseUrl: string;
  public http: AxiosInstance;
  public configHeaders: AxiosRequestConfig | undefined;

  constructor(baseUrl: string, configHeaders?: AxiosRequestConfig) {
    this.http = axios.create({
      baseURL: baseUrl,
      timeout: 100000,
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'vi',
      },
      transformResponse: [
        function (data) {
          return data;
        },
      ],
    });

    this.baseUrl = baseUrl;
    this.configHeaders = configHeaders;
    this.http.interceptors.request.use(onRequest, onRequestError);
    this.http.interceptors.response.use(onResponse, onResponseError);
  }

  static then(response: unknown & { headers?: unknown; data?: unknown }) {
    const responseFallback: { headers?: unknown; data?: unknown } = {};

    if (!response) {
      return responseFallback;
    }

    responseFallback.headers = response.headers;
    if (typeof response.data === 'string') {
      responseFallback.data = JSON.parse(response.data);
    }

    if (typeof response.data === 'object') {
      responseFallback.data = response.data;
    }
    return responseFallback;
  }

  static normalize(start: string, end: string) {
    const slash = end.indexOf('?', 0) !== -1 ? '' : '/';
    return `${start}${slash}${end}`
      .replace(/([^:]\/)\/+/g, '$1')
      .replace(/\/$/, '');
  }

  setConfigHeaders(headers?: RawAxiosRequestHeaders): AxiosRequestConfig {
    const config = {
      ...headers,
      ...this.configHeaders,
    };
    return config;
  }

  getConfigHeaders(
    configHeaders?: AxiosRequestConfig,
    additionalHeaders?: RawAxiosRequestHeaders
  ): AxiosRequestConfig {
    const defaultConfigs = this.setConfigHeaders(additionalHeaders);

    if (!configHeaders) {
      return defaultConfigs;
    }

    const { headers: defaultHeaders, ...defaultRest } = defaultConfigs;
    const { headers, ...rest } = configHeaders;

    return {
      ...defaultRest,
      ...rest,
      ...{ headers: { ...defaultHeaders, ...headers } },
    };
  }

  get = (
    url: string,
    configHeaders?: AxiosRequestConfig,
    headers?: RawAxiosRequestHeaders
  ): Promise<any> => {
    return this.http
      .get(url, this.getConfigHeaders(configHeaders, headers))
      .then(HttpBase.then);
  };

  post = (
    url: string,
    data: Record<string, unknown> | FormData,
    configHeaders?: AxiosRequestConfig,
    headers?: RawAxiosRequestHeaders
  ): Promise<any> => {
    return this.http
      .post(url, data, this.getConfigHeaders(configHeaders, headers))
      .then(HttpBase.then);
  };

  put = (
    url: string,
    data: Record<string, unknown>,
    configHeaders?: AxiosRequestConfig,
    headers?: RawAxiosRequestHeaders
  ): Promise<any> => {
    return this.http
      .put(url, data, this.getConfigHeaders(configHeaders, headers))
      .then(HttpBase.then);
  };

  patch = (
    url: string,
    data: Record<string, unknown>,
    configHeaders?: AxiosRequestConfig,
    headers?: RawAxiosRequestHeaders
  ): Promise<any> => {
    return this.http
      .patch(url, data, this.getConfigHeaders(configHeaders, headers))
      .then(HttpBase.then);
  };

  delete = (
    url: string,
    configHeaders?: AxiosRequestConfig,
    headers?: RawAxiosRequestHeaders
  ): Promise<any> => {
    return this.http
      .delete(url, this.getConfigHeaders(configHeaders, headers))
      .then(HttpBase.then);
  };

  // For external api call
  publicQuery = (
    url: string,
    configHeaders?: AxiosRequestConfig
  ): Promise<any> => {
    return this.http
      .get(url, {
        transformRequest: (data, headers) => {
          delete headers['Authorization'];
          return data;
        },
        ...configHeaders,
      })
      .then(HttpBase.then);
  };
}
