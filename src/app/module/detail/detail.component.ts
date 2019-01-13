import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { DBService } from "~/app/model/db.service";
import { Item } from "~/app/model/item";
import { ItemService } from "~/app/model/item.service";

@Component({
    selector: "detail-item",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls : ["detail.component.css"]
})

export class DetailComponent implements OnInit, OnDestroy {
    item: Item;
    sub: any;

    type: string;

    json: any = JSON;

    constructor(
        private itemService: ItemService,
        private db: DBService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.item = this.itemService.empty();
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

        this.item.subject = "tes";

        let promise: Promise<any>;

        // tslint:disable-next-line:prefer-conditional-expression
        if (this.type !== "featured") {
            promise = this.db.get(id, this.type);
        } else {
            promise = this.db.getFeat(id);
        }

        promise.then((item) => {
            this.item = item;
        });
    }
}
