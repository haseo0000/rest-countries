"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import { MoonIcon } from "../../assets/moon-svgrepo-com";

function Navbar() {
  const [toggleMode, setToggleMode] = useState(true);

  const handleDarkmode = () => {
    const body = document.querySelector("body");
    body?.classList.toggle("dark-mode");

    setToggleMode((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className="font-bold text-[1.5em]">Where in the world?</h2>
      </div>
      <div className="flex gap-4 items-center cursor-pointer" onClick={handleDarkmode}>
        <div className="relative w-[40px] aspect-square ">
          <MoonIcon />
        </div>
        <h3 className="font-bold">{toggleMode ? "Light Mode" : "Dark Mode"}</h3>
      </div>
    </div>
  );
}

export default Navbar;
