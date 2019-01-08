import { Component, OnInit } from "@angular/core";

import { RadSideDrawer, SideDrawerLocation } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Item } from "~/app/model/item";
import { ItemService } from "~/app/model/item.service";

@Component({
    selector: "Inbox",
    moduleId: module.id,
    templateUrl: "./inbox.component.html"
})
export class InboxComponent implements OnInit {

    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        // Init your component properties here.
        this.items = this.itemService.getInboxItems();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    refreshList(args): void {
        const pullRefresh = args.object;
        setTimeout(() => {
           pullRefresh.refreshing = false;
        }, 1000);
   }
}
