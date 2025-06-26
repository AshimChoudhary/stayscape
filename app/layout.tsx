import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Client from './components/ClientOnly';
import RegisterModel from './components/modals/RegisterModal';
import LoginModel from './components/modals/LoginModal';
import ToasterProvider from './Providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import RentModels from './components/modals/RentModals';

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
          <RentModels />
          <LoginModel />
          <RegisterModel />
          <Navbar currentUser={currentUser} />
        </Client>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
