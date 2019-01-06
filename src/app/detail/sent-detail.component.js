"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var item_service_1 = require("../model/item.service");
var SentDetailComponent = /** @class */ (function () {
    function SentDetailComponent(itemService, route, routerExtensions) {
        this.itemService = itemService;
        this.route = route;
        this.routerExtensions = routerExtensions;
    }
    SentDetailComponent.prototype.ngOnInit = function () {
        var column = "id";
        var id = +this.route.snapshot.params[column];
        this.item = this.itemService.getSentItem(id);
    };
    SentDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    SentDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./detail.component.html"
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions])
    ], SentDetailComponent);
    return SentDetailComponent;
}());
exports.SentDetailComponent = SentDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFHL0Qsc0RBQW9EO0FBT3BEO0lBR0ksNkJBQ1ksV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsZ0JBQWtDO1FBRmxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDMUMsQ0FBQztJQUVMLHNDQUFRLEdBQVI7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBakJRLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FLMkIsMEJBQVc7WUFDakIsdUJBQWM7WUFDSCx5QkFBZ0I7T0FOckMsbUJBQW1CLENBa0IvQjtJQUFELDBCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vbW9kZWwvaXRlbVwiO1xyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuLi9tb2RlbC9pdGVtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlsLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbnREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbTogSXRlbTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uID0gXCJpZFwiO1xyXG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW2NvbHVtbl07XHJcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtU2VydmljZS5nZXRTZW50SXRlbShpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxufVxyXG4iXX0=