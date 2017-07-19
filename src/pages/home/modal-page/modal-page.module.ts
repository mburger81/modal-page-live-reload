import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { ModalPage } from './modal-page';


@NgModule({
    declarations: [
        ModalPage
    ],
    imports: [
        CommonModule,
        IonicModule,
        IonicPageModule.forChild(ModalPage)
    ],
    entryComponents: [
        ModalPage
    ]
})
export class ModalPageModule { }