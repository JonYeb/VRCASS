import 'dotenv/config';
import * as process from 'node:process';

import { RequestHeader } from './types';

export const CLIENT_API_KEY = process.env.CLIENT_API_KEY;

export const BASE_URL = 'https:/vrchat.com';
export const API_BASE_URL = `${BASE_URL}/api/1`;

export const DEFAULT_HEADER: RequestHeader = {
  'User-Agent': process.env.USER_AGENT,
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
