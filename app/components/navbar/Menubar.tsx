'use client';

interface MenubarProps {
  onclick: () => void;
  label: string;
}

const Menubar: React.FC<MenubarProps> = ({ onclick, label }) => {
  return (
    <div
      onClick={onclick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
};

export default Menubar;
