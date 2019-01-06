import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Item } from "../model/item";
import { ItemService } from "../model/item.service";

@Component({
    selector: "Sent",
    moduleId: module.id,
    templateUrl: "./sent.component.html"
})
export class SentComponent implements OnInit {

    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        // Init your component properties here.
        this.items = this.itemService.getSentItems();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
