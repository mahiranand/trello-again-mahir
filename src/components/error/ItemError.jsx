import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";

const ItemError = () => {
  return (
    <div
      style={{
        margin: '1rem 0rem',
        width: '40%',
        display: "flex",
        height: "90%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WarningOutlinedIcon sx={{ color: "red", fontSize: "2rem" }} />
      <p style={{ color: "red" }}>ERROR OCCURED</p>
    </div>
  );
};

export default ItemError;
