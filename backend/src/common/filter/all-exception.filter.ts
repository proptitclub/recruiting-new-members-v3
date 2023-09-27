import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const statusCode = exception.status || exception.response?.status || 500;
    const message =
      exception.response?.data?.error || // HttpModule error message
      exception.response?.message ||
      exception.message ||
      'Something went wrong';
    const error =
      (statusCode === 401 && (exception.response?.error || 'Unauthorized')) ||
      exception.response?.error ||
      (exception.response?.data?.error && 'HttpModule Error') ||
      'Internal Server Error';
    const responseBody = {
      statusCode: httpStatus,
      error,
      message,
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      timestamp: new Date().toISOString(),
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);

    Logger.error(JSON.stringify(responseBody), 'AllExceptionsFilter');
  }
}
