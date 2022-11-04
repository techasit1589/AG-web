import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitday() {
    Swal.fire({
      title: 'เลืกรูปภาพ',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'multiple': 'multiple', 
        'aria-label': 'Upload your profile picture'
        
      },
      showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'ส่งสลิป',
  cancelButtonText: 'ยกเลิก'
    })
  }
}
