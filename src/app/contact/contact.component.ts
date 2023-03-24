import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email!:any

  check(){
    let emailRG= /^[a-z0-9A-Z-\._]{4,20}@[A-Za-z]{3,10}.[a-zA-Z]{3,6}$/.test(this.email)
    if(emailRG){
      document.getElementById("EmailCheck")?.classList.add("d-none")
    }
    else{
      document.getElementById("EmailCheck")?.classList.remove("d-none")
    }

}
}
