import { Inter } from 'next/font/google';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-families-body',
});

const fontDisplay = Inter({
  subsets: ['latin'],
  variable: '--font-families-display',
});

export { fontBody, fontDisplay };
