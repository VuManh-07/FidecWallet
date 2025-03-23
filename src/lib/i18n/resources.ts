import en from '@/translations/en.json';
import vn from '@/translations/vn.json';

export const resources = {
  en: {
    translation: en,
  },
  vn: {
    translation: vn,
  },
};

export type Language = keyof typeof resources;
