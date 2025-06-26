'use client';

import { FC } from 'react';
import { safeUser } from '../types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useFavourite from '../hooks/useFavourite';

interface HeartButtonProps {
  listingId: string;
  currentUser?: safeUser | null;
}

const HeartButton: FC<HeartButtonProps> = ({ listingId, currentUser }) => {
  const { hasFavourited, toggleFavourited } = useFavourite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavourited}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />

      <AiFillHeart
        size={24}
        className={hasFavourited ? 'fill-rose-500' : 'fill-neutral-500/70'}
      />
    </div>
  );
};

export default HeartButton;
