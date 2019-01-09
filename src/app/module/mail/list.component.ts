import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RadSideDrawer, SideDrawerLocation } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Item } from "~/app/model/item";
import { ItemService } from "~/app/model/item.service";

@Component({
    selector: "List",
    moduleId: module.id,
    templateUrl: "./list.component.html"
})

export class ListComponent implements OnInit, OnDestroy {

    type: string = "title";

    items: Array<Item>;

    sub: any;

    constructor(private itemService: ItemService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        // Init your component properties here.
        this.sub = this.route.data.subscribe(
              (v) => this.type = v.type
        );
        this.loadData();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    loadData(): void {
        console.log("load data : " + this.type);

        if (this.type === "inbox") {
            this.items = this.itemService.getInboxItems();
        } else if (this.type === "sent") {
            this.items = this.itemService.getSentItems();
        } else if (this.type === "draft") {
            this.items = this.itemService.getDraftItems();
        } else if (this.type === "featured") {
            this.items = this.itemService.getFeaturedItems();
        }
     }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    refreshList(args): void {
        const pullRefresh = args.object;
        setTimeout(() => {
           pullRefresh.notifyPullToRefreshFinished();
        }, 1000);
    }

    loadMore(args): void {
        const loadMore = args.object;
        setTimeout(() => {
            loadMore.notifyLoadOnDemandFinished();
        }, 1000);
    }
}
