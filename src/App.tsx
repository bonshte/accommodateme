import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import Profile from './pages/Profile';
import Missing from './pages/Missing';
import { UserContextProvider } from './context/UserContext';
import Properties from './pages/Properties';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<About />} />
      <Route path="properties" element={<Properties/>} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />}/>
      <Route path="*" element={<Missing />}/>
    </Route>
  )
)
function App() {
  return (
    <UserContextProvider>
        <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
