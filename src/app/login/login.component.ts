import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
 constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      number: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        window.location.href = "/post"; 
    }


}
