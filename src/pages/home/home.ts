import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { ModalPage } from './modal-page/modal-page';


@IonicPage({
    priority: 'off'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }


  private openModalPage(event): void {
        console.log('HomePage#openModalPage event:', event);

        let modal = this.modalCtrl.create(ModalPage, {
            silent: true
        });

        modal.present();
    }
}
