
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent {

  user = {
    firstName: "bill",
    lastName: "gates",
    income: 50000,
    dob: new Date("Dec 21, 1965"),
    company: "Microsoft",
    isWorking: true,
    image: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
    votes: 120
  }

  onMoreInfo(user: any) {
    alert(`Mr. ${user.lastName} is working with ${user.company}`)
  }

  // changeVote(element: HTMLInputElement) {
  //   this.user.votes = Number(element.value)
  // }

}
