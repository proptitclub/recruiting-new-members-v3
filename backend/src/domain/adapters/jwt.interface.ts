export interface IJwtServicePayload {
  username: string;
}

export abstract class IJwtService {
  createToken: (
    payload: IJwtServicePayload,
    secret?: string,
    expiresIn?: string
  ) => string;
}
