import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Client from './components/Client';
import Modals from './components/modals/Modals';

export const metadata: Metadata = {
  title: 'Stay Scape',
  description: 'Your Basic Hotel',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Client>
          <Modals isOpen title="Hola Amigos" />
          <Navbar />
        </Client>
        {children}
      </body>
    </html>
  );
}
