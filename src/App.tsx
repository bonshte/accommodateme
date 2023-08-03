import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation, useNavigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Missing from './pages/Missing';
import { UserContextProvider } from './context/UserContext';
import PropertiesChat from './pages/PropertiesChat';
import { ChatContextProvider } from './context/ChatContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<About />} />
      <Route path="properties-chat" element={<PropertiesChat/>} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Missing />}/>
    </Route>
  )
)
function App() {

  return (
    <UserContextProvider>
      <ChatContextProvider>
        <RouterProvider router={router} />
        </ChatContextProvider>
    </UserContextProvider>
  );
}

export default App;
