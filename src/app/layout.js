import React from 'react';
/* import { Inter } from 'next/font/google';
 */
import './globals.css';
import Navbar from '@/components/navbar/page';

/* const inter = Inter({ subsets: ['latin'] }); */

export const metadata = {
  title: 'FLAG',
  description: 'Study Next',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
