import { getAuth } from 'firebase/auth'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email:auth.currentUser.email
  })

  const {name, email} = formData

  function userSignOut () {
    auth.signOut();
    navigate('/')
  }
  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6 font-bold'>
          My Profile
        </h1>

        <div className='w-full md:w-[50%] m-auto px-3 mt-6'>
          <form>
            <input
            className='w-full px-3 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md transition ease-in-out duration-200'
             type="text" 
             name="name" 
             id="name" 
             disabled
             value={name}
            />
            <input
            className='w-full mt-4 px-3 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md transition ease-in-out duration-200'
             type="email" 
             name="email" 
             id="email" 
             disabled
             value={email}
            />

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>
                Do you want to Change your name <span className='ml-2 text-red-500 hover:text-red-700 transition duration-150 ease-in-out cursor-pointer'>Edit</span>
              </p>

              <p onClick={userSignOut} className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile