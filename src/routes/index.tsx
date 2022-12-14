import { DashboardLayout } from 'layouts/dashboard';
import User from 'pages/User';
import { useRoutes } from 'react-router-dom';
import { PATH } from './path';

const appRoutes = [
  {
    path: PATH.app.dashboard,
    element: <DashboardLayout />,
    children: [
      // { path: PATH.app.dashboard, element: <Dashboard /> },
      // { path: PATH.app.dashboard, element: <Products /> },
      // { path: PATH.app.dashboard, element: <Orders /> },
      // { path: PATH.app.dashboard, element: <Category /> },
      // { path: PATH.app.dashboard, element: <Users /> },

      { path: PATH.users.list, element: <User /> }

      // { path: '*', element: <Navigate to={PATH.app.dashboard} /> },
    ]
  }
];

export default function AppRouters() {
  return useRoutes(appRoutes);
}
