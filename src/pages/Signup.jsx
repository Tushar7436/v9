import { useState } from "react";
import { createUserWithEmailAndPassword } from "../firebase";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import animationData from "../assets/images/SignupAnimation.json";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "sonner";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Role: user, partner, or admin
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!role) {
      toast.error("Please select a role before signing up.");
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          username: username,
          role: role,
        });

        // Store token and role in localStorage
        localStorage.setItem("token", await user.getIdToken());
        localStorage.setItem("role", role);

        toast.success("User registered successfully!");
        navigate(`./Dashboard/${role}Dashboard`);
      }
    } catch (error) {
      console.error("Signup Error: ", error);
      toast.error("Email already in use.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    if (!role) {
      toast.error("Please select a role before signing up.");
      return;
    }

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          username: user.displayName || "Google User",
          role: role,
        });

        // Store token and role in localStorage
        localStorage.setItem("token", await user.getIdToken());
        localStorage.setItem("role", role);

        toast.success("User signed up with Google successfully!");
        navigate(`./Dashboard/${role}Dashboard`);
      }
    } catch (error) {
      console.error("Google Signup Error: ", error);
      toast.error("Google signup failed.");
    }
  };
  return (
    <div className="min-h-screen bg-custom-gradient">
      <Navbar/>
      <div className="flex flex-row">
        {/* Left side with SVG */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
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
        {/* Right side with form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
            <h1 className="text-3xl mb-6 text-center text-gray-800">Sign Up</h1>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm text-gray-700">Username</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="What should we call you"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-700">Select your role:</p>
                <div className="flex space-x-4">
                  {["user", "partner", "admin"].map((r) => (
                    <label key={r} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="role"
                        value={r}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700 capitalize">{r}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-6">
              <button
                onClick={handleGoogleSignup}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FcGoogle className="mr-2 h-5 w-5" />
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

