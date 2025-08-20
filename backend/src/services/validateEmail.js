
export const validateEmail=(email)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailRegex.test(email)){
        return {valid:true};
    }else{
        return {valid:false};
    }
}