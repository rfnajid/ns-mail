import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ComposeRoutingModule } from "./compose-routing.module";
import { ComposeComponent } from "./compose.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ComposeRoutingModule
    ],
    declarations: [
        ComposeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ComposeModule { }
