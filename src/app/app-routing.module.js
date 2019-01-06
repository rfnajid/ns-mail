"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/inbox", pathMatch: "full" },
    { path: "inbox", loadChildren: "~/app/inbox/inbox.module#InboxModule" },
    { path: "sent", loadChildren: "~/app/sent/sent.module#SentModule" },
    { path: "draft", loadChildren: "~/app/draft/draft.module#draftModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
    { path: "detail", loadChildren: "~/app/detail/detail.module#DetailModule" },
    { path: "compose", loadChildren: "~/app/compose/compose.module#ComposeModule" }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0NBQXNDLEVBQUU7SUFDdkUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxtQ0FBbUMsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLHNDQUFzQyxFQUFFO0lBQ3ZFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtJQUNuRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHlDQUF5QyxFQUFDO0lBQzFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsNENBQTRDLEVBQUM7Q0FDakYsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2luYm94XCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaW5ib3hcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2luYm94L2luYm94Lm1vZHVsZSNJbmJveE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInNlbnRcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3NlbnQvc2VudC5tb2R1bGUjU2VudE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImRyYWZ0XCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9kcmFmdC9kcmFmdC5tb2R1bGUjZHJhZnRNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvZmVhdHVyZWQvZmVhdHVyZWQubW9kdWxlI0ZlYXR1cmVkTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImRldGFpbFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvZGV0YWlsL2RldGFpbC5tb2R1bGUjRGV0YWlsTW9kdWxlXCJ9LFxuICAgIHsgcGF0aDogXCJjb21wb3NlXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9jb21wb3NlL2NvbXBvc2UubW9kdWxlI0NvbXBvc2VNb2R1bGVcIn1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=