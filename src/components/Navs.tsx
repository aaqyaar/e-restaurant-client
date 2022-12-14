import {
  AiOutlinePieChart,
  AiOutlineShopping,
  AiOutlineSetting
} from 'react-icons/ai';
import {
  HiOutlineArchive,
  HiOutlineBookmark,
  HiOutlineUsers
} from 'react-icons/hi';
export const navConfig = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: (
      <AiOutlinePieChart className="w-6 h-6 text-gray-500 dark:text-gray-400 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
    )
  },
  {
    name: 'Products',
    url: '/products',
    icon: (
      <AiOutlineShopping className="w-6 h-6 text-gray-500 dark:text-gray-400 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
    )
  },
  {
    name: 'Orders',
    url: '/orders',
    icon: (
      <HiOutlineArchive className="w-6 h-6 text-gray-500 dark:text-gray-400 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
    )
  },
  {
    name: 'Category',
    url: '/category',
    icon: (
      <HiOutlineBookmark className="w-6 h-6 text-gray-500 dark:text-gray-400 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
    )
  },
  {
    name: 'Users',
    url: '/users',
    icon: (
      <HiOutlineUsers className="w-6 h-6 text-gray-500 dark:text-gray-400 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
    )
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: (
      <AiOutlineSetting className="w-6 h-6 text-gray-500 dark:text-gray-400 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
    )
  }
];
