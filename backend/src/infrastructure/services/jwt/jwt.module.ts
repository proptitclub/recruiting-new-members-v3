import { Module } from '@nestjs/common';
import { JwtModule as Jwt } from '@nestjs/jwt';
import { JwtProvider } from './jwt.provider';

@Module({
  imports: [
    Jwt.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: process.env.EXPIRES_IN || '24h' },
    }),
  ],
  providers: [JwtProvider],
  exports: [JwtProvider],
})
export class JwtServiceModule {}
