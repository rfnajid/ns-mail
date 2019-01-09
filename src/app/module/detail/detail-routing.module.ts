import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DetailComponent } from "./detail.component";

const routes: Routes = [
    { path: "", component: DetailComponent },
    { path: "inbox/:id", component: DetailComponent, data: {type: "inbox"}},
    { path: "sent/:id", component: DetailComponent, data: {type: "sent"}},
    { path: "draft/:id", component: DetailComponent, data: {type: "draft"}},
    { path: "featured/:id", component: DetailComponent, data: {type: "featured"}}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DetailRoutingModule { }
