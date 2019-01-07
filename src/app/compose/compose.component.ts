import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { View } from "ui/core/view";
import { Page } from "ui/page";

import { Item } from "../model/item";
import { ItemService } from "../model/item.service";

import * as app from "tns-core-modules/application";

@Component({
    selector: "Compose",
    moduleId: module.id,
    templateUrl: "./compose.component.html"
})

export class ComposeComponent implements OnInit {

    email: Item;
    json: any = JSON;

    @ViewChild("form") formControls: ElementRef;
    @ViewChild("target") target: ElementRef;
    @ViewChild("subject") subject: ElementRef;

    itemService: ItemService;

    constructor(private routerExtensions: RouterExtensions) {   }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    send(): void {
        console.log("SEND~");
    }

    goBack(): void {
        this.routerExtensions.back();
    }
}
