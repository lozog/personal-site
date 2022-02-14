import { useEffect } from "react";
import { navigate } from "@reach/router"

export default (): void => {
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
};
