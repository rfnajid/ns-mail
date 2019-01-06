"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var compose_routing_module_1 = require("./compose-routing.module");
var compose_component_1 = require("./compose.component");
var ComposeModule = /** @class */ (function () {
    function ComposeModule() {
    }
    ComposeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                compose_routing_module_1.ComposeRoutingModule
            ],
            declarations: [
                compose_component_1.ComposeComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ComposeModule);
    return ComposeModule;
}());
exports.ComposeModule = ComposeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb3NlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsbUVBQWdFO0FBQ2hFLHlEQUF1RDtBQWN2RDtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQVp6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qiw2Q0FBb0I7YUFDdkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBDb21wb3NlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NvbXBvc2Utcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IENvbXBvc2VDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb3NlLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBDb21wb3NlUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENvbXBvc2VDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9zZU1vZHVsZSB7IH1cbiJdfQ==