<template>
    <div class="admin">
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <el-form label-width="60px" class="formLogin">
                    <el-form-item >
                        <label for="elIn1">Username</label>
                        <el-input  type="text" v-model="login.name" class="logDetails" name="elIn1"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <label for="elIn2">Password</label>
                        <el-input  type="password" v-model="login.password" class="logDetails" name="elIn2"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="logining">LogIn</el-button>
                    </el-form-item>

                </el-form>    
            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios'
// import AccountService from '../config/account-service'
export default {
    data() {
        return {
            login:{
                name:null,
                password:null
            }
        }
    },
    methods: {
        logining()
        {
            axios.post("authenticate/generateToken",this.login)
            .then(res=>{
                console.log(res.data)
                const token=res.data.jwt;
                if(localStorage.getItem("market-token")!=null)
                {
                    localStorage.removeItem("market-token")
                }
                localStorage.setItem("market-token", token);
                // new AccountService(this.$route).retriveAccount();
                this.$router.replace("/");
                sessionStorage.setItem('kirish',1);
            })
        }
    },
    
}
</script>
<style scoped>
.box-card {
    width: 480px;
  }

  .logDetails
  {
      width: 80%;
  }

  .el-form-item
  {
      margin-left: 0px !important;
  }

  .formLogin
  {
      /* margin-top: 60px; */
      /* border: 1px solid red; */
      padding: 15px 0;
      width: 70%;
       box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

</style>