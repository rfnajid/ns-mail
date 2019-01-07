"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var ComposeComponent = /** @class */ (function () {
    function ComposeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.json = JSON;
    }
    ComposeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    ComposeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ComposeComponent.prototype.send = function () {
        console.log("SEND~");
    };
    ComposeComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    __decorate([
        core_1.ViewChild("form"),
        __metadata("design:type", core_1.ElementRef)
    ], ComposeComponent.prototype, "formControls", void 0);
    __decorate([
        core_1.ViewChild("target"),
        __metadata("design:type", core_1.ElementRef)
    ], ComposeComponent.prototype, "target", void 0);
    __decorate([
        core_1.ViewChild("subject"),
        __metadata("design:type", core_1.ElementRef)
    ], ComposeComponent.prototype, "subject", void 0);
    ComposeComponent = __decorate([
        core_1.Component({
            selector: "Compose",
            moduleId: module.id,
            templateUrl: "./compose.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ComposeComponent);
    return ComposeComponent;
}());
exports.ComposeComponent = ComposeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb3NlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFTL0Qsa0RBQW9EO0FBUXBEO0lBV0ksMEJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUnRELFNBQUksR0FBUSxJQUFJLENBQUM7SUFRMkMsQ0FBQztJQUU3RCxtQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCw0Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQXZCa0I7UUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7a0NBQWUsaUJBQVU7MERBQUM7SUFDdkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7b0RBQUM7SUFDbEI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVUsaUJBQVU7cURBQUM7SUFQakMsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQWF3Qyx5QkFBZ0I7T0FYN0MsZ0JBQWdCLENBNkI1QjtJQUFELHVCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuXHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi9tb2RlbC9pdGVtXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL21vZGVsL2l0ZW0uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNvbXBvc2VcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvc2UuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGVtYWlsOiBJdGVtO1xyXG4gICAganNvbjogYW55ID0gSlNPTjtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiZm9ybVwiKSBmb3JtQ29udHJvbHM6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwidGFyZ2V0XCIpIHRhcmdldDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJzdWJqZWN0XCIpIHN1YmplY3Q6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNFTkR+XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==