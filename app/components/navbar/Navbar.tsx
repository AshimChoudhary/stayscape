'use client ';

import { User } from '@/app/generated/prisma';
import Components from '../Components';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import { FC } from 'react';

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Components>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Components>
      </div>
    </div>
  );
};

export default Navbar;
