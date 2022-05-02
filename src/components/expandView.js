import React, {useState} from "react";
import Eyes from "../assets/Eyes.svg";
import Back from "../assets/Back.svg";

const Expand = ({closeWindow}) => {
  return (
    <>
      <div className="w-full align-middle justify-center">
          
        {/* Table with Accordion*/}
        <div class="relative overflow-x-auto shadow-md ">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            
            <tbody>
            <tr class="bg-white border-b dark:bg-blue-400 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">

            <td class="w-4 p-4">
                  <div class="flex items-center">
                    <img
                      className="h-6 w-6 cursor-pointer"
                      src={Eyes}
                      alt="+"
                      onClick={() => {
                        alert("Hello");
                      }}
                    />
                  </div>
                </td>
                
                <th
                  scope="row"
                  class="px-6 py-4 font-medium dark:text-black whitespace-nowrap"
                >
                  Teachers1
                </th>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    class="text-white ml-16 bg-AccessButtonGreen opacity-20 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2 text-center border-6 dark:focus:ring-blue-800 cursor-pointer"
                  >
                    <h1 class="text-black opacity-100">All Access</h1>
                  </button>
                </td>
                <td class="px-6 py-4 text-center">4</td>
                <td class="px-6 py-4 text-center">1 min ago</td>
                <td class="px-6 py-4 text-right">
                  <im8
                    className="h-6 w-6 cursor-pointer"
                    src={Eyes}
                    alt=""
                    // onClick={() => {
                    //   setShowAccessControl(true);
                    // }}
                  />
                </td>
              </ tr>
              <div> hello </div>
              

              
            </tbody>
          </table>
        </div>
      </div>
</>
  );
};

export default Expand;
