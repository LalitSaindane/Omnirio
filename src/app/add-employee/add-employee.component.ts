import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,AbstractControl} from '@angular/forms';
import {ProvideDataService} from '../provide-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  public employeeForm
  constructor(private fb:FormBuilder, private dataProvider:ProvideDataService) { }
   
  ngOnInit() {
    this.employeeForm = this.fb.group({
      employeeId:[,Validators.required],
      employeeName:[,Validators.required],
      designation:[,Validators.required],
      age:[,Validators.required],
      bloodGroup:[,Validators.required]
    })
  }

  submitEmployeeForm(){
    this.dataProvider.addData(this.employeeForm.value)
  }

  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

}
