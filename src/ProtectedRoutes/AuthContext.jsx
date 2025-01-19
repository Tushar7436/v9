import  {Navigate, Outlet} from "react-router-dom";

export const AuthContext =() => {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    return isLoggedIn === "true"?<Outlet/>:<Navigate to ="login"/>;
}

export default AuthContext;