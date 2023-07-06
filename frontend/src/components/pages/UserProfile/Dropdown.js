import React, { useState } from "react";

import * as style from "./Dropdown.module.css";

export default function Dropdown() {
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });

  return (
    <div className={style.container}>
      <button
        type="button"
        className={style.button}
        onClick={handleDropdownClick}>
        Click me!
      </button>
      {dropdownState.open && (
        <div className={style.dropdown}>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )}
    </div>
  );
}
