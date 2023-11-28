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

  const handleSearch = (e) => {
    console.log("Called");
    e.preventDefault();

    if (e.target.value == "") {
      setSearchTerm([]);
      return false;
    }
    setSearchTerm(e.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const radioStyle = {
    color: "white", // Set the color of the radio button's circle when inactive
    "&.Mui-checked": {
      color: "white", // Set the color of the radio button's circle when active
    },
    "&.MuiFormControlLabel-label": {
      color: "white", // Set the color of the label text
    },
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
      <div className="relative top-[10%] flex ">
        <div className=" h-[70%] bg-[#13232f] mt-3 p-4 ml-8 text-gray-200 rounded-md shadow-2xl  mb-3">
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              className="text-white m-2 center "
            >
              Level
            </FormLabel>
            <hr className="shdaow-xl" />
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="beginner"
              name="radio-buttons-group"
              color={`${radioStyle.color}`}
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

          <span className="w-full h-1 p-2"></span>
          <hr className="my-4 mx-2 bg-[#090f20] " />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" className="font-[800] ">
                Price
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="age"
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={500}>Above 500</MenuItem>
                <MenuItem value={1000}>Above 1000</MenuItem>
                <MenuItem value={1500}>Above 1500</MenuItem>
                <MenuItem value={2000}>Above 2000</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <hr className="my-4 mx-2" />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Language
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="nepali"
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
          <span className="text-black font-[300] my-1">Rating</span>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
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
          <Button variant="contained">Filter Now</Button>
          <Button variant="outlined">Reset</Button>
           </Stack>
        </div>
        <h1>right side bar</h1>
      </div>
    </div>
  );
}

export default Course;
