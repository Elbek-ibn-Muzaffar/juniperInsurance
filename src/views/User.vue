<template >
    <div>
        <el-container class="cont">
            <div>
                <el-row type="flex" justify="space-arround">
                    <el-col :span="8">
                        <el-button type="primary" @click="dialogFormVisible = true; tests()">
                            Add User
                        </el-button>
                    </el-col>

                    <el-col :span="8">
                        <el-input placeholder="Search User"/>
                    </el-col>
                </el-row>
            </div>

            <el-conatiner>
                <div>
                    <el-row>
                        <el-col :span="24">
                            <el-table :data="UserResDto" stripe style="border:1px solid red; width:100%">
                                <el-table-column prop="name" label="User_Name" width="220"/>
                                <el-table-column prop="lastName" label="User_LastName" width="220"/>
                                <el-table-column prop="licenceNo" label="licence_No" width="220"/>
                                <el-table-column prop="pasport" label="Pasport_Info" width="220"/>
                            </el-table>    
                        </el-col>
                    </el-row>
                </div>
            </el-conatiner>


            <div>
                <el-dialog title="Shipping address" v-model="dialogFormVisible">
                    <el-form>
                        <el-form-item label="User Name" :label-width="formLabelWidth">
                        <el-input v-model="UserReqDto.name" autocomplete="off"></el-input>  
                        <!-- kerak -->
                        </el-form-item>

                        <el-form-item label="User Lastname" :label-width="formLabelWidth">
                            <el-input v-model="UserReqDto.lastName" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Pasport" :label-width="formLabelWidth">
                            <el-input v-model="UserReqDto.pasport" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="LicenceNo" :label-width="formLabelWidth">
                            <el-input v-model="UserReqDto.licenceNo" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Password" :label-width="formLabelWidth">
                            <el-input type="password" v-model="UserReqDto.password" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Role" :label-width="formLabelWidth">
                            <el-input v-model="UserReqDto.roles[0].name" autocomplete="off"></el-input>
                        </el-form-item>

                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false, saveUsers()">Save</el-button>
                        </span>
                    </template>
                </el-dialog>
            </div>

        </el-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {

            roleName:null,

            UserResDto:[
                {
                    name:null,
                    lastName:null,
                    licenceNo:null,
                    pasport:null
                }
            ],

            UserReqDto:{
                name:null,
                lastName:null,
                pasport:null,
                licenceNo:null,
                password:null,
                roles:[
                    {
                        name:null
                    }
                ]
            },
            dialogTableVisible: false,
            dialogFormVisible: false,
            formLabelWidth: '120px',
        }
    },

    methods: {
        getAllUsers()
        {
            axios.get('v1/userResource/getAllUsers')
            .then(res=>{
                this.UserResDto=res.data;
                console.log(res.data);
            })
        },
        tests()
        {
            console.log("hi");
        },
        
        saveUsers()
        {
            axios.post('v1/userResource/saveUser',this.UserReqDto)
            .then(res=>{
                console.log(res.data);
            })
            // this.UserReqDto.roles[0].name=this.roleName;
            // console.log(this.UserReqDto)
        }
        ,

        open() {
        this.$prompt('Please input your e-mail', 'Tip', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputPattern: null,
          inputErrorMessage: 'Invalid Email'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: 'Your email is:' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });
        });
      }
    },
    created() {
        this.getAllUsers()
    },
}
</script>
<style>
.cont
{
    flex-direction: column!important;;
}
</style>
