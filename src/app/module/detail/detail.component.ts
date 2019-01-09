import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { Item } from "~/app/model/item";
import { ItemService } from "~/app/model/item.service";

@Component({
    selector: "detail-item",
    moduleId: module.id,
    templateUrl: "./detail.component.html"
})

export class DetailComponent implements OnInit, OnDestroy {
    item: Item;

    sub: any;

    type: string;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.sub = this.route.data.subscribe(
              (v) => this.type = v.type
        );
        this.loadData();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    goBack(): void {
       this.routerExtensions.back();
    }

    loadData(): void {
        const column = "id";
        const id = +this.route.snapshot.params[column];

        if (this.type === "inbox") {
            this.item = this.itemService.getInboxItem(id);
        } else if (this.type === "sent") {
            this.item = this.itemService.getSentItem(id);
        } else if (this.type === "draft") {
            this.item = this.itemService.getDraftItem(id);
        } else if (this.type === "featured") {
            this.item = this.itemService.getFeaturedItem(id);
        }
    }
}
