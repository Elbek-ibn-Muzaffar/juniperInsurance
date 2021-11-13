import {setAxiosInter} from "./axios-interceptor"

export function initVueApp(){
    setAxiosInter(()=>console.log("Unauthorized!"))
}