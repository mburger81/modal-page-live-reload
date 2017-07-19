import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { HomePage } from './home';
import { ModalPageModule } from './modal-page/modal-page.module'


@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        IonicModule,
        ModalPageModule,
        IonicPageModule.forChild(HomePage)
    ],
    entryComponents: [
        HomePage
    ]
})
export class HomePageModule { }