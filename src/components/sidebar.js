import React from "react";
import Projects from "../assets/Projects.svg";
import Classrooms from "../assets/Classrooms.svg";
import Permission from "../assets/Permission.svg";

const sidebar = () => {
  return (
    <aside class="w-64 " aria-label="Sidebar">
      <div class="h-full py-4 px-3 bg-gray-50 rounded dark:bg-gray-50">
        <ul class="space-y-2">
          {/* 1 */}
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:focus:bg-sideBarActive dark:focus:text-sideBarActiveFont"
            >
              <div className="w-6"></div>
             
              <img className="h-6 w-6 rounded-full" src={Projects} alt="" />
              <span class="flex-1 ml-3 whitespace-nowrap">Projects</span>
            </a>
          </li>
          {/* 2 */}
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:focus:bg-sideBarActive dark:focus:text-sideBarActiveFont"
            >
              <div className="w-6"></div>
              {/* <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-black group-hover:text-black dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                  
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg> */}
              <img className="h-6 w-6 rounded-full" src={Classrooms} alt="" />
              <span class="flex-1 ml-3 whitespace-nowrap">Classrooms</span>
            </a>
          </li>
          {/* 3 */}
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:focus:bg-sideBarActive dark:focus:text-sideBarActiveFont"
            >
              <div className="w-6"></div>
              {/* <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-black group-hover:text-black dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                  
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg> */}
              <img className="h-6 w-6 rounded-full" src={Permission} alt="" />
              <span class="flex-1 ml-3 whitespace-nowrap">Permission</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default sidebar;
