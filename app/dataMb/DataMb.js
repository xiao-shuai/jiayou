import { observable, action } from "mobx";
class AllData{
    @observable text;
    @observable List;
    constructor(){
    this.text='33'
    this.List=[
        {
         nm:'mark',
         ph:'16787645679',
         ad:'shanxiyuncheng',
         com:'DFG',
         start:'2019-6-6',
         end:'2019-6-8'
        }
    ]
   
    }

  save_home_list=(e)=>{
     this.List.push(e)
  }  
    
  

}
const allData=new AllData()
export {allData}