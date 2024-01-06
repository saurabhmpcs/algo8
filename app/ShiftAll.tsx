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

const names = ["All", "Day", "Evening", "Night"];

export default function ShiftAll() {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string | null>("Shift All");

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName("shift " + value);
  };

  const handleOpen = () => {
    setPersonName("select filter");
  };

  return (
    <div className="mt-4 h-10 rounded-md">
      <FormControl className="bg-blue-600 text-white w-40 h-10  rounded-md">
        <Select
          className="h-10 text-white"
          displayEmpty
          onOpen={handleOpen}
          value={personName}
          onChange={handleChange}
          placeholder="Shift: All"
          input={<OutlinedInput />}
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
