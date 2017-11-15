import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';
import 'rxjs/Rx';
import 'rxjs/add/operator/timeout';

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceProvider {

  baseURL: string = 'http://appsmalaya.com/webservices';

  constructor(public http: Http, public http2: HttpClient) {
    console.log('Hello WebserviceProvider Provider');
  }

  getEmployee(): Promise<any>{

    let header = new Headers({
      'Content-Type':'text/plain'
    })

    let options = new RequestOptions({headers: header});
    let fullURL = this.baseURL + '/output.php';

    return new Promise((resolve, reject) => {
        this.http.get(fullURL, options)
        .timeout(20000)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
          // if(data.message == 'tidak ditemui'){
          //   reject(data.message)
          // }
        }), error => {
          reject(error);
        }
    });
    
  }

  saveEmployee(employee: any): Promise<any>{
    
    let body = JSON.stringify(employee);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let URL = this.baseURL + '/createprofile.php';

    return new Promise((resolve, reject) => {
      this.http2.post(URL, body, {
        headers: header
      })
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    }); // end of Promise
    
  } // end of saveEmployee

}
