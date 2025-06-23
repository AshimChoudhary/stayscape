import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Client from './components/Client';
import RegisterModel from './components/modals/RegisterModel';
import LoginModel from './components/modals/LoginModel';
import ToasterProvider from './Providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

export const metadata: Metadata = {
  title: 'Stay Scape',
  description: 'Your Basic Hotel',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Client>
          <ToasterProvider />
          <LoginModel />
          <RegisterModel />
          <Navbar currentUser={currentUser} />
        </Client>
        {children}
      </body>
    </html>
  );
}
