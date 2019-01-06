"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.inbox = new Array({ id: 1, title: "Tes", content: "Email test" }, { id: 2, title: "Unique", content: "Unique EMAIL" }, { id: 3, title: "Haloo", content: "Healoo" }, { id: 4, title: "Coba", content: "Coba" }, { id: 5, title: "Ini adalah email", content: "iya" }, { id: 6, title: "sdfasdf", content: "siap" }, { id: 7, title: "xcxcxcx", content: "xzcxz" }, { id: 8, title: "Tes", content: "Email test" }, { id: 9, title: "Haloo", content: "Healoo" }, { id: 10, title: "Coba", content: "Coba" }, { id: 11, title: "Ini adalah email", content: "iya" }, { id: 12, title: "sdfasdf", content: "siap" }, { id: 13, title: "xcxcxcx", content: "xzcxz" }, { id: 14, title: "Tes", content: "Email test" }, { id: 15, title: "Haloo", content: "Healoo" }, { id: 16, title: "Coba", content: "Coba" }, { id: 17, title: "Ini adalah email", content: "iya" }, { id: 18, title: "sdfasdf", content: "siap" }, { id: 19, title: "xcxcxcx", content: "xzcxz" }, { id: 20, title: "Tes", content: "Email test" }, { id: 21, title: "Haloo", content: "Healoo" }, { id: 22, title: "Coba", content: "Coba" }, { id: 23, title: "Ini adalah email", content: "iya" }, { id: 24, title: "sdfasdf", content: "siap" }, { id: 25, title: "xcxcxcx", content: "xzcxz" });
        this.sent = new Array({ id: 1, title: "Syara", content: "Sua test" }, { id: 2, title: "Sent", content: "Sent EMAIL" }, { id: 3, title: "Roblo", content: "Healoo" }, { id: 4, title: "lla", content: "Coba" }, { id: 5, title: "Ini xccx email", content: "iya" }, { id: 6, title: "xcxcxcxcx", content: "siap" }, { id: 7, title: "asda", content: "xzcxz" }, { id: 8, title: "Tes", content: "Email test" }, { id: 9, title: "Haloo", content: "Healoo" });
    }
    ItemService.prototype.getInboxItems = function () {
        return this.inbox;
    };
    ItemService.prototype.getInboxItem = function (id) {
        return this.inbox.filter(function (item) { return item.id === id; })[0];
    };
    ItemService.prototype.getSentItems = function () {
        return this.sent;
    };
    ItemService.prototype.getSentItem = function (id) {
        return this.sent.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTzNDO0lBSEE7UUFJWSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFDOUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxFQUNuRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQzVDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFDekMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ3BELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFDNUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUM3QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQzlDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDNUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUMxQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDckQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUM3QyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQzlDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFDL0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUM3QyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQzFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNyRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQzdDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFDOUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUMvQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQzdDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFDMUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ3JELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFDN0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNqRCxDQUFDO1FBRU0sU0FBSSxHQUFHLElBQUksS0FBSyxDQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQzlDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFDL0MsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUM1QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQ3hDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNsRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQzlDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFDMUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUM5QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQy9DLENBQUM7SUFpQk4sQ0FBQztJQWZHLG1DQUFhLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxFQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUF2RFEsV0FBVztRQUh2QixpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQztPQUNXLFdBQVcsQ0F3RHZCO0lBQUQsa0JBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGluYm94ID0gbmV3IEFycmF5PEl0ZW0+KFxyXG4gICAgICAgIHsgaWQ6IDEsIHRpdGxlOiBcIlRlc1wiLCBjb250ZW50OiBcIkVtYWlsIHRlc3RcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDIsIHRpdGxlOiBcIlVuaXF1ZVwiLCBjb250ZW50OiBcIlVuaXF1ZSBFTUFJTFwiIH0sXHJcbiAgICAgICAgeyBpZDogMywgdGl0bGU6IFwiSGFsb29cIiwgY29udGVudDogXCJIZWFsb29cIiB9LFxyXG4gICAgICAgIHsgaWQ6IDQsIHRpdGxlOiBcIkNvYmFcIiwgY29udGVudDogXCJDb2JhXCIgfSxcclxuICAgICAgICB7IGlkOiA1LCB0aXRsZTogXCJJbmkgYWRhbGFoIGVtYWlsXCIsIGNvbnRlbnQ6IFwiaXlhXCIgfSxcclxuICAgICAgICB7IGlkOiA2LCB0aXRsZTogXCJzZGZhc2RmXCIsIGNvbnRlbnQ6IFwic2lhcFwiIH0sXHJcbiAgICAgICAgeyBpZDogNywgdGl0bGU6IFwieGN4Y3hjeFwiLCBjb250ZW50OiBcInh6Y3h6XCIgfSxcclxuICAgICAgICB7IGlkOiA4LCB0aXRsZTogXCJUZXNcIiwgY29udGVudDogXCJFbWFpbCB0ZXN0XCIgfSxcclxuICAgICAgICB7IGlkOiA5LCB0aXRsZTogXCJIYWxvb1wiLCBjb250ZW50OiBcIkhlYWxvb1wiIH0sXHJcbiAgICAgICAgeyBpZDogMTAsIHRpdGxlOiBcIkNvYmFcIiwgY29udGVudDogXCJDb2JhXCIgfSxcclxuICAgICAgICB7IGlkOiAxMSwgdGl0bGU6IFwiSW5pIGFkYWxhaCBlbWFpbFwiLCBjb250ZW50OiBcIml5YVwiIH0sXHJcbiAgICAgICAgeyBpZDogMTIsIHRpdGxlOiBcInNkZmFzZGZcIiwgY29udGVudDogXCJzaWFwXCIgfSxcclxuICAgICAgICB7IGlkOiAxMywgdGl0bGU6IFwieGN4Y3hjeFwiLCBjb250ZW50OiBcInh6Y3h6XCIgfSxcclxuICAgICAgICB7IGlkOiAxNCwgdGl0bGU6IFwiVGVzXCIsIGNvbnRlbnQ6IFwiRW1haWwgdGVzdFwiIH0sXHJcbiAgICAgICAgeyBpZDogMTUsIHRpdGxlOiBcIkhhbG9vXCIsIGNvbnRlbnQ6IFwiSGVhbG9vXCIgfSxcclxuICAgICAgICB7IGlkOiAxNiwgdGl0bGU6IFwiQ29iYVwiLCBjb250ZW50OiBcIkNvYmFcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDE3LCB0aXRsZTogXCJJbmkgYWRhbGFoIGVtYWlsXCIsIGNvbnRlbnQ6IFwiaXlhXCIgfSxcclxuICAgICAgICB7IGlkOiAxOCwgdGl0bGU6IFwic2RmYXNkZlwiLCBjb250ZW50OiBcInNpYXBcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDE5LCB0aXRsZTogXCJ4Y3hjeGN4XCIsIGNvbnRlbnQ6IFwieHpjeHpcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDIwLCB0aXRsZTogXCJUZXNcIiwgY29udGVudDogXCJFbWFpbCB0ZXN0XCIgfSxcclxuICAgICAgICB7IGlkOiAyMSwgdGl0bGU6IFwiSGFsb29cIiwgY29udGVudDogXCJIZWFsb29cIiB9LFxyXG4gICAgICAgIHsgaWQ6IDIyLCB0aXRsZTogXCJDb2JhXCIsIGNvbnRlbnQ6IFwiQ29iYVwiIH0sXHJcbiAgICAgICAgeyBpZDogMjMsIHRpdGxlOiBcIkluaSBhZGFsYWggZW1haWxcIiwgY29udGVudDogXCJpeWFcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDI0LCB0aXRsZTogXCJzZGZhc2RmXCIsIGNvbnRlbnQ6IFwic2lhcFwiIH0sXHJcbiAgICAgICAgeyBpZDogMjUsIHRpdGxlOiBcInhjeGN4Y3hcIiwgY29udGVudDogXCJ4emN4elwiIH1cclxuICAgICk7XHJcblxyXG4gICAgcHJpdmF0ZSBzZW50ID0gbmV3IEFycmF5PEl0ZW0+KFxyXG4gICAgICAgIHsgaWQ6IDEsIHRpdGxlOiBcIlN5YXJhXCIsIGNvbnRlbnQ6IFwiU3VhIHRlc3RcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDIsIHRpdGxlOiBcIlNlbnRcIiwgY29udGVudDogXCJTZW50IEVNQUlMXCIgfSxcclxuICAgICAgICB7IGlkOiAzLCB0aXRsZTogXCJSb2Jsb1wiLCBjb250ZW50OiBcIkhlYWxvb1wiIH0sXHJcbiAgICAgICAgeyBpZDogNCwgdGl0bGU6IFwibGxhXCIsIGNvbnRlbnQ6IFwiQ29iYVwiIH0sXHJcbiAgICAgICAgeyBpZDogNSwgdGl0bGU6IFwiSW5pIHhjY3ggZW1haWxcIiwgY29udGVudDogXCJpeWFcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDYsIHRpdGxlOiBcInhjeGN4Y3hjeFwiLCBjb250ZW50OiBcInNpYXBcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDcsIHRpdGxlOiBcImFzZGFcIiwgY29udGVudDogXCJ4emN4elwiIH0sXHJcbiAgICAgICAgeyBpZDogOCwgdGl0bGU6IFwiVGVzXCIsIGNvbnRlbnQ6IFwiRW1haWwgdGVzdFwiIH0sXHJcbiAgICAgICAgeyBpZDogOSwgdGl0bGU6IFwiSGFsb29cIiwgY29udGVudDogXCJIZWFsb29cIiB9XHJcbiAgICApO1xyXG5cclxuICAgIGdldEluYm94SXRlbXMoKTogQXJyYXk8SXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluYm94O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluYm94SXRlbShpZDogbnVtYmVyKTogSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5ib3guZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZClbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VudEl0ZW1zKCk6IEFycmF5PEl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbnRJdGVtKGlkOiBudW1iZXIpOiBJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW50LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==