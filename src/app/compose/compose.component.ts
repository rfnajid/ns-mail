import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Compose",
    moduleId: module.id,
    templateUrl: "./compose.component.html"
})
export class ComposeComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {   }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    sent(): void {
        console.log("tes");
    }

    goBack(): void {
        this.routerExtensions.back();
    }
}
