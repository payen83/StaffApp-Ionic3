import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  employee: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.employee = {name: undefined, icNo: undefined, company: undefined, imageURL: undefined};    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  submit(){
    this.viewCtrl.dismiss(this.employee);
  }

  close(){
      this.viewCtrl.dismiss();
  }

}
