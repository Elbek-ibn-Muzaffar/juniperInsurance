import axios from 'axios'

const onRequestSucsess= config =>{
    const token=localStorage.getItem("market-token");
    const url_server="https://juniper-vehicle-insurance.herokuapp.com/";

    if(token){
        if(!config.headers)
        {
            config.headers={}
        }
        config.headers.Authorization= `Bearer ${token}`;
    }
        config.url=`${url_server}${config.url}`;
        return config;
    
    

};

const setAxiosInter= onUnauthenticated=>{
    const onResponseError=err=>{
        const status=err.status||err.response.status
        if(status===403||status===401||status==500){
            onUnauthenticated();
            
        }

        return Promise.reject(err);
    };

    if(axios.interceptors){
        axios.interceptors.request.use(onRequestSucsess)
        axios.interceptors.response.use(res=>res, onResponseError)
    }
}

export {onRequestSucsess, setAxiosInter}