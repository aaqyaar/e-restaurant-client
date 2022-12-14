import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex flex-1 h-screen">
        <Outlet />
      </div>
    </div>
  );
}
