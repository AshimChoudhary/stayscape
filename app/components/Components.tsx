'use client';

interface ComponentsProps {
  children: React.ReactNode;
}

const Components: React.FC<ComponentsProps> = ({ children }) => {
  return (
    <div
      className="max-w-[2520]
  mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
    >
      {children}
    </div>
  );
};

export default Components;
