import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { BrowseContextProvider, BrowseContext } from './context/BrowseContext';
import RootLayout from './layouts/RootLayout';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import BrowseProperties from './pages/BrowseProperties';
import TenantDashBoard from './pages/TenantDashBoard';
import LandlordDashboard from './pages/LandlordDashboard';
import Profile from './pages/Profile';
import Missing from './pages/Missing';
import { UserContextProvider } from './context/UserContext';
import { LandlordDashBoardProvider } from './context/LandlordDashboardContext';
import AddProperty from './pages/AddProperty';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element ={< BrowseProperties />}/>
      <Route path="about" element={<About />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="tenant-dashboard" element={<TenantDashBoard />}/>
      <Route path="properties" element={<AddProperty />}></Route>
      <Route path="landlord-dashboard" element={<LandlordDashboard/>}/>
      <Route path="profile" element={<Profile />}/>
      <Route path="*" element={<Missing />}/>
    </Route>
  )
)
function App() {
  return (
    <UserContextProvider>
      <BrowseContextProvider>
      <LandlordDashBoardProvider>
        <RouterProvider router={router} />
        </LandlordDashBoardProvider>
      </BrowseContextProvider>
    </UserContextProvider>
  );
}

export default App;
