import Image from 'next/image'
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
export default function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="mr-4 flex flex-grow items-center bg-gray-800 py-2 px-4 text-white">
        <div className="mt-2 flex flex-grow items-center sm:flex-grow-0">
          <Image
            src="https://cdn4.iconfinder.com/data/icons/shopping-colorful-flat-long-shadow/135/Shopping_icons-31-16-512.png"
            width={50}
            height={50}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="mx-8 hidden h-10 flex-grow cursor-pointer items-center rounded-md bg-yellow-400 text-black hover:bg-yellow-500 sm:flex">
          <input
            type="text"
            className="h-full w-6 flex-shrink flex-grow rounded-l-md py-2 px-4 focus:outline-none"
          />
          <SearchIcon className="h-14 p-4 " />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6 text-center text-xs">
          <div className="cursor-pointer text-left hover:underline">
            <p> Hello Manish Singh</p>
            <p className="font-bold md:text-sm"> Accounts & Lists</p>
          </div>
          <div className="cursor-pointer text-left hover:underline">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="relative flex cursor-pointer items-center text-right hover:underline">
            <ShoppingCartIcon className="h-12 w-12 font-medium" />
            <span className="absolute top-1 left-6  rounded-full bg-yellow-400 px-2 text-center text-sm font-semibold text-black">
              0
            </span>
            <p className="hiddenfont-bold inline-block md:block md:text-sm">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center space-x-4 bg-slate-700 p-2 pl-4 text-white">
        <p className="flex ">
          <MenuIcon className="mr-2 h-6" />
          All
        </p>
        <p className="cursor-pointer text-left tracking-tight hover:underline">
          Prime Video
        </p>
        <p className="cursor-pointer text-left tracking-tight hover:underline">
          Today's Deal
        </p>
        <p className="cursor-pointer text-left tracking-tight hover:underline">
          Customer Service
        </p>
      </div>
    </header>
  )
}
