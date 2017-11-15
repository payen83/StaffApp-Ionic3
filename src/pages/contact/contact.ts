import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebserviceProvider } from '../../providers/webservice/webservice';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  employee: any;

  constructor(public navCtrl: NavController, public webservice: WebserviceProvider) {
    this.employee = {name: undefined, icNo: undefined, company: undefined, imageURL: undefined};
  }

  // saveData(){
  //   this.webservice.saveEmployee(this.employee).then(response => {
  //     //this.employeeList.push(employee);
  //     console.log(JSON.stringify(response));
  //   }).catch(error => {
  //     console.log(JSON.stringify(error));
  //   })
  // }

}
