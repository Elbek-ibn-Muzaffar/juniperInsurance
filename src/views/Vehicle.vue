<template >
    <div>
        <el-cotainer class="cont">
            <div>
                <el-row type="flex" justify="space-arround">
                    <el-col :span="8">
                        <el-button type="primary" @click="dialogFormVisible=true">
                            Add Vehicle
                        </el-button>
                    </el-col>

                    <el-col :span="8">
                        <el-input placeholder="Search User"/>
                    </el-col>
                </el-row>
            </div>

            <el-container>
                <div>
                    <el-row>
                        <el-col :span="24">
                            <el-table :data="VehicleResDto" stripe style="border:1px solid red; width:100%">
                                <el-table-column prop="manufactory" label="Manufactory" width="140"/>
                                <el-table-column prop="vnumber" label="Vehicle_No" width="140"/>
                                <el-table-column prop="category" label="Category" width="140"/>
                                <el-table-column prop="color" label="Color" width="140"/>
                                <el-table-column prop="ownerName" label="Owner_name" width="140"/>
                                <el-table-column prop="ownerLastName" label="Last_name" width="140"/>
                            </el-table>    
                        </el-col>
                    </el-row>
                </div>
            </el-container>

            <div>
                <el-dialog title="Add Vehicle" v-model="dialogFormVisible">
                    <el-form>
                        <el-form-item label="Manufactory" :label-width="formLabelWidth">
                        <el-input v-model="VehicleReqDto.manufactory" autocomplete="off"></el-input>  
                        <!-- kerak -->
                        </el-form-item>

                        <el-form-item label="Vehicle Number" :label-width="formLabelWidth">
                            <el-input v-model="VehicleReqDto.vnumber" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Category" :label-width="formLabelWidth">
                            <el-input v-model="VehicleReqDto.category" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Color" :label-width="formLabelWidth">
                            <el-input v-model="VehicleReqDto.color" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Pasport" :label-width="formLabelWidth">
                            <el-input v-model="VehicleReqDto.pasport" autocomplete="off"></el-input>
                        </el-form-item>

                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false, saveVehicle()">Save</el-button>
                        </span>
                    </template>
                </el-dialog>
            </div>
        </el-cotainer>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data()
    {
        return {
            VehicleResDto:[
                {
                    manufactory:null,
                    vnumber:null,
                    category:null,
                    color:null,
                    ownerName:null,
                    ownerLastName:null,
                }
            ],
            dialogTableVisible: false,
            dialogFormVisible: false,
            formLabelWidth: '120px',
            
            VehicleReqDto:{
                manufactory:null,
                vnumber:null,
                color:null,
                category:null,
                pasport:null
            }
        }
    },

    methods: {
        getAllVehicles()
        {
            axios.get("vehicle/getAllVehicles")
            .then(res=>{
                this.VehicleResDto=res.data;
            })
        },
        saveVehicle()
        {
            axios.post("vehicle/saveVehicle",this.VehicleReqDto)
            .then(res=>{
                console.log(res.data);
            })

            // console.log(this.VehicleReqDto);
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
        this.getAllVehicles();
    },
}
</script>
<style>
.cont
{
    flex-direction: column!important;;
}
</style>