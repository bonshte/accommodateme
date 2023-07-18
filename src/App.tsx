import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';
import About from './pages/About';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import BrowseProperties from './pages/BrowseProperties';
import TenantDashBoard from './pages/TenantDashBoard';
import LandlordDashboard from './pages/LandlordDashboard';
import Profile from './pages/Profile';
import Missing from './pages/Missing';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element ={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="browse-properties" element={<BrowseProperties />} />
      <Route path="tenant-dashboard" element={<TenantDashBoard />}/> 
      <Route path="landlord-dashboard" element={<LandlordDashboard/>}/>
      <Route path="profile" element={<Profile />}/>
      <Route path="*" element={<Missing />}/>
    </Route>
  )
)
function App() {
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;
