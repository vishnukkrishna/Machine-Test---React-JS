import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { GetUserList } from "../../services/services";
import { ToastError } from "../../ToastService/ToastService";
import { useNavigate } from "react-router-dom";
import userimg from "../../assets/profile.png";

function UserProfile() {
  const navigate = useNavigate();
  const [Search, setSearch] = useState("");
  const [UserList, setUserList] = useState("");

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const GetUserListFunc = async () => {
    try {
      const res = await GetUserList(Search);
      if (res.status === 200) {
        setUserList(res.data);
      }
    } catch (error) {
      console.log(error);
      ToastError("");
    }
  };
  useEffect(() => {
    GetUserListFunc();
  }, [Search]);
  useEffect(() => {
    GetUserListFunc();
  }, []);
  return (
    <>
      <div className="bg-gray-50/50">
        <Sidebar />
        <div className="p-4 xl:ml-80">
          <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
            <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
              <div className="capitalize">
                <nav aria-label="breadcrumb" className="w-max">
                  <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                    <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                      <a href="#">
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
                          User
                        </p>
                      </a>
                      <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
                        /
                      </span>
                    </li>
                    <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                        User List
                      </p>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="flex items-center">
                <div className="mr-auto md:mr-4 md:w-56">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                      placeholder=" "
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                      Type here
                    </label>
                  </div>
                </div>
                <button
                  className=" relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                  type="button"
                >
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      strokeWidth={3}
                      className="h-6 w-6 text-blue-gray-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <a href="#">
                  <button
                    className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 hidden items-center gap-1 px-4 xl:flex"
                    type="button"
                    onClick={() => Logout()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-blue-gray-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sign Out
                  </button>
                  <button
                    className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                    type="button"
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-blue-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </nav>
          <div className="pt-32 flex flex-wrap justify-center sm:gap-20 md:gap-40 lg:gap-0 gap-0">
            {UserList &&
              UserList.map((user) => (
                <div
                  key={user.id}
                  className="font-sans flex flex-row w-full sm:w-1/2 lg:w-1/3 justify-center items-center"
                >
                  <div className="card w-96 mx-auto bg-white shadow-xl hover:shadow">
                    <img
                      className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
                      src={
                        user && user.profile_img ? user.profile_img : userimg
                      }
                      alt=""
                    />
                    <div className="text-center mt-2 text-3xl font-medium">
                      {user.username}
                    </div>
                    <div className="text-center mt-2 font-light text-sm">
                      @{user.username}
                    </div>
                    <div className="text-center font-normal text-lg">
                      Kerala
                    </div>
                    <div className="px-6 text-center mt-2 font-light text-sm">
                      <p>Front end Developer</p>
                    </div>
                    <hr className="mt-8" />
                    <div className="flex p-4">
                      <div className="w-1/2 text-center">
                        <span className="font-bold">2.4 k</span> Followers
                      </div>
                      <div className="w-0 border border-gray-300"></div>
                      <div className="w-1/2 text-center">
                        <span className="font-bold">1.0 k</span> Following
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
