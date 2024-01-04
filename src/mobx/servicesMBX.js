// import { observable,action,computed,makeAutoObservable,runInAction, makeObservable } from "mobx";
// class ServiceMBX{
//     list=[];
//     baseUrl
//     constructor(){
//     makeObservable(this,{
//         list:observable,
//         addItem:action,
//         deleteItem:action,
//         getList:computed
//     })
//     this.baseUrl='https://dummyjson.com/products'
//     this.initData();
//     }

//     initData(){
//         fetch(this.baseUrl).then((res)=>{
//             res.json().then((data)=>{
//                 runInAction(()=>{
//                     this.list=data
//                 })
//             })
//         })
//     }
//     addItem(product){
//         fetch(this.baseUrl,{
//             method:'post',
//             body:product
//         }).then((res)=>{
//             this.list.push(product)
//         })
//     }
//     deleteItem(id){
//         fetch(`${this.baseUrl}/${id}`,{
//             method:'DELETE',
         
//         }).then((res)=>{
//         const index=this.list.findIndex(p=>p.id===id)
//         this.list.splice(index,1)
//         })

        
//     }
//     get getList(){
//         return this.list;
//     }
// }
// export default new ServiceMBX();