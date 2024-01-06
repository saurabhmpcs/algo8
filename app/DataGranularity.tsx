import { useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// const ITEM_HEIGHT = 24;
// const ITEM_PADDING_TOP = 2;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 50,
//     },
//   },
// };

const names = ["Hourly", "Daily", "Monthly"];

export default function DataGranularity() {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string | null>(
    "Data Granularity: Hourly"
  );

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName("Data Granularity " + value);
  };

  const handleOpen = () => {
    setPersonName("Filter Data Granularity");
  };

  return (
    <div className="mt-4 h-10 rounded-md ">
      <FormControl className="bg-blue-600 w-64 h-10 rounded-md">
        <Select
          className="h-10 text-white"
          displayEmpty
          value={personName}
          onOpen={handleOpen}
          onChange={handleChange}
          input={<OutlinedInput />}
          placeholder="Data Granularity: Hourly"
          renderValue={(selected) => {
            return selected;
          }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
