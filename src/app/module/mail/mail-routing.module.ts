import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ListComponent } from "~/app/module/mail/list.component";

const routes: Routes = [
    { path: "", component: ListComponent, data: {type: "inbox"}},
    { path: "inbox", component: ListComponent, data: {type: "inbox"}},
    { path: "sent", component: ListComponent, data: {type: "sent"}},
    { path: "draft", component: ListComponent, data: {type: "draft"}},
    { path: "featured", component: ListComponent, data: {type: "featured"}}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MailRoutingModule { }
