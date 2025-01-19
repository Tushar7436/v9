
import { useState } from 'react'
import { signInWithEmailAndPassword} from "../firebase"
import { auth } from '../firebase'
import { FcGoogle } from 'react-icons/fc'
import Lottie from "lottie-react"
import animationData from '../assets/images/LoginAnimation.json'
import Navbar from '../components/Navbar';
import { toast } from 'sonner'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success('Login Sucessfully')
        navigate("./Dashboard/UserDashboard");
      })
    } catch (error) {
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        console.log(errorMessage)
        toast.error("User doesnot exist",{
          position:"top-center",
        } )
    }
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
  
      if (result.user) {
        toast.success("User logged in successfully");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      toast.error("Failed to log in with Google");
    }
  };

  return (
    <>
    <div className='bg-custom-gradient min-h-screen'>
      <Navbar />
      <div className="flex px-12 pt-10">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl mb-2">Login</h2>
            <p className="text-gray-600 mb-6">Enter your credentials to access your account</p>
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </form>
            <div className="mt-6">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FcGoogle className="mr-2 h-5 w-5" />
                Sign in with Google
              </button>
            </div>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
            
            <div>
              <p className="pt-5 flex items-center justify-center">
              Don&apos;t have an account?{ "  "}
                <NavLink
                  to="/Signup"
                  style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
                >
                   Signup
                </NavLink>
              </p>
            </div>

          </div>
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-800">
          <div className="w-full h-full max-w-[600px] max-h-[600px]">
            <Lottie
              animationData={animationData}
              background="transparent"
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

