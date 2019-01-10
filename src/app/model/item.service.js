"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.loadPagination = 13;
        this.inbox = new Array();
        this.sent = new Array();
        this.draft = new Array();
        this.featured = new Array();
        this.generate("inbox", 19);
        this.generate("sent", 50);
        this.generate("draft", 20);
        this.generate("featured", 1000);
    }
    ItemService.prototype.generate = function (type, size) {
        for (var i = 1; i < size; i++) {
            var item = {
                id: i,
                subject: "Email " + type.toUpperCase() + " #" + i,
                content: "This is the content of " + type.toUpperCase() + " number " + i,
                sender: "sender@gmail.com",
                reciever: "reciever@gmail.com",
                date: "20-12-2012"
            };
            if (type === "inbox") {
                this.inbox.push(item);
            }
            else if (type === "sent") {
                this.sent.push(item);
            }
            else if (type === "draft") {
                this.draft.push(item);
            }
            else if (type === "featured") {
                this.featured.push(item);
            }
        }
    };
    ItemService.prototype.getInboxItems = function (index) {
        if (index === void 0) { index = 1; }
        console.log("item count : " + this.inbox.length);
        return this.inbox.slice(this.loadPagination * (index - 1), this.loadPagination * index);
    };
    ItemService.prototype.getInboxItem = function (id) {
        return this.inbox.filter(function (item) { return item.id === id; })[0];
    };
    ItemService.prototype.getSentItems = function (index) {
        if (index === void 0) { index = 1; }
        console.log("item count : " + this.sent.length);
        return this.sent.slice(this.loadPagination * (index - 1), this.loadPagination * index);
    };
    ItemService.prototype.getSentItem = function (id) {
        return this.sent.filter(function (item) { return item.id === id; })[0];
    };
    ItemService.prototype.getDraftItems = function (index) {
        if (index === void 0) { index = 1; }
        console.log("item count : " + this.draft.length);
        return this.draft.slice(this.loadPagination * (index - 1), this.loadPagination * index);
    };
    ItemService.prototype.getDraftItem = function (id) {
        return this.draft.filter(function (item) { return item.id === id; })[0];
    };
    ItemService.prototype.getFeaturedItems = function (index) {
        if (index === void 0) { index = 1; }
        console.log("item count : " + this.featured.length);
        return this.featured.slice(this.loadPagination * (index - 1), this.loadPagination * index);
    };
    ItemService.prototype.getFeaturedItem = function (id) {
        return this.featured.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTTNDO0lBU0k7UUFQQSxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUVwQixVQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUMxQixTQUFJLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUN6QixVQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUMxQixhQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUdqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLElBQVksRUFBRSxJQUFZO1FBQy9CLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBTSxJQUFJLEdBQVM7Z0JBQ2YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUM7Z0JBQ2pELE9BQU8sRUFBRSx5QkFBeUIsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsVUFBVSxHQUFHLENBQUM7Z0JBQ3hFLE1BQU0sRUFBRSxrQkFBa0I7Z0JBQzFCLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLElBQUksRUFBRSxZQUFZO2FBQ3JCLENBQUM7WUFFRixJQUFJLElBQUksS0FB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Q0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixFQUFVO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBN0VRLFdBQVc7UUFIdkIsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7O09BQ1csV0FBVyxDQThFdkI7SUFBRCxrQkFBQztDQUFBLEFBOUVELElBOEVDO0FBOUVZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xyXG5cclxuICAgIGxvYWRQYWdpbmF0aW9uOiBudW1iZXIgPSAxMztcclxuXHJcbiAgICBwcml2YXRlIGluYm94ID0gbmV3IEFycmF5PEl0ZW0+KCk7XHJcbiAgICBwcml2YXRlIHNlbnQgPSBuZXcgQXJyYXk8SXRlbT4oKTtcclxuICAgIHByaXZhdGUgZHJhZnQgPSBuZXcgQXJyYXk8SXRlbT4oKTtcclxuICAgIHByaXZhdGUgZmVhdHVyZWQgPSBuZXcgQXJyYXk8SXRlbT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlKFwiaW5ib3hcIiwgMTkpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoXCJzZW50XCIsIDUwKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlKFwiZHJhZnRcIiwgMjApO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoXCJmZWF0dXJlZFwiLCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZSh0eXBlOiBzdHJpbmcsIHNpemU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTogSXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgICAgICAgc3ViamVjdDogXCJFbWFpbCBcIiArIHR5cGUudG9VcHBlckNhc2UoKSArIFwiICNcIiArIGksXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlRoaXMgaXMgdGhlIGNvbnRlbnQgb2YgXCIgKyB0eXBlLnRvVXBwZXJDYXNlKCkgKyBcIiBudW1iZXIgXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgc2VuZGVyOiBcInNlbmRlckBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgIHJlY2lldmVyOiBcInJlY2lldmVyQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCIyMC0xMi0yMDEyXCJcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImluYm94XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5ib3gucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJkcmFmdFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWZ0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJmZWF0dXJlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVkLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5ib3hJdGVtcyhpbmRleDogbnVtYmVyID0gMSk6IEFycmF5PEl0ZW0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW0gY291bnQgOiBcIiArIHRoaXMuaW5ib3gubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5ib3guc2xpY2UodGhpcy5sb2FkUGFnaW5hdGlvbiAqIChpbmRleCAtIDEpLCB0aGlzLmxvYWRQYWdpbmF0aW9uICogaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluYm94SXRlbShpZDogbnVtYmVyKTogSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5ib3guZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZClbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VudEl0ZW1zKGluZGV4OiBudW1iZXIgPSAxKTogQXJyYXk8SXRlbT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbSBjb3VudCA6IFwiICsgdGhpcy5zZW50Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbnQuc2xpY2UodGhpcy5sb2FkUGFnaW5hdGlvbiAqIChpbmRleCAtIDEpLCB0aGlzLmxvYWRQYWdpbmF0aW9uICogaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbnRJdGVtKGlkOiBudW1iZXIpOiBJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW50LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERyYWZ0SXRlbXMoaW5kZXg6IG51bWJlciA9IDEpOiBBcnJheTxJdGVtPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGVtIGNvdW50IDogXCIgKyB0aGlzLmRyYWZ0Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRyYWZ0LnNsaWNlKHRoaXMubG9hZFBhZ2luYXRpb24gKiAoaW5kZXggLSAxKSwgdGhpcy5sb2FkUGFnaW5hdGlvbiAqIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREcmFmdEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRyYWZ0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZlYXR1cmVkSXRlbXMoaW5kZXg6IG51bWJlciA9IDEpOiBBcnJheTxJdGVtPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGVtIGNvdW50IDogXCIgKyB0aGlzLmZlYXR1cmVkLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVkLnNsaWNlKHRoaXMubG9hZFBhZ2luYXRpb24gKiAoaW5kZXggLSAxKSwgdGhpcy5sb2FkUGFnaW5hdGlvbiAqIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGZWF0dXJlZEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVkLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==