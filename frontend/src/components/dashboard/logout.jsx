
function Logout(){
  if(localStorage.getItem("authtoken")){
    localStorage.removeItem("authtoken");
  }
  else if(sessionStorage.getItem("authtoken")){
    sessionStorage.removeItem("authtoken");
  }
  window.location.href="/login";
};
export default Logout;