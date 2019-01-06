"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var item_service_1 = require("../model/item.service");
var InboxDetailComponent = /** @class */ (function () {
    function InboxDetailComponent(itemService, route, routerExtensions) {
        this.itemService = itemService;
        this.route = route;
        this.routerExtensions = routerExtensions;
    }
    InboxDetailComponent.prototype.ngOnInit = function () {
        var column = "id";
        var id = +this.route.snapshot.params[column];
        this.item = this.itemService.getInboxItem(id);
    };
    InboxDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    InboxDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./detail.component.html"
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions])
    ], InboxDetailComponent);
    return InboxDetailComponent;
}());
exports.InboxDetailComponent = InboxDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5ib3gtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluYm94LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUcvRCxzREFBb0Q7QUFPcEQ7SUFHSSw4QkFDWSxXQUF3QixFQUN4QixLQUFxQixFQUNyQixnQkFBa0M7UUFGbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMxQyxDQUFDO0lBRUwsdUNBQVEsR0FBUjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxxQ0FBTSxHQUFOO1FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFqQlEsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO3lDQUsyQiwwQkFBVztZQUNqQix1QkFBYztZQUNILHlCQUFnQjtPQU5yQyxvQkFBb0IsQ0FrQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi9tb2RlbC9pdGVtXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL21vZGVsL2l0ZW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWwuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5ib3hEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbTogSXRlbTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uID0gXCJpZFwiO1xyXG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW2NvbHVtbl07XHJcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtU2VydmljZS5nZXRJbmJveEl0ZW0oaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpOiB2b2lkIHtcclxuICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIl19