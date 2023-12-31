import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Course() {
  const [searchTerm, setSearchTerm] = useState([]);
  const [value, setValue] = useState(3);
  const [hover, setHover] = useState(-1);

  const [Filter,setFilter] = useState({
    level: "beginner",
    price:500,
    language:"english",
    rating:2,


  })


  // searching the course 
  const handleSearch = (e) => {
    console.log("Called");
    e.preventDefault();

    if (e.target.value == "") {
      setSearchTerm([]);
      return false;
    }
    setSearchTerm(e.target.value);
  };

  // for filter the course

  const handleChangeFilter = (e) => {
    e.preventDefault()
    console.log(Filter);

  };


  

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <div className="">
      <form className=" relative  bg-[#090f20] p-3  text-center md:text-right ">
        <div className="relative">
          <input
            type="search"
            placeholder="web development"
            className=" p-4  bg-transparent border-b rounded-md border-b-slate-800 text-gray-400"
            onChange={(e) => handleSearch(e)}
          />
          <button className="absolute right-1  top-2 p-2 bg-slate-900 rounded-full ">
            <SearchIcon color="primary" />
          </button>
        </div>
      </form>
      <div className="relative  flex ">
        <div className=" h-[70%] bg-[#13232f] mt-1 p-2  ml-8 text-gray-200 rounded-md shadow-2xl  ">
          <div className="text-left p-2">
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              className="text-white m-2 center "
            >
              <span className="text-blue-900 font-[500] text-xl">Level</span>
            </FormLabel>
            <hr className="shdaow-xl" />
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={Filter.level}
              name="radio-buttons-group"
              onChange={(event) => setFilter({ ...Filter, level: event.target.value })}
            >
              <FormControlLabel
                value="beginner"
                control={<Radio />}
                label="Beginner"
                labelPlacement="end"
              />
              <FormControlLabel
                value="intermediated"
                control={<Radio />}
                label="Intermediated"
              />
              <FormControlLabel
                color="white"
                value="Expert"
                control={<Radio />}
                label="Expert"
              />
            </RadioGroup>
          </FormControl>
          </div>

          <hr className="my-4 mx-2 bg-[#090f20] " />
          <div className=" px-2">
          <span className="text-blue-900 font-[500] text-xl ">Price</span>
          <Box sx={{ minWidth: 120, marginTop:3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" className="font-[800] ">
                Price
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="price"
                value={Filter.price}
                onChange={(e) => setFilter({...Filter, price:e.target.value})}
                style={{ color: 'white' }}

              >
                <MenuItem  value={500} >Above 500</MenuItem>
                <MenuItem value={1000}>Above 1000</MenuItem>
                <MenuItem value={1500}>Above 1500</MenuItem>
                <MenuItem value={2000}>Above 2000</MenuItem>
              </Select>
            </FormControl>
          </Box>
          </div>


          <hr className="my-4 mx-2" />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
            <span className="text-blue-900 font-[500] text-xl ">Language</span>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={Filter.language}
              onChange={(e) => setFilter({...Filter, language: e.target.value})}
            >
              <FormControlLabel
                value= "nepali"
                control={<Radio />}
                label="Nepali"
              />
              <FormControlLabel
                value="english"
                control={<Radio />}
                label="English"
              />
            </RadioGroup>
          </FormControl>

          <hr className="my-4 mx-2" />
          <span className="text-blue-900 font-[400] text-xl ">Rating</span>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={Filter.rating}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => setFilter({ ...Filter, rating: newValue })}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
           
           <hr className="my-2" />
           <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleChangeFilter}>Filter Now</Button>
          <Button variant="outlined">Reset</Button>
           </Stack>
        </div>
        <h1>right side bar</h1>
      </div>
    </div>
  );
}

export default Course;
