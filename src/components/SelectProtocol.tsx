import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useUi } from "../hooks/useUi";
import { setSelectedProtocol } from "../redux/actions";
import { protocols } from "../chains";
import { useUser } from "../hooks/useUser";

export const SelectProtocol = () => {
  const { chainId } = useUser();
  const { selectedProtocol } = useUi();

  const availableProtocols = protocols.filter((p) => p.chainId === chainId);
  const fallbackAddress = availableProtocols[0].address;

  if (
    !selectedProtocol ||
    !availableProtocols.some((p) => p.address === selectedProtocol)
  ) {
    console.log({ availableProtocols, selectedProtocol });
    // currently selected protocol is not available for currently selected chain
    // select first on the list
    setSelectedProtocol(fallbackAddress);
  }

  const handleChange = (event: SelectChangeEvent) => {
    const address = event.target.value;
    setSelectedProtocol(address);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-protocol-label">Select Protocol</InputLabel>
      <Select
        labelId="select-protocol-label"
        id="select-protocol"
        value={selectedProtocol || fallbackAddress}
        label="Select Protocol"
        onChange={handleChange}
      >
        {availableProtocols.map((protocol, i) => (
          <MenuItem key={i} value={protocol.address}>
            {protocol.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
