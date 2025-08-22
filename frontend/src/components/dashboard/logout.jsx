
function Logout(){
  if(localStorage.getItem("authtoken")){
    localStorage.removeItem("authtoken");
  }
  else if(sessionStorage.getItem("authtoken")){
    sessionStorage.removeItem("authtoken");
  }
  window.location.href="/";
};
export default Logout;