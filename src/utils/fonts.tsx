import { Cinzel } from 'next/font/google';
import { Shippori_Mincho } from 'next/font/google';

export const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});
export const ShipporiMincho = Shippori_Mincho({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  variable: '--font-shipporimincho',
  display: 'swap',
});
