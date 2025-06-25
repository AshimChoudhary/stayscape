'use client';

import { Listing, Reservations, User } from '@/app/generated/prisma';
import useCountries from '@/app/hooks/useCountry';
import { safeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import React, { FC, useCallback, useMemo } from 'react';

interface ListingCardProps {
  data: Listing;
  reservation?: Reservations;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: safeUser | null;
}

const ListingCard: FC<ListingCardProps> = ({
  data,
  reservation,
  actionId = '',
  actionLabel,
  currentUser,
  disabled,
  onAction,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);
  }, []);

  return <div>ListingCard</div>;
};

export default ListingCard;
