'use client';

import { TbBeach } from 'react-icons/tb';
import Components from '../Components';
import { GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from '../CategoryBox';

export const categories = [
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
    description: 'This Property is Modern!!',
  },
];
const Categories = () => {
  return (
    <Components>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-autp">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Components>
  );
};

export default Categories;
