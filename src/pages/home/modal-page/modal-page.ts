import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavParams, ToastController, ViewController } from 'ionic-angular';


// custom imports


@IonicPage()
@Component({
    selector: 'modal-page',
    templateUrl: 'modal-page.html'
})
export class ModalPage {
    public silent: boolean;

    public roles = [];
    public selectedRoleId: number;

    constructor(public params: NavParams, public viewCtrl: ViewController, private toastCtr: ToastController) {
        //console.log('ModalPage#constructor params:', params);


        if (this.params) {
            this.silent = this.params.data.silent;
        }
    }
}