'use client';

import { TbBeach } from 'react-icons/tb';
import Components from '../Components';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This Property is close to the beach',
  },
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This Property is close to the beach',
  },
];
const Categories = () => {
  return (
    <Components>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-autp"></div>
    </Components>
  );
};

export default Categories;
