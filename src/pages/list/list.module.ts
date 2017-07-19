import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { ListPage } from './list';


@NgModule({
    declarations: [
        ListPage
    ],
    imports: [
        IonicModule,
        IonicPageModule.forChild(ListPage)
    ],
    entryComponents: [
        ListPage
    ]
})
export class ListPageModule { }