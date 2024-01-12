import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "90%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WarningOutlinedIcon sx={{ color: "red", fontSize: "10rem" }} />
      <h1 style={{ color: "red" }}>ERROR OCCURED</h1>
    </div>
  );
};

export default Error;
