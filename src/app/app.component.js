"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var router_2 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var operators_1 = require("rxjs/operators");
var app = require("tns-core-modules/application");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
        element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUY7QUFDekYsMENBQXdEO0FBQ3hELDBFQUF3RTtBQUN4RSxzREFBK0Q7QUFDL0QseUVBQXlHO0FBQ3pHLDRDQUF3QztBQUN4QyxrREFBb0Q7QUFRcEQ7SUFJSSxzQkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxRSxvREFBb0Q7SUFDeEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1EQUFzQixFQUFFLENBQUM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2pCLElBQUksQ0FBQyxrQkFBTSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSyxZQUFZLHNCQUFhLEVBQTlCLENBQThCLENBQUMsQ0FBQzthQUM1RCxTQUFTLENBQUMsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQTVDLENBQTRDLENBQUMsQ0FBQztRQUVuRixrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELHNCQUFJLDhDQUFvQjthQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsMENBQW1CLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLFlBQW9CO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMzQyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDZjtTQUNKLENBQUMsQ0FBQztRQUVILElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFwQ1EsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FNOEIsZUFBTSxFQUE0Qix5QkFBZ0I7T0FKckUsWUFBWSxDQXFDeEI7SUFBRCxtQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBSYWRTaWRlRHJhd2VyLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVkVXJsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2FjdGl2YXRlZFVybCA9IFwiL2hvbWVcIjtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcclxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4gdGhpcy5fYWN0aXZhdGVkVXJsID0gZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMpO1xyXG5cclxuICAgICAgICByZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tcG9uZW50U2VsZWN0ZWQodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGVkVXJsID09PSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZJdGVtVGFwKG5hdkl0ZW1Sb3V0ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG4iXX0=