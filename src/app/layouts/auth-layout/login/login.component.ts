import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/services/JwtClient/auth.service';
import { TokenStorageService } from 'src/app/services/JwtClient/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../assets/Login/css/style.css']
})
export class LoginComponent implements OnInit {
  list!:any;
  response:any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private service:AuthService,private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().role;
    }
  // }
  // login(f:any){
  //   this.service.generateToken(f).subscribe(data=>this.accessApi(data))

// let res=this.service.generateToken(f)
// res.subscribe((d)=> {
//   this.list=d;
// }
// );
// console.log(this.list);
// // (data=>console.log("Token: "+data))
// this.service.welcom(this.list).subscribe((d)=> 
//   console.log("good"),
// );

}
accessApi(token:any){
 this.service.login(token).subscribe(
  (data) => {
    console.log(data);
    this.tokenStorage.saveToken(data.accessToken);
    this.tokenStorage.saveUser(data);

    this.isLoginFailed = false;
    this.isLoggedIn = true;
    this.roles = this.tokenStorage.getUser().roles;
  
  },
  err => {
    this.errorMessage = err.error.message;
    this.isLoginFailed = true;
  }
);
if (this.roles[0]=='ROLE_USER') {
  this.router.navigate(['/client']);
}
if (this.roles[0]=='ROLE_ADMIN') {
  this.router.navigate(['/admin']);
}
 console.log("success");

}
reloadPage(): void {
  window.location.reload();
}

 }
