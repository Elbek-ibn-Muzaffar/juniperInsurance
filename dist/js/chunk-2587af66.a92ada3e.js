(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2587af66"],{4313:function(e,t,n){"use strict";n("5066")},5066:function(e,t,n){},c999:function(e,t,n){"use strict";n.r(t);var l=n("7a23");Object(l["L"])("data-v-6754ea90");var r={class:"List"},a=Object(l["q"])("Insurance List"),u=Object(l["q"])("Add Insurance"),c={class:"dialog-footer"},o=Object(l["q"])("Cancel"),b=Object(l["q"])("Save");function i(e,t,n,i,d,s){var f=Object(l["R"])("router-link"),O=Object(l["R"])("el-button"),j=Object(l["R"])("el-button-group"),p=Object(l["R"])("el-col"),m=Object(l["R"])("el-input"),g=Object(l["R"])("el-row"),h=Object(l["R"])("el-table-column"),I=Object(l["R"])("el-table"),_=Object(l["R"])("el-container"),v=Object(l["R"])("el-form-item"),R=Object(l["R"])("el-form"),V=Object(l["R"])("el-dialog");return Object(l["I"])(),Object(l["m"])("div",r,[Object(l["r"])(_,null,{default:Object(l["gb"])((function(){return[Object(l["n"])("div",null,[Object(l["r"])(g,{type:"flex",class:"headers",style:{border:"1px solid red"}},{default:Object(l["gb"])((function(){return[Object(l["r"])(p,{span:16,class:"inbuttons",type:"flex",justify:"flex-start"},{default:Object(l["gb"])((function(){return[Object(l["r"])(j,null,{default:Object(l["gb"])((function(){return[Object(l["r"])(O,{type:"primary"},{default:Object(l["gb"])((function(){return[Object(l["r"])(f,{to:"/listInsurance"},{default:Object(l["gb"])((function(){return[a]})),_:1})]})),_:1}),Object(l["r"])(O,{type:"primary",onClick:t[0]||(t[0]=function(e){return d.dialogFormVisible=!0})},{default:Object(l["gb"])((function(){return[u]})),_:1})]})),_:1})]})),_:1}),Object(l["r"])(p,{span:8,class:"insearch"},{default:Object(l["gb"])((function(){return[Object(l["r"])(m,{placeholder:"Please input"})]})),_:1})]})),_:1})]),Object(l["r"])(_,null,{default:Object(l["gb"])((function(){return[Object(l["n"])("div",null,[Object(l["r"])(g,{style:{border:"1px solid black"}},{default:Object(l["gb"])((function(){return[Object(l["r"])(p,{span:24,style:{border:"1px solid red"}},{default:Object(l["gb"])((function(){return[Object(l["r"])(I,{data:d.InsuranceResDto,stripe:"",style:{border:"1px solid red",width:"100%"}},{default:Object(l["gb"])((function(){return[Object(l["r"])(h,{prop:"vmanufactory",label:"Manufactory",width:"180"}),Object(l["r"])(h,{prop:"vnumber",label:"V_Number",width:"180"}),Object(l["r"])(h,{prop:"ovnerName",label:"Ovner_name",width:"180"}),Object(l["r"])(h,{prop:"ovnerLastName",label:"Last_name",width:"180"}),Object(l["r"])(h,{prop:"inNumber",label:"In_Number",width:"180"}),Object(l["r"])(h,{prop:"date",label:"Expiraton_Date",width:"180"}),Object(l["r"])(h,{label:"Expiraton_Date",width:"180"},{default:Object(l["gb"])((function(){return[Object(l["r"])(O,{type:"danger",icon:"el-icon-delete",circle:""})]})),_:1})]})),_:1},8,["data"])]})),_:1})]})),_:1})])]})),_:1}),Object(l["n"])("div",null,[Object(l["r"])(V,{title:"Add Insurance",modelValue:d.dialogFormVisible,"onUpdate:modelValue":t[8]||(t[8]=function(e){return d.dialogFormVisible=e})},{footer:Object(l["gb"])((function(){return[Object(l["n"])("span",c,[Object(l["r"])(O,{onClick:t[6]||(t[6]=function(e){return d.dialogFormVisible=!1})},{default:Object(l["gb"])((function(){return[o]})),_:1}),Object(l["r"])(O,{type:"primary",onClick:t[7]||(t[7]=function(e){return d.dialogFormVisible=!1,s.saveInsurance()})},{default:Object(l["gb"])((function(){return[b]})),_:1})])]})),default:Object(l["gb"])((function(){return[Object(l["r"])(R,null,{default:Object(l["gb"])((function(){return[Object(l["r"])(v,{label:"Insurance provider","label-width":d.formLabelWidth},{default:Object(l["gb"])((function(){return[Object(l["r"])(m,{modelValue:d.InsuranceReqDto.provider,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.InsuranceReqDto.provider=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1},8,["label-width"]),Object(l["r"])(v,{label:"Insurance number","label-width":d.formLabelWidth},{default:Object(l["gb"])((function(){return[Object(l["r"])(m,{modelValue:d.InsuranceReqDto.inNumber,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.InsuranceReqDto.inNumber=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1},8,["label-width"]),Object(l["r"])(v,{label:"Expired date","label-width":d.formLabelWidth},{default:Object(l["gb"])((function(){return[Object(l["r"])(m,{modelValue:d.InsuranceReqDto.date,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.InsuranceReqDto.date=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1},8,["label-width"]),Object(l["r"])(v,{label:"Vehicle Number","label-width":d.formLabelWidth},{default:Object(l["gb"])((function(){return[Object(l["r"])(m,{modelValue:d.InsuranceReqDto.v_number,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.InsuranceReqDto.v_number=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1},8,["label-width"]),Object(l["r"])(v,{label:"Pasport","label-width":d.formLabelWidth},{default:Object(l["gb"])((function(){return[Object(l["r"])(m,{modelValue:d.InsuranceReqDto.pasport,"onUpdate:modelValue":t[5]||(t[5]=function(e){return d.InsuranceReqDto.pasport=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1},8,["label-width"])]})),_:1})]})),_:1},8,["modelValue"])])]})),_:1})])}Object(l["J"])();var d=n("bc3a"),s=n.n(d),f={data(){return{InsuranceResDto:[{vmanufactory:null,vnumber:null,ovnerName:null,ovnerLastName:null,inNumber:null,date:null}],dialogTableVisible:!1,dialogFormVisible:!1,formLabelWidth:"140px",InsuranceReqDto:{inNumber:null,provider:null,date:null,v_number:null,pasport:null}}},methods:{getAllInsurances(){s.a.get("insurance/getAllNotbrokenInsurance").then(e=>{this.InsuranceResDto=e.data,console.log(this.InsuranceResDto)})},saveInsurance(){console.log(this.InsuranceReqDto),s.a.post("insurance/saveInsurance",this.InsuranceReqDto).then(e=>{console.log(e.data)})},open(){this.$prompt("Please input your e-mail","Tip",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPattern:null,inputErrorMessage:"Invalid Email"}).then(({value:e})=>{this.$message({type:"success",message:"Your email is:"+e})}).catch(()=>{this.$message({type:"info",message:"Input canceled"})})}},created(){this.getAllInsurances()}};n("4313");f.render=i,f.__scopeId="data-v-6754ea90";t["default"]=f}}]);
//# sourceMappingURL=chunk-2587af66.a92ada3e.js.map