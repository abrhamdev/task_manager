/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const ProtectedRoot = ({children})=>{
    const isAuthenticated=localStorage.getItem("authtoken") || sessionStorage.getItem("authtoken");
    return (
       isAuthenticated? children :<Navigate to="/login"/>
)};
 
export default ProtectedRoot;