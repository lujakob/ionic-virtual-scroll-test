import { Component, Input } from '@angular/core';

export interface ListItem {
    index?: number;
    title?: string;
}

@Component({
    selector: 'list-item',
    template: `
        <div class="avatar">{{item.index}}</div>
        <div class="item-content">
            <div class="name">{{item.title}}</div>
        </div>
    `
})
export class ListItemComponent {
    @Input()
    item: ListItem;
}