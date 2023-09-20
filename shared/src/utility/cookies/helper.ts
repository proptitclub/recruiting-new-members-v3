import Cookies from 'js-cookie';

export const removeAllCookies = () => {
    const key = ['profile', 'refresh_token', 'access_token'];
    return key.map((el) => {
        return Cookies.remove(el, { path: '/' });
    });
};
