import { Route,Routes } from "react-router-dom";
import { Header } from "./components";
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
    </div>
  )
}

export default App
