"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { createUser } from "../../services/userService";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileUrl: ""
  })
  // console.log(signUpData.name)

  const signUpUser = async(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(signUpData.name.trim() === ' ' || 
    signUpData.email.trim() === ' ' || 
    signUpData.password.trim()=== ' ' ||
    signUpData.about.trim() === ' ' 
    ){
      toast.error("Please fill in all fields before adding the task", {
        position: "top-center",
      });
      return; 
    }

    try {
      const res = await createUser(signUpData);
      console.log(res)
      toast.success("user registered successfully", {
        position: "top-center"
      })
      setSignUpData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileUrl: ""
      });
    } catch (error) {
      console.log(error)
      toast.error("signUp Error", {
        position: "top-center"
      })
    }

  }

  const resetForm = ()=>{
    setSignUpData({
      name: "",
    email: "",
    password: "",
    about: "",
    profileUrl: ""
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center mt-0" style={{
      backgroundImage: `url('images.jpeg')`, 
    }}>
      <form className="backdrop-blur-lg bg-white/10 border border-white/30 p-8 rounded-2xl shadow-2xl max-w-md w-full space-y-6 bg-gradient-to-br from-purple-400 to-blue-600" onSubmit={signUpUser}>
        <h2 className="text-3xl font-bold text-white text-center">
          Create Account
        </h2>

        <input
          type="text"
          name="username"
          value={signUpData.name}
          onChange={(event)=>{
            setSignUpData({
              ...signUpData,
              name: event.target.value
            })
          }}
          placeholder="Username"
          className="w-full p-3 rounded-lg bg-white/15 text-white font-bold placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300"
          required
        />

        <input
          type="email"
          name="email"
          value={signUpData.email}
          onChange={(event)=>{
            setSignUpData({
              ...signUpData,
              email: event.target.value
            })
          }}
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white/20 text-white font-bold placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300"
          required
        />

        <input
          type="password"
          name="password"
          value={signUpData.password}
          onChange={(event)=>{
            setSignUpData({
              ...signUpData,
              password: event.target.value
            })
          }}
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-white/20 text-white font-bold placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300"
          required
        />

        <textarea
          name="about"
          value={signUpData.about}
          onChange={(event)=>{
           setSignUpData({
            ...signUpData,
            about: event.target.value
           })
          }}
          placeholder="Tell us about yourself..."
          rows={3}
          className="w-full p-3 rounded-lg bg-white/20 text-white font-bold  placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300"
        />

        <div className="flex justify-between">
          <button
            type="submit"
            className="w-1/2 mr-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
          <button
          onClick={resetForm}
            type="button"
            className="w-1/2 ml-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Reset
          </button>
        </div>
        {/* {JSON.stringify(signUpData)} */}
      </form>
    </div>
  );
};

export default SignUp;
