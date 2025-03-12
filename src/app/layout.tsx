import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/theme-provider';
import {GoogleAnalytics} from '@next/third-parties/google';
const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'kraken',
  description: 'Personal Portfolio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        disableTransitionOnChange
      >
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
      <GoogleAnalytics gaId='G-37FY8YGKBZ' />
    </html>
  );
}
