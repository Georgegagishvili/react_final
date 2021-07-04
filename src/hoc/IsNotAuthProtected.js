import { useEffect } from "react/cjs/react.development";
import { Redirect } from "react-router";

export const IsNotAuthProtected = (Component) => {
  const IsNotAuthProtected = (props) => {
    useEffect(() => {
      console.log("//");
    }, []);

    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (token) return <Redirect to="/"></Redirect>;

    return <Component {...props}></Component>;
  };

  return IsNotAuthProtected;
};
