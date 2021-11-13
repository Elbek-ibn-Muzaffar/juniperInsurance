// B.R.R
<template>
  <!-- <img src="./assets/logo.png">
  <div>
    <p>
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button type="primary">el-button</el-button>
    
  </div> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <div>
   <el-container>
    
    <!-- header -->
    <el-header>
      <el-row class="navbar">
        <el-col :span="6" class="name">
          <h1>Vehicle Insuarence</h1>
        </el-col>

        <el-col :span="10" class="menus">
           <el-menu  class="el-menu-demo" mode="horizontal">
             <el-menu-item index="1">
               <router-link to="/">Home</router-link>
             </el-menu-item>
             <el-menu-item index="2">
               <router-link to="/userList">User</router-link>
             </el-menu-item>

             <el-menu-item index="3">
               <router-link to="/vehicle">Vehicle</router-link>
             </el-menu-item>

             
              <el-menu-item index="4">
               <router-link to="/listInsurance">Insuarence</router-link>
             </el-menu-item>

              <el-menu-item index="5">
               <router-link to="/">Search</router-link>
             </el-menu-item>



           </el-menu>
        </el-col>
        <el-col span="2"></el-col>
      </el-row>


    </el-header>
    
    
    <el-container>
      <el-aside width="200px">
        <el-dropdown size="medium" split-button type="primary">
          Users
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown size="medium" split-button type="primary">
          Vehicle
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown size="medium" split-button type="primary">
          Insurance
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>


      </el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  
  </el-container>


  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
    },

    created() {
      
      if(localStorage.getItem("market-token")==null){
         this.$router.push('/authentication')
      }
    },
}
</script>

<style>
*{margin:0 ; padding:0}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}


/* Yuqori navbar------------------------------------------- */

.menus
{
  border: 1px solid white;
}


.el-menu
{
  background-color: rgb(19, 18, 18)!important;
}

.el-menu--horizontal>.el-menu-item
{
  height: auto!important;
  line-height: 1.5!important;
  /* line-height: 2!important; */
}

.el-menu-item
{
  height: auto!important;
  line-height: 1.2!important;
}

.el-menu-item a
{
  color: white!important;
  text-decoration: none;
  font-size: 20px!important;
}

.el-menu-item:hover
{
  background-color: #2c3e50!important;
}

.el-menu-demo
{
  background-color: rgb(19, 18, 18);
}

.navbar
{
  background-color: rgb(19, 18, 18);
  padding: 15px 0;
}

.name
{
  border: 1px solid white;
}

.name h1
{
  font-weight: 200;
  color: white;
  font-family: "Georgia"
}

.el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    /* line-height: 60px; */
    padding: 0!important;
    height: auto!important;
  }

  .el-aside {
    background-color: white;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
    padding: 30px 0 0 0;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  .el-dropdown
  {
    margin: 0!important;
    padding: 0!important;
    display: block!important;;
  }

  .el-dropdown .el-button
  {
    width: 51%;
  }

  .el-dropdown .el-dropdown__caret-button
  {
    width: 11%;
  }
</style>
