import React, { useState } from "react";
import useCollapse from "react-collapsed";

import Wifi from "../assets/Wifi.svg";
import Pencil from "../assets/Pencil.svg";
import Dustbin from "../assets/Dustbin.svg";
import Approval from "../assets/Approval.svg";
import Eyes from "../assets/Eyes.svg";
import Back from "../assets/Back.svg";
import Plus from "../assets/Plus.svg";
import SwitchOn from "../assets/SwitchOn.svg";
import SwitchOff from "../assets/SwitchOff.svg";
import Minus from "../assets/Minus.svg";
import Expand from "../components/expandView";



const AccessControl = ({ closeWindow }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  function Collapsible() {
    return (
      <div className=" align-middle">
        <div className="m-auto cursor-pointer" {...getToggleProps()}>
          {isExpanded ? (
            <img src={Minus} className="mb-12" />
          ) : (
            <img src={Plus} className="" />
          )}
        </div>
        <div {...getCollapseProps()}>
          <div className="flex">
            {/* <img src={Back} className="h-10 w-10" />
            <img src={Dustbin} className="h-10 w-10" /> */}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="w-8/12 align-middle justify-center ml-14">
        <div class="border-b border-gray-50 dark:border-gray-200 mb-4">
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 divide-x divide-gray-500 ">
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
                class="inline-flex p-4 rounded-t-lg border-b-2 border-gray-300 dark:text-black hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <img
                  className="hidden lg:block h-6 w-auto mr-2"
                  src={Approval}
                  alt="Approval"
                />
                Approval Matrix
              </a>
            </li>
          </ul>
        </div>

        {/* Add Role */}
        <div className="flex -mt-4">
          <img
            className="lg:block h-6 w-auto my-11 ml-6 cursor-pointer inline-block"
            src={Back}
            alt="Delete"
            onClick={() => {
              closeWindow();
            }}
          />
          <h1 className="text-sideBarActiveFont font-semibold mt-11 ml-6">
            Teachers
          </h1>
          <img
            className="lg:block h-6 w-auto my-11 mx-6 cursor-pointer inline-block ml-24"
            src={Pencil}
            alt="Edit"
          />
        </div>

        {/* Tabs above Table */}
        <div class="border-b ml-20 -mt-4 border-gray-50 dark:border-gray-200 mb-4">
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 divide-x divide-gray-500 ">
            <li class="mr-2">
              <a
                href="#"
                class="inline-flex p-4 text-sideBarActiveFont rounded-t-lg border-b-2 border-blue-600 active dark:text-sideBarActiveFont dark:border-sideBarActiveFont group"
                aria-current="page"
              >
                Access Control
              </a>
            </li>

            <li class="mr-2">
              <a
                href="#"
                aria-current="page"
                class="inline-flex p-4 rounded-t-lg border-b-2 dark:text-black border-gray-300 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                Assigned Members
              </a>
            </li>
          </ul>
        </div>

        {/* Table with Accordion*/}
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
                <th scope="col" class="px-5 py-3 text-center">
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
                    <Collapsible />
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
                  {console.log("dasdsadsaD",isExpanded)}
                  {isExpanded ? (
                    <img src={SwitchOn} className="" />
                  ) : (
                    <img src={SwitchOff} className="" />
                  )}
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
                  <img className="h-8 w-8" src={SwitchOn} alt="SwitchOn" />
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
                  <img className="h-8 w-8" src={SwitchOff} alt="SwitchOff" />
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
                    class="text-white  bg-sideBarActive opacity-20 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2 text-center border-6 dark:focus:ring-blue-800 cursor-pointer"
                  >
                    <h1 class="text-black opacity-100">All Access</h1>
                  </button>
                </td>
                <td class="px-6 py-4 text-center">4</td>
                <td class="px-6 py-4 text-center">1 min ago</td>
                <td class="px-6 py-4 text-right">
                  <img className="h-8 w-8" src={SwitchOn} alt="SwitchOn" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* States */}
      {/* <button
      // className="bg-red w-6 h-6"
      // onClick={() => {
      //   closeWindow();
      // }}
      >
        HELLO BUTTON
      </button> */}
    </>
  );
};

export default AccessControl;
