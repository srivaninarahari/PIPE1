import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  ArrayList:any=[];
  constructor() { }
   /** Add list in the array List. */
addList(arryListDetails:any){
  this.ArrayList.unshift(arryListDetails);

    }
     /**Get the list list from the array. */
     getList(){
       return this.ArrayList;
     }
}
