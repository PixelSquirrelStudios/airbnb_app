'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      alt='logo'
      className='sm:flex sm:justify-center sm:items-center cursor-pointer w-auto h-auto md:mr-20'
      width='100'
      height='100'
      src='/images/PlanetHubsMainLogo.svg'
      priority
    />
  );
};
export default Logo;
