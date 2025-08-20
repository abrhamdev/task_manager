/* eslint-disable react/prop-types */
import { createContext,useEffect,useState } from "react";
import { API_URL } from "../../../../api.config";

// eslint-disable-next-line react-refresh/only-export-components
export const userDataContext=createContext();  

export const UserDataProvider=({children})=>{

    const [userData,setUserData]=useState({ username:null, userid:null,});
    const tokenKey="authtoken";
    const fetchUserData=async(token)=>{
        try{
             const response=await fetch(`${API_URL}/api/users/userData`,{
                method:"post",
                headers:{
                    authorization: `Bearer ${token}`,
                }
             });
             if(response.ok){
                const data=await response.json();
                setUserData({username:data.username,userid:data.userId});
             }

        }catch(err){
            console.log("Error fetching User Data "+err.message);
        }
    }

    useEffect(()=>{
     const token=localStorage.getItem(tokenKey) || sessionStorage.getItem(tokenKey);
     if(token){
        fetchUserData(token);
     }else{
        setUserData({username:null,userid:null});
     }
    },[]);

    useEffect(() => {
        const handleStorageChange = () => {
          const token = localStorage.getItem(tokenKey) || sessionStorage.getItem(tokenKey);
    
          if (token) {
            fetchUserData(token);
          } else {
            setUserData(null);
          }
        };
    
        window.addEventListener("storage", handleStorageChange);
    
        return () => {
          window.removeEventListener("storage", handleStorageChange);
        };
      }, []);

    return(
        <userDataContext.Provider value={{userData,setUserData}}>
            {children}
        </userDataContext.Provider>
    );
}
