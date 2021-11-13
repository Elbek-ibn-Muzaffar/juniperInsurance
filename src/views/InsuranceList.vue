<template>
    <div class="List">
        <el-container>
            
            <div>
        
                    <el-row type="flex" class="headers" style="border: 1px solid red">
                        <el-col :span="16" class="inbuttons" type="flex" justify="flex-start">
                            <el-button-group>
                                <el-button type="primary"><router-link to="/listInsurance">Insurance List</router-link></el-button>
                                <el-button type="primary" @click="dialogFormVisible=true">Add Insurance</el-button>
                            </el-button-group>
                        </el-col>
                        <el-col :span="8" class="insearch">
                            <el-input placeholder="Please input"/>
                        </el-col>
                    </el-row>
        
            </div>
            
            <el-container>
                <div>
                    
                        <el-row style="border: 1px solid black">
                            <el-col :span="24" style="border: 1px solid red">
                                    <el-table :data="InsuranceResDto" stripe style="border:1px solid red; width:100%">
                                        <el-table-column prop="vmanufactory" label="Manufactory" width="180"/>
                                        <el-table-column prop="vnumber" label="V_Number" width="180"/>
                                        <el-table-column prop="ovnerName" label="Ovner_name" width="180"/>
                                        <el-table-column prop="ovnerLastName" label="Last_name" width="180"/>
                                        <el-table-column prop="inNumber" label="In_Number" width="180"/>
                                        <el-table-column prop="date" label="Expiraton_Date" width="180"/>
                                        <el-table-column label="Expiraton_Date" width="180"><el-button type="danger" icon="el-icon-delete" circle></el-button></el-table-column>
                                    </el-table>
                            </el-col>
                        </el-row>
                     
                </div>
            </el-container>
             
             <div>
                <el-dialog title="Add Insurance" v-model="dialogFormVisible">
                    <el-form>
                        <el-form-item label="Insurance provider" :label-width="formLabelWidth">
                        <el-input v-model="InsuranceReqDto.provider" autocomplete="off"></el-input>  
                        <!-- kerak -->
                        </el-form-item>

                        <el-form-item label="Insurance number" :label-width="formLabelWidth">
                            <el-input v-model="InsuranceReqDto.inNumber" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Expired date" :label-width="formLabelWidth">
                            <el-input v-model="InsuranceReqDto.date" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Vehicle Number" :label-width="formLabelWidth">
                            <el-input v-model="InsuranceReqDto.v_number" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Pasport" :label-width="formLabelWidth">
                            <el-input v-model="InsuranceReqDto.pasport" autocomplete="off"></el-input>
                        </el-form-item>


                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false, saveInsurance()">Save</el-button>
                        </span>
                    </template>
                </el-dialog>
             </div>    
        </el-container>
    </div>
</template>

<script lang="ts">

import axios from 'axios'

export default {
    data() {
        return {
            InsuranceResDto:[
                {
                    vmanufactory:null,
                    vnumber:null,
                    ovnerName:null,
                    ovnerLastName:null,
                    inNumber:null,
                    date:null
                }
            ],
            dialogTableVisible: false,
            dialogFormVisible: false,
            formLabelWidth: '140px',

            InsuranceReqDto:{
                inNumber:null,
                provider:null,
                date:null,
                v_number:null,
                pasport:null
            }
        }
    },

    methods: {
        getAllInsurances()
        {
            axios.get("insurance/getAllNotbrokenInsurance")
            .then(res=>{
                this.InsuranceResDto=res.data;
                console.log(this.InsuranceResDto);
            })
        },
        
        saveInsurance()
        {
            console.log(this.InsuranceReqDto);
            axios.post("insurance/saveInsurance",this.InsuranceReqDto)
            .then(res=>{
                console.log(res.data);
            })
        },

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
        this.getAllInsurances();
    },
}
</script>

<style scoped>

.el-container
{
    flex-direction: column !important;
}

</style>