import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InboxRoutingModule } from "./inbox-routing.module";
import { InboxComponent } from "./inbox.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InboxRoutingModule
    ],
    declarations: [
        InboxComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InboxModule { }
