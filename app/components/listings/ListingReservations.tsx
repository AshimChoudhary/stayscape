'use client';

import { FC } from 'react';
import { Range } from 'react-date-range';
import Calender from '../Inputs/Calender';
import Buttons from '../Buttons';

interface ListingReservationsProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservations: FC<ListingReservationsProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabledDates,
  disabled,
}) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden w-full max-w-[380px] shadow-md">
      <div className="p-4 flex items-end gap-1">
        <div className="text-2xl font-semibold">${price}</div>
        <div className="text-md font-light text-neutral-600">night</div>
      </div>

      <hr />

      <div className="px-4  flex justify-center ">
        <Calender
          value={dateRange}
          disabledDates={disabledDates}
          onChange={(value) => onChangeDate(value.selection)}
        />
      </div>

      <hr />

      <div className="p-4">
        <Buttons disabled={disabled} label="Reserve" onclick={onSubmit} />
      </div>

      <div className="p-4 flex items-center justify-between text-lg font-semibold">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservations;
