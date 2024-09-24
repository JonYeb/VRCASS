import { RequestHeader } from './types';

export const CLIENT_API_KEY = 'JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26';

export const BASE_URL = 'https:/vrchat.com';
export const API_BASE_URL = `${BASE_URL}/api/1`;

export const DEFAULT_HEADER: RequestHeader = {
  'User-Agent': 'VRC-ASS/0.1.0 onetime.jon.yeb@outlook.de',
  // 'connect-src': `${BASE_URL}*`,
  // 'Access-Control-Allow-Origin': BASE_URL,
};
/*
* {
  "requiresTwoFactorAuth": [
    "emailOtp"
  ]
}
*
* {
  "verified": true
}
* in set cookie twoFactorAuth
* */
