import { createClient } from 'microcms-js-sdk';

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: 'creamstew', // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.MICRO_CMS_API_KEY || '',
});
