import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {

  staffList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.staffList = [
      {name: "Ali Osman", company: "Kementerian Kerja Raya", imageURL: "assets/imgs/ali.png"},
      {name: "Rebecca Richie", company: "CIDB", imageURL: "assets/imgs/rebecca.jpeg"},
      {name: "James Gunn", company: "Jabatan Kerja Raya", imageURL: "assets/imgs/james.jpeg"}
    ];
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EmployeesPage');
  }

}
