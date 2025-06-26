'use client';

import useCountries from '@/app/hooks/useCountry';
import { safeUser } from '@/app/types';
import { FC } from 'react';
import { IconType } from 'react-icons';
import Avatar from '../Avatar';
import ListingCategory from './ListingCategory';
import dynamic from 'next/dynamic';
import Maps from '../Maps';

interface ListingInfoProps {
  user: safeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathRoomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo: FC<ListingInfoProps> = ({
  user,
  description,
  roomCount,
  bathRoomCount,
  guestCount,
  category,
  locationValue,
}) => {
  const Map = dynamic(() => import('../Maps'), {
    ssr: false,
  });
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center font-light gap-4 text-neutral-500">
          <div>{guestCount} Guests</div>
          <div>{roomCount} Rooms</div>
          <div>{bathRoomCount} Bath Rooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className="text-lg font-loght text-neutral-500">{description}</div>
      <hr />
      <Maps center={coordinates} />
    </div>
  );
};

export default ListingInfo;
