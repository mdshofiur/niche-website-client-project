import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";


const useAuth = () => {
    const Auths = useContext(AuthContext);
    return Auths;
}


export default useAuth;