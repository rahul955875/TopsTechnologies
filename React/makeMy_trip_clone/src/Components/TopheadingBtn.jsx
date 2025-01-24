import React from "react";
import {Button} from 'react-bootstrap'
function TopheadingBtn() {
  const navBtns = [
    { value: "Login or Create Account", variant: "primary" },
    { value: "IN | ENG", variant: "light" },
    { value: "INR", variant: "light" },
  ];
  return (
    <>
      {navBtns.map((btn) => (
        <Button key={btn.value} className="btn" variant={btn.variant}>{btn.value}</Button>
      ))}
    </>
  );
}

export default TopheadingBtn;
