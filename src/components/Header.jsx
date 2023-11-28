import React from "react";
import { navItems } from "../constants/index";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Header() {
  return (
    <header className="w-full bg-gradient-to-br p-3 shadow-lg bg-[#0a1823] border-b text-gray-300">
      <div className="max-w-7xl mx-auto  py-3 flex items-center justify-between">
        <Link to={"/"}>
          <span className="text-2xl font-bold">Pathashala</span>
        </Link>
        <div className="flex space-x-10">
          {navItems.map((ele, index) => (
            <Link to={ele.url} key={index}>
              <span className="text-lg font-medium">{ele.name}</span>
            </Link>
          ))}
        </div>
        <Stack spacing={4} direction="row">
        <Button variant="outlined">Be A Creator</Button>
        <Button variant="contained">Be A Learner</Button>
        </Stack>
      </div>
    </header>
  );
}

export default Header;
