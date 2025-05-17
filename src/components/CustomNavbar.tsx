"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";
import UserContext from "../context/userContext";
import { LogOut } from "../services/userService";

const CustomNavbar = () => {
  const router = useRouter();

  const context = useContext(UserContext);
  async function handleLogOut(){
    try {
      const res = await LogOut();
      // console.log(res)
      context.setUser(undefined)
      router.push("/login")
    } catch (error) {
      console.log(error)
      toast.error("console error")
    }

  }
  // console.log(context);
  return (
    <>
      <div className="bg-blue-400 h-15 px-3 flex justify-between items-center">
        <div className="brand">
          <h1 className="text-2xl font-semibold m-4">
            <Link href="/">Work-Manager</Link>
          </h1>
        </div>
        <div>
          <ul className="flex  space-x-5 ">
            {context.user && (
              <>
                <li>
                  <Link href={"/"} className="hover:text-blue-200">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href={"/add-task"} className="hover:text-blue-200">
                    Add Task
                  </Link>
                </li>

                <li>
                  <Link href={"/view-task"} className="hover:text-blue-200">
                    View Task
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <ul className="flex space-x-5 mr-5">
            {context.user && (
              <>
                <li>
                  <Link href="/login"> {context.user.name}</Link>
                </li>

                <li>
                  <button  onClick={handleLogOut}>LogOut</button>
                </li>
              </>
            )}
            {!context.user && (
              <>
                <li>
                  <a href="/login">Login</a>
                </li>

                <li>
                  <Link href="signup">SignUp</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
