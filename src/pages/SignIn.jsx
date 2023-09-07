import React, {useState} from 'react'
import {AiFillEyeInvisible, AiOutlineEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { OAuth } from '../components';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function SignIn() {

  const [formData, setFormData]= useState({
    email:'',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(true)
  const {email, password} = formData;
  const navigate = useNavigate()

  function onchangeHandle(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  function handleIconClick() {
      setShowPassword(prev => !prev);
  }


  async function onFormSignIn(e) {
      e.preventDefault();
      try {
        const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      if(userCredentials.user) {
        console.log("Sign in success");
        toast.success('Successfully signed in');
        navigate('/')
      }
      } catch (error) {
        toast.error("Wrong user credentials")
      }
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex flex-wrap justify-center px-6 py-12 items-center max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img 
          src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
          alt="key" 
          className='w-full rounded-2xl'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'> 
          <form onSubmit={onFormSignIn}>
            <input 
              className='w-full mb-6 p-2 rounded-md outline-none text-gray-700 bg-white text-xl border-gray-300 transition ease-in-out' 
              type="text" 
              id='email'
              name="name" 
              placeholder='Enter Email Address'
              value={email}
              onChange={onchangeHandle}
            />

            <div className='relative mb-6'>
              <input 
                className='w-full p-2 rounded-md outline-none text-gray-700 bg-white text-xl border-gray-300 transition ease-in-out' 
                type={showPassword? "password" : "text"}
                id='password'
                name="password" 
                placeholder='Enter Password'
                value={password}
                onChange={onchangeHandle}
              />

              <div onClick={handleIconClick} className='absolute right-3 top-3 text-xl cursor-pointer text-gray-500'>
                {
                showPassword? <AiFillEyeInvisible /> : <AiOutlineEye />
                }
              </div>
            </div>

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <div className="flex">
                <p>Don't have account?</p>
                <Link to='/sign-up' className='ml-2 text-red-600 hover:text-red-700 transition duration-200 ease-in-out'>Register</Link>
              </div>
              <p>
                <Link to='/forgot-password' className='ml-2 text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out'>Forgot Password</Link>
              </p>
            </div>

            <button 
            className='w-full hover:bg-blue-700 active:bg-blue-800 transition ease-in-out duration-200  shadow-md bg-blue-600 text-sm font-medium uppercase text-white px-7 py-2 rounded-md' 
            type="submit">Sign In
          </button>

          <div className='my-4  items-center  flex  before:border-t after:flex-1  after:border-gray-300 after:border-t before:flex-1  before:border-gray-300'>
            <p className="text-center font-semibold mx-4">OR</p>
          </div>

          <OAuth />
          </form>
        

        </div>
      </div>
    </section>
  )
}

export default SignIn