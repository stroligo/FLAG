/* import { Inter } from 'next/font/google';
 */
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

/* const inter = Inter({ subsets: ['latin'] }); */

export const metadata = {
  title: 'FLAG',
  description: 'Study Next',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
