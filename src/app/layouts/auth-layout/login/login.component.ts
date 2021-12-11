import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JwtClientService } from 'src/app/services/JwtClient/jwt-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../assets/Login/css/style.css']
})
export class LoginComponent implements OnInit {
  list!:any;
  response:any;
  constructor(private service:JwtClientService) { }

  ngOnInit(): void {
    
  }
  login(f:any){
    this.service.generateToken(f).subscribe(data=>this.accessApi(data))

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
 this.service.welcome(token).subscribe(data=>this.response=data)
 console.log("success");
}

 }
