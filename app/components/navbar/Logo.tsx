'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div className="relative w-[100px] h-[40px]">
      <Image
        onClick={() => router.push('/')}
        src="/images/logo1.png"
        alt="Logo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain cursor-pointer hidden md:block"
        priority
      />
    </div>
  );
};

export default Logo;
