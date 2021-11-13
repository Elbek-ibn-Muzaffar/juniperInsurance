<template>
    <div class="insurance">
        <el-container>
            <el-header>
                <el-row type="flex" class="headers" >
                    <el-col :span="16" class="inbuttons" type="flex" justify="flex-start">
                        <el-button-group>
                            <el-button type="primary"><router-link to="/listInsurance">Insurance List</router-link></el-button>
                            <el-button type="primary"><router-link to="/">Add Insurance</router-link></el-button>
                        </el-button-group>
                    </el-col>
                    <el-col :span="8" class="insearch">
                        <el-input placeholder="Please input"/>
                    </el-col>
                </el-row>
            </el-header>

            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>

.el-header
{
    background-color:white;
}

.headers a
{
    text-decoration: none;
    color: white;
}

.inbuttons
{
    border: 1px solid red;
}


</style>
