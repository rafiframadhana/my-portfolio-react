import Tooltip from "@mui/material/Tooltip";

const CustomTooltip = ({ title, children }) => {
  return (
    <Tooltip title={title} arrow>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
