'use client';

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import Components from '../Components';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { FaSkiing, FaSkiingNordic } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';

export const categoriesValues = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This Property is close to the beach',
  },
  {
    label: 'WindMills',
    icon: GiWindmill,
    description: 'This Property has windmills',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This Property is Modern!',
  },
  {
    label: 'CountrySide',
    icon: TbMountain,
    description: 'This Property is in the Country Side!',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This Property has a Pool!',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This Property is on an Island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This Property is close to a lake!',
  },
  {
    label: 'Sking',
    icon: FaSkiing,
    description: 'This Property has skiing Activities!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This Property has a Castle!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This Property has Camping Activities!',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This Property is in Arctic!',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This Property is in a Cave!',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This Property is in the Desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This Property is in the Barn!',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This Property is Luxirious!',
  },
];
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathName = usePathname();
  const isMainPage = pathName === '/';

  if (!isMainPage) {
    return null;
  }
  return (
    <Components>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-autp">
        {categoriesValues.map((item: any) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category == item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Components>
  );
};

export default Categories;
