import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/inbox", pathMatch: "full" },
    { path: "inbox", loadChildren: "~/app/inbox/inbox.module#InboxModule" },
    { path: "sent", loadChildren: "~/app/sent/sent.module#SentModule" },
    { path: "draft", loadChildren: "~/app/draft/draft.module#draftModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
    { path: "detail", loadChildren: "~/app/detail/detail.module#DetailModule"},
    { path: "compose", loadChildren: "~/app/compose/compose.module#ComposeModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
