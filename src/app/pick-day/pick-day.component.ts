import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pick-day',
  templateUrl: './pick-day.component.html',
  styleUrls: ['./pick-day.component.css']
})
export class PickDayComponent implements OnInit {

  dayForm: FormGroup | any;

  constructor() { }

  ngOnInit(): void {
  }
  

}
