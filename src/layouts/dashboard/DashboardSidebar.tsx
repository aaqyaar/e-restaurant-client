import { Logo } from 'assets';
import { Drawer } from 'components';
import { navConfig } from 'components/Navs';

export default function DashboardSidebar() {
  return (
    <Drawer width={'300px'} height={'100%'} open={true} position={'left'}>
      <div className="h-full w-full text-white">
        <div className="flex items-center justify-center w-full">
          <img src={Logo} alt="logo" className="w-full h-40 cursor-normal" />
        </div>

        <aside className="w-full" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 bg-transparent">
            <ul className="space-y-2">
              <li className="space-y-4">
                {navConfig.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="hover:bg-gray-700 flex items-center p-3 text-base font-normal text-gray-200 rounded-lg"
                  >
                    <span>{item.icon}</span>
                    <span className="ml-3">{item.name}</span>
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </aside>

        <div className="absolute bottom-10 w-full">
          <div className="border-b-2 border-gray-600 mb-4" />
          <div className="flex items-center justify-start px-4">
            <div className="w-10 h-10 bg-gray-700 rounded-full mr-4"></div>
            <div className="">
              <h2>John Doe</h2>
              <span className="text-gray-500">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
