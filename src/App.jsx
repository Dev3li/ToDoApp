import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import { User } from "./features/auth/context/AuthContext";
import { useContext } from "react";
//  For Handel Pages (Login..inc)
// this page for handel page , by roouter = it's move you to the page what you need , or
// page you must view to you , if you login by you account ,dashboard page will view , if not have accout or you signOut
// the Login page view to you.
function App() {
  let user = useContext(User);

  return (
    <>
        <div>
          <Toaster />
          <Routes>
            {/* {window.addEventListener("load", () => {
              if (user.account) {
                console.log(user);
                setAccount(<Dashboard />);
                
              } else {
                setAccount(<Login />);
              }
            })} */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
