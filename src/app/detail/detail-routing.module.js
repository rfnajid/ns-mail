"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var inbox_detail_component_1 = require("./inbox-detail.component");
var sent_detail_component_1 = require("./sent-detail.component");
var routes = [
    { path: "", component: inbox_detail_component_1.InboxDetailComponent },
    { path: "inbox/:id", component: inbox_detail_component_1.InboxDetailComponent },
    { path: "sent/:id", component: sent_detail_component_1.SentDetailComponent }
];
var DetailRoutingModule = /** @class */ (function () {
    function DetailRoutingModule() {
    }
    DetailRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], DetailRoutingModule);
    return DetailRoutingModule;
}());
exports.DetailRoutingModule = DetailRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxtRUFBZ0U7QUFDaEUsaUVBQThEO0FBRTlELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7SUFDN0MsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQztJQUNyRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFDO0NBQ3RELENBQUM7QUFNRjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBSi9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBLEFBQXBDLElBQW9DO0FBQXZCLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBJbmJveERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2luYm94LWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VudERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3NlbnQtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSW5ib3hEZXRhaWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJpbmJveC86aWRcIiwgY29tcG9uZW50OiBJbmJveERldGFpbENvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6IFwic2VudC86aWRcIiwgY29tcG9uZW50OiBTZW50RGV0YWlsQ29tcG9uZW50fVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsUm91dGluZ01vZHVsZSB7IH1cclxuIl19