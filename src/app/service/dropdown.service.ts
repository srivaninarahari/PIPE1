import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {

  constructor() { }
genderArray:any[]=[]
getDropDown(){
  return this.genderArray=[{
    id:1,
    value:'mr'

  },
{
  id:2,
  value:'mrs'
}]
}
}
