
import { pbkdf2Sync, randomBytes } from 'crypto';

export class PasswordUtils {

  static readonly ITERATIONS= 1000
  static readonly KEYLEN = 64
  static readonly DIGEST = 'sha512'

  static loadPassword(password: string, salt?: string) {
    // Creating a unique salt for a particular user
    salt = salt || randomBytes(16).toString('hex');
    // Hashing user's salt and password with 1000 iterations, 64 length and sha512 digest
    const hash = pbkdf2Sync(password, salt, PasswordUtils.ITERATIONS, PasswordUtils.KEYLEN, PasswordUtils.DIGEST).toString(`hex`);
    return ({ salt, hash });
  };

  static validPassword(password: string, compareHash: string, salt: string): boolean {
    const hash = pbkdf2Sync(compareHash, salt, PasswordUtils.ITERATIONS, PasswordUtils.KEYLEN, PasswordUtils.DIGEST).toString(`hex`);
    return password === hash;
  };
}
