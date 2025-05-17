"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "../../context/userContext";
import { LoginUser } from "../../services/userService";

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.error("Please fill in all fields before logging in", {
        position: "top-center",
      });
      return;
    }

    try {
      const res = await LoginUser(loginData)
      // console.log(res);
      toast.success("You Are Logged In ", {
        position: "top-center"
      })
      // setLoginData({
      //   email: '',
      //   password: ''
      // })
      context.setUser(res.user)
      router.push("/profile/user")

      console.log("Logging in with:", loginData);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black flex items-center justify-center">
      <div className="bg-gradient-to-br from-blue-800 to-black border border-blue-500 rounded-xl p-8 shadow-2xl w-full max-w-md relative text-white animate-pulse hover:animate-none transition-all duration-300">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-sm bg-blue-600 px-4 py-1 rounded-full font-bold tracking-wide shadow-lg">
          LOGIN
        </div>
        <form className="mt-6 space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-sm font-medium text-blue-200">
              Email
            </label>
            <input
              name="user_email"
              type="email"
              value={loginData.email}
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
              className="w-full px-4 py-2 bg-black border border-blue-600 rounded-lg text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-blue-200">
              Password
            </label>
            <input
              name="password"
              value={loginData.password}
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
              type="password"
              className="w-full px-4 py-2 bg-black border border-blue-600 rounded-lg text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Enter System
          </button>
        </form>
        {JSON.stringify(setLoginData)}
        <p className="mt-6 text-center text-sm text-blue-300">
          Don’t have access?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
        {/* Decorative Glows */}
        <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-500 rounded-xl pointer-events-none blur-sm opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Login;
