import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import { AppProvider, MenuProvider } from '@/HOC';
import { Menu } from '@/components';
import './globals.css';

const inter = Heebo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John',
  description: 'Hi, I am John, Creative Technologist',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <MenuProvider element={<Menu />}>{children}</MenuProvider>
        </AppProvider>
      </body>
    </html>
  );
}
