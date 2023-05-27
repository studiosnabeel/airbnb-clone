import Image from 'next/legacy/image';
import { logo } from '../Assets';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-5 md:px-10 grid grid-cols-3">
      {/* left Logo */}
      <div className="relative flex items-center h-6 md:h-8 lg:h-10 cursor-pointer my-auto">
        <Image
          src={logo}
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle Search Section*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="bg-transparent pl-5 outline-none flex-grow w-[90%] text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 text-white bg-[#329a9a] rounded-full p-2 mr-2 cursor-pointer" />
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden lg:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
