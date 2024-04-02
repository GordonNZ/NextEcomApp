import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/nav/navbar';
import Footer from './components/footer/footer';
import CartProvider from '@/providers/cartProvider';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Eazy Ecommerce',
  description: 'Ecommerce App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} text-slate-700`}>
        <CartProvider>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
