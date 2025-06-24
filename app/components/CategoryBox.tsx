'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback } from 'react';
import { IconType } from 'react-icons';
import qs from 'query-string';

interface CategoryBoxProps {
  icon: IconType;
  selected?: boolean;
  label: string;
}
const CategoryBox: FC<CategoryBoxProps> = ({ icon: Icon, label, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuerry = {};
    if (params) {
      currentQuerry = qs.parse(params.toString());
    }
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
    
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
    `}
    >
      <Icon size={26} />

      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
