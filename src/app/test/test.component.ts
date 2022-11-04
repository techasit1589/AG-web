import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name: any;
  sname: any;
  model: any;
  registration: any;
  info: any;
  fileimage: any;

  payForm: FormGroup | any;
  constructor() {
    this.payForm = new FormGroup({
      inputName: new FormControl('', [Validators.required]),
      inputSname: new FormControl('', [Validators.required]),
      
      inputModel: new FormControl('', [Validators.required]),
      inputRegistration: new FormControl('', [
        Validators.required,
      ]),
      inputInfo: new FormControl(''),
      inputFileimage: new FormControl(''),
    });

   }

  ngOnInit(): void {}
  onSubmitPay() {
    if (!this.payForm.valid) {
      return;
    } else {
      Swal.fire({
        title: 'แจ้งซ่อมรถสำเร็จ',
        text: 'ขอบคุณค่ะคุณ' + ' ' + this.name+ ' ' + this.sname,
        icon: 'success',
        confirmButtonText: 'ยืนยัน',
      });
    }
  }

}
