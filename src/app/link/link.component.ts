import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  email: any;
  password: any;
  name: any;
  sname: any;
  address: any;
  tel: any;

  registerForm: FormGroup | any;

  constructor() {
    this.registerForm = new FormGroup({
      inputEmail: new FormControl('', [Validators.required, Validators.email]),
      inputPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      inputName: new FormControl('', [Validators.required]),
      inputSname: new FormControl('', [Validators.required]),
      inputAddress: new FormControl('', [Validators.required]),
      inputTel: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
    });
  }

  ngOnInit(): void {}
  onSubmitRegister() {
    if (!this.registerForm.valid) {
      return;
    } else {
      Swal.fire({
        title: 'ยินดีต้อนรับ',
        text: 'ลงทะเบียนสำเร็จ' + ' ' + this.email,
        icon: 'success',
        confirmButtonText: 'ยืนยัน',
      });
    }
  }
}
