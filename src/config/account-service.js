import axios from 'axios'
import store from './store'
// import {createRouter} from 'vue-router'


export default class AccountService{
 
    constructor(router){
        this.router=router;
        this.init();
    }

    init(){
        const token=localStorage.getItem("market-token")
        if(!store.getters.account&&!store.getters.logon&&token)
        {
            this.retriveAccount();
        }
    }

    retriveAccount(){
        store.commit("authenticate")
        axios.get("userRecource/account")
        .then(response=>{
            const account = response.data;
            console.log(response.data);
            if(account){
                store.commit("authenticate", account);
                if(sessionStorage.getItem("request-url")){
                    this.$router.replace(sessionStorage.getItem("request-url"));
                    sessionStorage.removeItem("request-url");
                }
                else{
                    store.commit("logout");
                    this.$router.push('/');
                    sessionStorage.removeItem("request-url");
                    sessionStorage.removeItem("market-token");
                }
            }
        })

        .catch(()=>{
            store.commit("logout");
            this.$router.push()('/');

        })
    }
}