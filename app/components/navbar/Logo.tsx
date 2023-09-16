'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      alt='logo'
      className='hidden md:block cursor-pointer w-auto h-auto mr-20'
      width='100'
      height='100'
      src='/images/PlanetHubsLogo.svg'
      priority
    />
  );
};
export default Logo;
