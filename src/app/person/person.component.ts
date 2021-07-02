import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,private person:PersonService) { }
  data:any=[]
  ngOnInit() {
    this.myForm = new FormGroup({
      PersonID: new FormControl(''),
      LastName: new FormControl(''),
      FirstName: new FormControl(''),
      Address : new FormControl(''),
      City : new FormControl('')
    });
    this.calldata()
  }
  calldata(){
    this.person.alldata().subscribe((res)=>{
      console.log(res)
      this.data=res
    })
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    if(form.valid == true){
      console.log("form  submitted",form.value)
      this.person.senddata(form.value).subscribe(send=>{
        if(send['status'] == 200){
          alert("Form submitted")
          this.calldata()
        }
      })
     
    }
  
  }

}
