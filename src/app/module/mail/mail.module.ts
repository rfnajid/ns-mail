import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { ListComponent } from "./list.component";
import { MailRoutingModule } from "./mail-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        MailRoutingModule
    ],
    declarations: [
        ListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MailModule { }
