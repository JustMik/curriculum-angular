import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../auth/authentication.service';
import { AuthGuard } from '../../guard/auth.guard';
import { PublicService } from '../public.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  returnUrl: string;
  loading = false;

  constructor(public navPublic: PublicService,
             private formBuilder: FormBuilder,
             private route: ActivatedRoute,
             private authenticationService: AuthenticationService,
             private router: Router,
             private authGuard: AuthGuard
             ) { }

  ngOnInit() {
    if (this.authGuard.isAuthenticated()) {
      this.router.navigate(['/admin']);
    }

    
    console.log("Init Login Component");
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
  }

  ngOnDestroy() {
    console.log("Destroy Login Component");
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService.login(this.f.email.value, this.f.pwd.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("data")
          this.router.navigate([this.returnUrl]);
          this.loading = false;
        },
        error => {
          console.log("ERROR");
          this.loading = false;
        }
        );

  }

}
