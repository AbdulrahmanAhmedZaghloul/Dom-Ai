import { useContext } from "react";
import { SnackbarContext } from "../context/snackbarContext";


export const useSnackbar = ()=> useContext(SnackbarContext);