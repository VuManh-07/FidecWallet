import { Env } from '@env';
import axios from 'axios';
export const client = axios.create({
  baseURL: Env.API_URL,
});

export const binanceClient = axios.create({
  baseURL: 'https://api.binance.com/api/v3/',
});
