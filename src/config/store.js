import { createStore } from 'vuex'

// Create a new store instance.
 const store=createStore({
    state:{
        logon:false,
        userIdentity:null,
        authenticated:false
    },
    mutations:{
        authenticate(state){
            state.logon=true;
        },
        authenticated(state,identity)
        {
            state.userIdentity=identity;
            state.authenticated=true;
            state.logon=false;
        },
        logout(state){
            state.userIdentity=null;
            state.authenticated=false;
            state.logon=false;
        }
    },
    getters:{
        logon:state=>state.logon,
        authenticated: state=>state.authenticated
    }
})

export default store;

//  store({
//     state:{
//         logon:false,
//         userIdentity:null,
//         authenticated:false
//     },
//     mutations:{
//         authenticate(state){
//             state.logon=true;
//         },
//         authenticated(state,identity)
//         {
//             state.userIdentity=identity;
//             state.authenticated=true;
//             state.logon=false;
//         },
//         logout(state){
//             state.userIdentity=null;
//             state.authenticated=false;
//             state.logon=false;
//         }
//     },
//     getters:{
//         logon:state=>state.logon,
//         authenticated: state=>state.authenticated
//     }
// })