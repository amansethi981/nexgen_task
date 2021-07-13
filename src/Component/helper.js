export const adddetails=(data,next)=>{
    console.log(data)
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
      }
}