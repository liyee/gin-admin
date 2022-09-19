var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,l=(e,t,a)=>new Promise(((r,o)=>{var l=e=>{try{s(a.next(e))}catch(t){o(t)}},n=e=>{try{s(a.throw(e))}catch(t){o(t)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(l,n);s((a=a.apply(e,t)).next())}));import{f as n,g as s}from"./useForm.2dff632a.js";import{a0 as i,bi as d,j as u,r as c,i as m,u as p,K as f,o as b,m as v,P as w,n as g,N as h}from"./vendor.0af35baf.js";/* empty css              */import{_ as y,a as x}from"./useDrawer.d9c1acef.js";import{_ as j}from"./Tree.vue_vue&type=style&index=0&lang.b84363f0.js";import{a as I,e as D}from"./role.f9d5c84a.js";import{aF as P}from"./index.36aa7878.js";const F=[{title:"角色名称",dataIndex:"roleName",width:200},{title:"角色值",dataIndex:"roleValue",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=1==~~e.status,a=t?"启用":"停用";return i(d,{color:t?"green":"red"},(()=>a))}},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],_=[{field:"roleName",label:"角色名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]},colProps:{span:8}}],O=[{field:"id",label:"id",component:"Input",show:!1},{field:"roleName",label:"角色名称",required:!0,component:"Input"},{field:"roleValue",label:"角色值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}];var B=u({name:"RoleDrawer",components:{BasicDrawer:y,BasicForm:n,BasicTree:j},emits:["success","register"],setup(e,{emit:n}){const i=c(!0),d=c([]),[u,{resetFields:f,setFieldsValue:b,validate:v}]=s({labelWidth:90,schemas:O,showActionButtonGroup:!1}),[w,{setDrawerProps:g,closeDrawer:h}]=x((e=>l(this,null,(function*(){f(),g({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),p(i)&&b(((e,l)=>{for(var n in l||(l={}))a.call(l,n)&&o(e,n,l[n]);if(t)for(var n of t(l))r.call(l,n)&&o(e,n,l[n]);return e})({},e.record)),d.value=yield P({status:"1"})}))));return{registerDrawer:w,registerForm:u,getTitle:m((()=>p(i)?"编辑角色":"新增角色")),handleSubmit:function(){return l(this,null,(function*(){try{const t=yield v();if(g({confirmLoading:!0}),0!=t.id&&null!=typeof t.id&&t.id)e=yield D(t);else var e=yield I(t);e&&(h(),n("success"))}finally{g({confirmLoading:!1})}}))},treeData:d}}});B.render=function(e,t,a,r,o,l){const n=f("BasicTree"),s=f("BasicForm"),i=f("BasicDrawer");return b(),v(i,h(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:w((()=>[g(s,{onRegister:e.registerForm},{menu:w((({model:t,field:a})=>[g(n,{value:t[a],"onUpdate:value":e=>t[a]=e,treeData:e.treeData,replaceFields:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});export{R,B as _,F as c,_ as s};
