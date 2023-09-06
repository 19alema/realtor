import { Route,Routes } from "react-router-dom";
import { Header } from "./components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Home, Profile,Offers,SignUp, SignIn,ForgotPassword} from "./pages"
function App() {
  return (
    <div className="bg">
     <Header/>
      <Routes>
   
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/offers" element={<Offers />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/> 
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
{/* Same as */}
    </div>
  )
}

export default App
