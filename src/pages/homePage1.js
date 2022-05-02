import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Permissions from "../components/permissions";
import Expand from "../components/expandView";
import AccessControl from "./accessControl";

const Home_1 = () => {
  const [showAccessControl, setShowAccessControl] = useState(false);
  const disableAccessControl = () => {
    setShowAccessControl(false);
  };
  const enableAccessControl = () => {
    setShowAccessControl(true);
  };
  return (
    <>
      {/* Debugging  */}
      {/* <Navbar />
      <Permissions />
      <Sidebar /> */}
      <div className="flex">
        <Sidebar />
        {showAccessControl ? (
          <AccessControl closeWindow={disableAccessControl} />
        ) : (
          <Permissions
            className="space-x-4"
            enableWindow={enableAccessControl}
          />
        )}
      </div>
      {/*  */}
    </>
  );
};

export default Home_1;
