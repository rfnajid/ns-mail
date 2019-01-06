"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var detail_routing_module_1 = require("./detail-routing.module");
var inbox_detail_component_1 = require("./inbox-detail.component");
var sent_detail_component_1 = require("./sent-detail.component");
var DetailModule = /** @class */ (function () {
    function DetailModule() {
    }
    DetailModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                detail_routing_module_1.DetailRoutingModule
            ],
            declarations: [
                inbox_detail_component_1.InboxDetailComponent,
                sent_detail_component_1.SentDetailComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], DetailModule);
    return DetailModule;
}());
exports.DetailModule = DetailModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLGlFQUE4RDtBQUM5RCxtRUFBZ0U7QUFDaEUsaUVBQThEO0FBZTlEO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBYnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDJDQUFtQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDViw2Q0FBb0I7Z0JBQ3BCLDJDQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgRGV0YWlsUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2RldGFpbC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBJbmJveERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2luYm94LWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VudERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3NlbnQtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRGV0YWlsUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEluYm94RGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIFNlbnREZXRhaWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsTW9kdWxlIHsgfVxyXG4iXX0=