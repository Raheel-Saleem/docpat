import {useState, useContext, Fragment} from "react";
import Backdrop from "@mui/material/Backdrop";
import {CircleLoader} from "react-spinners";
import LoaderContext from "../../store/loder-context";
function CustomLoader() {
  const ctx = useContext(LoaderContext);

  return ctx.isLoad ? (
    <div>
      <Backdrop sx={{color: "#FFFFFF", zIndex: (theme) => theme.zIndex.drawer + 1}} open={ctx.isLoad}>
        <CircleLoader color={"#FFFFFF"} loading={ctx.isLoad} size={100} />
      </Backdrop>
    </div>
  ) : (
    ""
  );
}

export default CustomLoader;
