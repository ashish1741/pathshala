// import Link from "next/link";
// import React from "react";
// import { navItem } from "../helpers";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import { deepOrange } from "@mui/material/colors";

// function Navbar() {
//   return (
//     <header
//       className="fixed top-0 left-0 right-0 w-full h-[80px] 
//     flex bg-gradient-to-br shadow-lg bg-[#0a1823] 
//     border-b text-gray-300 p-2"
//     >
//       <div className=" w-[40%] m-3 p-2">
//         <Link href="/">
//           <span
//             className="text-[24px] 
//           font-[800]"
//           >
//             Pathashala
//           </span>
//         </Link>
//       </div>
//       <div className="w-[40%] m-3 p-2 flex justify-evenly">
//         {navItem.map((ele,index) => {
//           return (
//             <Link href={ele.url} key={index}>
//               <span key={index}
//                 className="text-[18px] font-medium
//                  active:text-gray-500 list-none"
//               >
//                 {ele.name}
//               </span>
//             </Link>
//           );
//         })}
//       </div>
//       <Stack
//         direction="row"
//         spacing={2}
//         className="cursor-pointer m-2 p-2 text-right "
//       >
//         <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
//       </Stack>
//     </header>
//   );
// }

// export default Navbar;


import React from 'react'

function Header() {
  return (
    <div>Header</div>
  )
}

export default Header
