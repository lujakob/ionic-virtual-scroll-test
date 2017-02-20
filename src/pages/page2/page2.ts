import {Component, ViewChild} from '@angular/core';
import {Http,Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import { VirtualScrollComponent, ChangeEvent } from 'angular2-virtual-scroll';

@Component({
    selector: 'page-page2',
    templateUrl: 'page2.html'
})
export class Page2 {

    private start:number = 0;
    private count:number = 200;
    public total:number = 0;

    selectedItem:any;
    icons:string[];
    items:Array<any> = [];

    @ViewChild(VirtualScrollComponent)
    private virtualScroll: VirtualScrollComponent;

    constructor(private http:Http) {

        this.load();
    }

    protected onListChange(event: ChangeEvent) {

        if (this.items.length -10 === event.end) {
            this.load();
        }
        console.log(event);
    }




    load(start:number = 0) {
        let url = 'https://uitest.my.bmg.com/api/clients?sortColumn=path.sort&isAsc=true&count=' + this.count + '&start=' + start + '&currencySymbol=USD';


        this.http.post(url, '', {headers: this.getRequestHeaders()})
                .map(res => res.json())
                .subscribe(
                        (result) => {
                            this.items = [...this.items, ...result.data];
                            this.total = this.items.length;
                        },
                        (error) => {
                            console.log("error", error)
                        }
                );
    }

    getRequestHeaders() {

        //test.user.1000clients

        //valtechtest
        let pass = 'dmFsdGVjaHRlc3Q6bC8qOHpqTCFjaCczRDQ=';

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + pass);
        // headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

        return headers;
    }
}
