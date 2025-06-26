import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { FC, useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';
import { safeUser } from '../types';
import useLoginModel from './useLoginModel';

interface UseFavouriteProps {
  listingId: string;
  currentUser?: safeUser | null;
}

const useFavourite = ({ listingId, currentUser }: UseFavouriteProps) => {
  const router = useRouter();
  const loginModel = useLoginModel();

  const hasFavourited = useMemo(() => {
    const list = currentUser?.favouriteIds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavourited = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModel.onOpen();
      }
      try {
        let request;

        if (hasFavourited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success('Success');
      } catch (error) {
        toast.error('Something went wrong');
      }
    },
    [currentUser, hasFavourited, listingId, loginModel, router]
  );

  return {
    hasFavourited,
    toggleFavourited,
  };
};

export default useFavourite;
