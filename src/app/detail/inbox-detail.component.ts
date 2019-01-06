import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { Item } from "../model/item";
import { ItemService } from "../model/item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./detail.component.html"
})
export class InboxDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const column = "id";
        const id = +this.route.snapshot.params[column];
        this.item = this.itemService.getInboxItem(id);
    }

    goBack(): void {
       this.routerExtensions.back();
    }
}
