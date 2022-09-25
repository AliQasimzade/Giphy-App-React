import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "./css/SearchBox.css";

const SearchBox = ({ setData }) => {
  const searchRef = useRef(null);

  const handleSearchGif = async () => {
    if (searchRef.current.value !== "" || searchRef.current.value !== "   ") {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=rlNxIFcGHV2cU55bZOhfYeFDRZAEeAUk&q=${searchRef.current.value}&offset=0&rating=g&lang=en`
      );
      setData(response.data.data);
    }
  };
  return (
    <div className="search-box">
      <TextField
        id="search-gif"
        label="Search Gif"
        variant="outlined"
        ref={searchRef}
        onKeyUp={(e) => {
          searchRef.current.value = e.target.value;
        }}
      />
      <Button className="search-btn" onClick={() => handleSearchGif()}>
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </Button>
    </div>
  );
};

export default SearchBox;
