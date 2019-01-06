import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { InboxDetailComponent } from "./inbox-detail.component";
import { SentDetailComponent } from "./sent-detail.component";

const routes: Routes = [
    { path: "", component: InboxDetailComponent },
    { path: "inbox/:id", component: InboxDetailComponent},
    { path: "sent/:id", component: SentDetailComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DetailRoutingModule { }
