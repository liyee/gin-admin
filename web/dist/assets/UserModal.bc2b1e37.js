var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,r=(e,t,o)=>new Promise(((a,l)=>{var r=e=>{try{i(o.next(e))}catch(t){l(t)}},n=e=>{try{i(o.throw(e))}catch(t){l(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(r,n);i((o=o.apply(e,t)).next())}));import{_ as n,b as i}from"./useModal.07fec034.js";import{f as s,g as d}from"./useForm.2dff632a.js";import{g as p}from"./role.f9d5c84a.js";import{a as c,e as m}from"./user.3d56a02b.js";import{g as u}from"./dept.582a1883.js";import{j as f,r as b,u as h,i as g,K as y,o as w,m as v,P as I,n as P,N as j}from"./vendor.0af35baf.js";const x=[{title:"用户名",dataIndex:"username",width:120},{title:"手机号",dataIndex:"phone",width:120},{title:"邮箱",dataIndex:"email",width:120},{title:"创建时间",dataIndex:"createTime",width:180},{title:"角色",dataIndex:"roleName",width:200},{title:"备注",dataIndex:"remark"}],F=[{field:"username",label:"用户名",component:"Input",colProps:{span:8}},{field:"phone",label:"手机号",component:"Input",colProps:{span:8}}],O=[{field:"id",label:"id",component:"Input",show:!1},{field:"username",label:"用户名",component:"Input",required:!0},{field:"pwd",label:"密码",component:"InputPassword",show:!1},{field:"role_id",label:"role_id",component:"Input",show:!1},{label:"角色",field:"roleName",component:"ApiSelect",componentProps:{api:p,labelField:"roleName",valueField:"id"},required:!0},{field:"deptName",label:"所属部门",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"phone",label:"手机号",component:"Input",required:!0},{label:"邮箱",field:"email",component:"Input",required:!0},{label:"备注",field:"remark",component:"InputTextArea"}];var M=f({name:"AccountModal",components:{BasicModal:n,BasicForm:s},emits:["success","register"],setup(e,{emit:n}){const s=b(!0),[p,{setFieldsValue:f,updateSchema:y,resetFields:w,validate:v}]=d({labelWidth:100,schemas:O,showActionButtonGroup:!1,actionColOptions:{span:23}}),[I,{setModalProps:P,closeModal:j}]=i((e=>r(this,null,(function*(){w(),P({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),h(s)&&f(((e,r)=>{for(var n in r||(r={}))o.call(r,n)&&l(e,n,r[n]);if(t)for(var n of t(r))a.call(r,n)&&l(e,n,r[n]);return e})({},e.record));const r=(yield u()).items;y([{field:"pwd",show:!h(s)},{field:"deptName",componentProps:{treeData:r}}])}))));return{registerModal:I,registerForm:p,getTitle:g((()=>h(s)?"编辑账号":"新增账号")),handleSubmit:function(){return r(this,null,(function*(){try{const t=yield v();if(P({confirmLoading:!0}),0!=t.id&&null!=typeof t.id&&t.id)e=yield m(t);else var e=yield c(t);e&&(j(),n("success"))}finally{P({confirmLoading:!1})}}))}}}});M.render=function(e,t,o,a,l,r){const n=y("BasicForm"),i=y("BasicModal");return w(),v(i,j(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:I((()=>[P(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});export{_ as U,M as _,x as c,F as s};
