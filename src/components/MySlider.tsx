import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}
interface Props {}

export const MySlider: React.FC<Props> = () => {
  const [value, setValue] = React.useState<number[]>([7000, 50000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="mt-5 ">
      <Box sx={{ width: 260 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={500}
          max={150000}
        />
      </Box>
    </div>
  );
};
