import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InboxComponent } from "./inbox.component";
import { ListComponent } from "./list.component";
import { MailRoutingModule } from "./mail-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MailRoutingModule
    ],
    declarations: [
        InboxComponent,
        ListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MailModule { }
