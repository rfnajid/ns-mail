import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SentRoutingModule } from "./sent-routing.module";
import { SentComponent } from "./sent.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SentRoutingModule
    ],
    declarations: [
        SentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SentModule { }
