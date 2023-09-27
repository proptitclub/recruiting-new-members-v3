export abstract class IBcryptService {
  hash: (hashString: string) => Promise<string>;
  compare: (password: string, hashPassword: string) => Promise<boolean>;
}
