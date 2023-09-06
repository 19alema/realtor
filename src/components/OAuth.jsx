import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify'
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
function OAuth() {
  const navigate = useNavigate()

  async function signInWithGoogle() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      // Check if the user is in the database
      const docRef = doc(db,"users", user.uid);
      const docSnap = await getDoc(docRef);

      if(!docSnap.exists()) {
        await setDoc(docRef, {
          username: user.displayName,
          email:user.email,
          timestamp: serverTimestamp()
        })
      }
      navigate('/')

      console.log(user);
    } catch (error) {
      toast.error("Could'nt authenticate with Google");
      console.log(error)
    }
  }
  return (
    <button 
    type='button'
    onClick={signInWithGoogle}
        className='flex items-center justify-center rounded-md transition duration-200 ease-in-out shadow-md hover:bg-red-800 w-full bg-red-700 uppercase text-white  px-6 py-2'
    >
        <FcGoogle className='mr-2 bg-white rounded'/>
        Continue with google
    </button>
  )
}

export default OAuth