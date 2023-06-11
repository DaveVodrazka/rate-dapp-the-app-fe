import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { chains } from "../chains";
import { useUser } from "../hooks/useUser";
import { changeChain } from "../calls";

export const SelectChain = () => {
  const { chainId } = useUser();

  const handleChange = (event: SelectChangeEvent) => {
    const chainId = event.target.value;
    changeChain(chainId);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select Chain</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={chainId}
        label="Select Chain"
        onChange={handleChange}
      >
        {chains.map((chain, i) => (
          <MenuItem key={i} value={chain.chainId}>
            {chain.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
