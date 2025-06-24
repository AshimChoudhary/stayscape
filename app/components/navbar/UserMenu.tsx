'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { FC, useCallback, useState } from 'react';
import Menubar from './Menubar';
import useRegister from '@/app/hooks/useRegisterModel';
import useLoginModel from '@/app/hooks/useLoginModel';
import { signOut } from 'next-auth/react';
import { safeUser } from '@/app/types';
import useRentModel from '@/app/hooks/useRentModels';

interface UserMenuProps {
  currentUser?: safeUser | null;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  const registerModel = useRegister();
  const loginModel = useLoginModel();
  const rentModel = useRentModel();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModel.onOpen();
    }
    rentModel.onOpen();
  }, [currentUser, loginModel, rentModel]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block test-sm font-semibold px-4 py-3 rounded-full hover:bg-neutral-100 transiton cursor-pointer"
        >
          StayScape Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="
        p-4
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        flex
        flex-row
        items-center
        gap-3
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute
        rounded-xl
        shadow-md
        w-[40vw]
        md:w-3/4
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        
        "
        >
          <div className="flex flex-col curosr-pointer">
            {currentUser ? (
              <>
                <Menubar onclick={() => {}} label="My Trips" />
                <Menubar onclick={() => {}} label="My Favourites" />
                <Menubar onclick={() => {}} label="My Properties" />
                <Menubar onclick={() => {}} label="My reservations" />
                <Menubar onclick={rentModel.onOpen} label="StayScape my Home" />
                <hr />
                <Menubar onclick={() => signOut()} label="Log Out" />
              </>
            ) : (
              <>
                <Menubar onclick={loginModel.onOpen} label="Login" />
                <Menubar onclick={registerModel.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
