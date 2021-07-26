import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  firstFormGroup: FormGroup;

  secondFormGroup: FormGroup;

  lastFormGroup: FormGroup;

  currentRoute: string | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.lastFormGroup = this.formBuilder.group({
      lastCtrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
}