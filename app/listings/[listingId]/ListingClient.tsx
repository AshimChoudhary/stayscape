'use client';

import Components from '@/app/components/Components';
import ListingHead from '@/app/components/listings/ListingHead';
import ListingInfo from '@/app/components/listings/ListingInfo';
import { categoriesValues } from '@/app/components/navbar/Categories';
import { Reservations } from '@/app/generated/prisma';
import { safeListings, safeUser } from '@/app/types';
import { FC, useMemo } from 'react';

interface ListingClientProps {
  reservation?: Reservations[];
  listing: safeListings & {
    user: safeUser;
  };
  currentUser?: safeUser | null;
}

const ListingClient: FC<ListingClientProps> = ({
  //   reservation,
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categoriesValues.find((item) => item.label == listing.category);
  }, [listing.category]);

  return (
    <Components>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />

          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathRoomCount={listing.bathRoomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Components>
  );
};

export default ListingClient;
