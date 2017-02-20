import {Component, ViewChild} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import { VirtualScrollComponent, ChangeEvent } from 'angular2-virtual-scroll';

@Component({
    selector: 'page-page2',
    templateUrl: 'page2.html'
})
export class Page2 {

    selectedItem:any;
    icons:string[];
    items:Array<{title:string, note:string, icon:string}> = [];

    @ViewChild(VirtualScrollComponent)
    private virtualScroll: VirtualScrollComponent;

    constructor(public navCtrl:NavController, public navParams:NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        this.loadData();
    }

    protected onListChange(event: ChangeEvent) {

        if (this.items.length === event.end) {
            this.loadData();
        }
        console.log(event);
    }

    loadData() {
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];

        let items = [];

        for (let i = 1; i < 111; i++) {
            items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }

        this.items = [...this.items, ...items];
    }
}
