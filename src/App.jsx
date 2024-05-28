import { useState } from "react";
import {
  FaEye as OpenEye,
  FaEyeSlash as CloseEye,
  FaInstagram,
} from "react-icons/fa";

export default function App() {
  const [optionValue, setOptionValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="bg-[url('/img-3.jpg')] bg-no-repeat bg-cover  ">
      <div className="max-w-2xl mx-auto pb-[3rem] backdrop-blur-sm bg-white bg-opacity-20 border border-gray-400 rounded-lg shadow-lg">
        <div className="pt-[1rem]  flex flex-col gap-[1rem] items-center justify-center">
          <div className="w-[26rem]">
            <img src="/img-2.jpg" alt="satyabama logo" />
          </div>
          <div className="w-[10rem]">
            <img src="/nacpp.png" alt="nac logo" />
          </div>
        </div>
        <div className="mt-[1rem] flex flex-col items-center justify-center">
          <div className="text-center">
            <p className="text-3xl text-blue-500 font-extrabold uppercase">
              vision of IT Department
            </p>
          </div>
          <div className="text-center mt-[1rem]">
            <span className="text-center border-b border-gray-700 font-bold text-xl pt-[1rem]">
              Mentor Mentee
            </span>
          </div>
          <form action="#" className="px-4">
            <div className="mt-[1rem] flex items-center justify-center">
              <p className="w-[15rem] text-center">
                Enter you email and password to access staff panel.
              </p>
            </div>
            <div className="mt-3 flex rounded-lg items-center justify-center">
              <select
                value={optionValue}
                onChange={(e) => setOptionValue(e.target.value)}
                className="text-2xl border px-2 py-1 rounded-md w-[20rem] border-gray-800 flex justify-center items-center"
              >
                <option value="mentor">Senior Mentor</option>
                <option value="mentee">Staff</option>
              </select>
            </div>

            <div className="flex flex-col mt-[1rem] gap-1">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Enter your email."
                className="border border-gray-800 px-2 py-2 rounded-md font-medium"
              />
            </div>

            <div className="flex flex-col mt-[1rem] gap-1">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password."
                  className="border border-gray-800 w-full px-2 py-2 rounded-md font-medium"
                />
                {!showPassword ? (
                  <CloseEye
                    className="absolute top-3 right-4 cursor-pointer"
                    onClick={() => passwordToggle()}
                  />
                ) : (
                  <OpenEye
                    className="absolute top-3 right-4 cursor-pointer"
                    onClick={() => passwordToggle()}
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 mt-[2rem] px-2 py-1 rounded-md text-white hover:bg-orange-400 duration-300 transition-all"
            >
              Login
            </button>

            <div className="mt-2  text-center">
              <a href="#">forgot password</a>
            </div>

            <div className="mt-[-2rem]">
              <a
                className="logos justify-start mx-[10rem]"
                href="https://www.instagram.com/sathyabama_department_it?igsh=MWtzbHBvdGNodGJlbQ=="
                target="_blank"
              >
                <FaInstagram className="text-4xl" />
              </a>
            </div>
            <div className="flex flex-col max-w-[20rem]  items-center">
              <p className="font-bold text-2xl">About us:</p>
              <p className="text-2xl font-medium text-wrap w-[] text-center">
                To Impact Knowledge and Train Students in Innovation.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
