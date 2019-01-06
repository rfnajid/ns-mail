import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DetailRoutingModule } from "./detail-routing.module";
import { InboxDetailComponent } from "./inbox-detail.component";
import { SentDetailComponent } from "./sent-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DetailRoutingModule
    ],
    declarations: [
        InboxDetailComponent,
        SentDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DetailModule { }
