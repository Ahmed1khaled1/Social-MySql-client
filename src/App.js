import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";
import Leftbar from "./components/Leftbar.js";
import Rightbar from "./components/Rightbar.js";
import Profile from "./pages/Profile.js";
import {
  BrowserRouter,
  Routes,
  Outlet,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkmodeContext.js";
import { AuthContext } from "./context/authContext.js";

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={darkMode ? "dark" : ""}>
          <Navbar />
          <div className="flex">
            <div className="hidden md:block  md:flex-[2]">
              <Leftbar />
            </div>
            <div className="flex-[6] bg-gray-100 dark:bg-grey-700 md:pl-5">
              <Outlet />
            </div>
            <div className="hidden lg:block lg:flex-[3]">
              <Rightbar />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
          children={
            <>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:id" element={<Profile />} />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
