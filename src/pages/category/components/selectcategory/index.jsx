import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectCategory = ({ handleCategory }) => {
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
    handleCategory(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">cateogory</InputLabel>
      <Select
        id="cateogory-simple-select"
        value={category}
        label="cateogory"
        onChange={handleChange}
      >
        <MenuItem value={"world"}>World</MenuItem>
        <MenuItem value={"arts"}>Arts</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectCategory;
