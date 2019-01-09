"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/mail/inbox", pathMatch: "full" },
    { path: "mail", loadChildren: "~/app/module/mail/mail.module#MailModule" },
    { path: "sent", loadChildren: "~/app/sent/sent.module#SentModule" },
    { path: "draft", loadChildren: "~/app/draft/draft.module#draftModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
    { path: "detail", loadChildren: "~/app/module/detail/detail.module#DetailModule" },
    { path: "compose", loadChildren: "~/app/module/compose/compose.module#ComposeModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzFELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsMENBQTBDLEVBQUU7SUFDMUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxtQ0FBbUMsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLHNDQUFzQyxFQUFFO0lBQ3ZFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtJQUNuRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGdEQUFnRCxFQUFFO0lBQ2xGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsbURBQW1ELEVBQUU7Q0FDekYsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9tYWlsL2luYm94XCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcclxuICAgIHsgcGF0aDogXCJtYWlsXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9tb2R1bGUvbWFpbC9tYWlsLm1vZHVsZSNNYWlsTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJzZW50XCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9zZW50L3NlbnQubW9kdWxlI1NlbnRNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcImRyYWZ0XCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9kcmFmdC9kcmFmdC5tb2R1bGUjZHJhZnRNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcImZlYXR1cmVkXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9mZWF0dXJlZC9mZWF0dXJlZC5tb2R1bGUjRmVhdHVyZWRNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcInNldHRpbmdzXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUjU2V0dGluZ3NNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcImRldGFpbFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvbW9kdWxlL2RldGFpbC9kZXRhaWwubW9kdWxlI0RldGFpbE1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwiY29tcG9zZVwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvbW9kdWxlL2NvbXBvc2UvY29tcG9zZS5tb2R1bGUjQ29tcG9zZU1vZHVsZVwiIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19