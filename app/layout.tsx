import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Client from './components/Client';
import RegisterModel from './components/modals/RegisterModel';
import LoginModel from './components/modals/LoginModel';
import ToasterProvider from './Providers/ToasterProvider';

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
          <ToasterProvider />
          <LoginModel />
          <RegisterModel />
          <Navbar />
        </Client>
        {children}
      </body>
    </html>
  );
}
