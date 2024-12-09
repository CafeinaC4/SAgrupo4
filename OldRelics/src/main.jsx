import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router.jsx';
import { GlobalContextProvider } from './Context/GlobalContext.jsx';
import { UserProvider } from './Context/UserContext.jsx';  // Importe o UserProvider

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <UserProvider> {/* Envolva o RouterProvider com o UserProvider */}
      <RouterProvider router={Router}>
      </RouterProvider>
    </UserProvider>
  </GlobalContextProvider>
);
