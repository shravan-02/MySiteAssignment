import React, { useState } from "react";
import Wifi from "../assets/Wifi.svg";
import Pencil from "../assets/Pencil.svg";
import Dustbin from "../assets/Dustbin.svg";
import Approval from "../assets/Approval.svg";
import Eyes from "../assets/Eyes.svg";
import AccessControl from "../pages/accessControl";

const Permissions = ({ enableWindow }) => {
  return (
    <div className="w-8/12 align-middle justify-center ml-14">
      <div class="border-b border-gray-50 dark:border-gray-200 mb-4">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 divide-x divide-gray-500 divide-">
          <li class="mr-2">
            <a
              href="#"
              class="inline-flex p-4 text-sideBarActiveFont rounded-t-lg border-b-2 border-blue-600 active dark:text-sideBarActiveFont dark:border-sideBarActiveFont group"
              aria-current="page"
            >
              <img
                className="hidden lg:block h-6 w-auto mr-2"
                src={Wifi}
                alt="Permission"
              />
              Permissions
            </a>
          </li>

          <li class="mr-2">
            <a
              href="#"
              aria-current="page"
              class="inline-flex p-4 rounded-t-lg border-b-2 border-gray-300 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <img
                className="hidden lg:block h-6 w-auto mr-2"
                src={Approval}
                alt="Permission"
              />
              Approval Matrix
            </a>
          </li>
        </ul>
      </div>

      {/* Add Role */}
      <div className="flex">
        <button
          type="button"
          class="text-white ml-20 my-10 bg-ButtonColor hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-10 py-2 text-center dark:bg-ButtonColor dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        >
          + Add Role
        </button>

        {/* Icons next to icons */}
        <img
          className="lg:block h-6 w-auto my-11 mx-6 cursor-pointer inline-block"
          src={Pencil}
          alt="Edit"
        />
        <img
          className="lg:block h-6 w-auto my-11 mx-6 cursor-pointer inline-block"
          src={Dustbin}
          alt="Delete"
        />
      </div>

      {/* Table */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-20 ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-TableTitleBg dark:text-black">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center"></div>
              </th>
              <th scope="col" class="px-4 py-3">
                Department/Role Name
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Access Level
              </th>
              <th scope="col" class="px-4 py-3">
                Number of Members
              </th>
              <th scope="col" class="px-4 py-3">
                Last Updated
              </th>
              <th scope="col" class="px-4 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="radio"
                    class="w-4 h-4 rounded-full text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-1 " class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium dark:text-black whitespace-nowrap"
              >
                Teachers
              </th>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white  bg-AccessButtonGreen opacity-20 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2 text-center border-6 dark:focus:ring-blue-800 cursor-pointer"
                >
                  <h1 class="text-black opacity-100">All Access</h1>
                </button>
              </td>
              <td class="px-6 py-4 text-center">4</td>
              <td class="px-6 py-4 text-center">1 min ago</td>
              <td class="px-6 py-4 text-right">
                <img
                  className="h-6 w-6 cursor-pointer"
                  src={Eyes}
                  alt=""
                  onClick={() => {
                    enableWindow();
                  }}
                />
              </td>
            </tr>

            {/* Row - 2 */}
            <tr class="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-1 " class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium dark:text-black whitespace-nowrap"
              >
                Teachers
              </th>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white  bg-AccessButtonGreen opacity-20 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2 text-center border-6 dark:focus:ring-blue-800 cursor-pointer"
                >
                  <h1 class="text-black opacity-100">All Access</h1>
                </button>
              </td>
              <td class="px-6 py-4 text-center">4</td>
              <td class="px-6 py-4 text-center">1 min ago</td>
              <td class="px-6 py-4 text-right">
                <img className="h-6 w-6 cursor-pointer" src={Eyes} alt="" />
              </td>
            </tr>

            {/* Row - 3 */}
            <tr class="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-1 " class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium dark:text-black whitespace-nowrap"
              >
                Teachers
              </th>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white  bg-AccessButtonGreen opacity-20 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2 text-center border-6 dark:focus:ring-blue-800 cursor-pointer"
                >
                  <h1 class="text-black opacity-100">All Access</h1>
                </button>
              </td>
              <td class="px-6 py-4 text-center">4</td>
              <td class="px-6 py-4 text-center">1 min ago</td>
              <td class="px-6 py-4 text-right">
                <img className="h-6 w-6 cursor-pointer" src={Eyes} alt="" />
              </td>
            </tr>

            {/* Row - 3 */}
            <tr class="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-1 " class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium dark:text-black whitespace-nowrap"
              >
                Teachers
              </th>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white  bg-AccessButtonGreen opacity-20 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2 text-center border-6 dark:focus:ring-blue-800 cursor-pointer"
                >
                  <h1 class="text-black opacity-100">All Access</h1>
                </button>
              </td>
              <td class="px-6 py-4 text-center">4</td>
              <td class="px-6 py-4 text-center">1 min ago</td>
              <td class="px-6 py-4 text-right">
                <img className="h-6 w-6 cursor-pointer" src={Eyes} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Permissions;
