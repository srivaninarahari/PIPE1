import { Component, OnInit } from '@angular/core';
import { ListService} from '../service/list.service';
import { DropdownService} from '../service/dropdown.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   userDetails:any={};
   arrayList:any[]=[];
   genderArray:any[]=[];
  constructor(private _listService:ListService,private _dropDoenService:DropdownService) { }

  ngOnInit() {
   this.userDetails={
     name:"",
     date:"",
     genderType: '',
     phone:''
   }
   this.genderArray= this._dropDoenService.getDropDown();  
  }
  submit(values){
   let model={ 
     name:values.name,
     date:values.date,
     gender: values.gender,
     phone:values.phone
  
  }
 this._listService.addList(model);
 this.arrayList=this._listService.getList();
  }
}
