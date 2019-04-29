import { Component } from '@angular/core';
import { Contact } from './contact';

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact Us';


  // let's create a property to store a response from the back end
  // and try binding it back to the view
  responsedata = 'response data';

  types = ['Question about instructions', 'Question about leaderboard', 'Constructive Feedback', "Glitches and Errors", "Other"];
  contactModel = new Contact('Your name', 'email@email.com', '');
 
  constructor(private http: HttpClient) { }

  senddata(data) {
     console.log(data);

     let params = JSON.stringify(data);

     //this.http.get('http://localhost/cs4640s19/ngphp-get.php?str='+encodeURIComponent(params))
     this.http.get('http://localhost/assimilate/ngphp-get.php?str='+params)
     //this.http.post('http://localhost/cs4640s19/ngphp-post.php', data)
     .subscribe((data) => {
        console.log('Got data from backend', data);
        this.responsedata = data;
     }, (error) => {
        console.log('Error', error);
     })
  }
}
