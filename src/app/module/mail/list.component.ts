import { Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RadSideDrawer, SideDrawerLocation } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";

import { ListViewEventData } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular/listview-directives";
import { DBService } from "~/app/model/db.service";
import { Item } from "~/app/model/item";
import { ItemService } from "~/app/model/item.service";

@Component({
    selector: "List",
    moduleId: module.id,
    templateUrl: "./list.component.html",
    styleUrls: ["list.component.css"]
})

export class ListComponent implements OnInit, OnDestroy {

    type: string = "title";

    items: Array<Item>;

    sub: any;

    page: 1;

    json: any = JSON;

    @ViewChild("listView") listViewComponent: RadListViewComponent;

    private leftItem: View;
    private rightItem: View;
    private mainView: View;

    constructor(private itemService: ItemService, private route: ActivatedRoute, private db: DBService) { }

    ngOnInit(): void {
        // Init your component properties here.
        this.sub = this.route.data.subscribe(
              (v) => this.type = v.type
        );

        this.db.insert(this.itemService.getInboxItem(6), "inbox");
        this.newLoad();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    loadData(): void {
        console.log("load data : " + this.type);

        let fetch: Promise<any>;

        if (this.type === "inbox") {
            fetch = this.db.fetch("inbox");
        } else if (this.type === "sent") {
            fetch = this.db.fetch("sent");
        } else if (this.type === "draft") {
            fetch = this.db.fetch("draft");
        } else if (this.type === "featured") {
            fetch = this.db.fetch("featured");
        }

        fetch.then((data) => {
            if (data) {
                console.log("data catched : ");
                console.log(this.json.stringify(this.items.concat(data)));
                this.items = this.items.concat(data);
            }
        });
     }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onCellSwiping(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        const currentItemView = args.object;

        if (args.data.x > 200) {
            console.log("Notify perform left action");
        } else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    }

    onSwipeCellStarted(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        // tslint:disable-next-line:no-string-literal
        const swipeView = args["object"];
        const leftItem = swipeView.getViewById<View>("featured-view");
        const rightItem = swipeView.getViewById<View>("delete-view");
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    }

    onSwipeCellFinished(args: ListViewEventData) {
    //
    }

    onLeftSwipeClick(args: EventData) {
        console.log("Left swipe click");
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    }

    onRightSwipeClick(args: EventData) {
        console.log("Right swipe click");
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    }

    refreshList(args): void {
        const pullRefresh = args.object;
        this.newLoad();
        setTimeout(() => {
           pullRefresh.notifyPullToRefreshFinished();
        }, 1000);
    }

    loadMore(args): void {
        const loadMore = args.object;
        this.page++;
        this.loadData();
        console.log("page : " + this.page);
        setTimeout(() => {
            loadMore.notifyLoadOnDemandFinished();
        }, 1000);
    }

    newLoad(): void {
        this.page = 1;
        this.items = [];
        this.loadData();
    }

    private hideOtherSwipeTemplateView(currentSwipeView: string) {
        switch (currentSwipeView) {
            case "left":
                if (this.rightItem.getActualSize().width !== 0) {
                    // tslint:disable-next-line:max-line-length
                    View.layoutChild(<View>this.rightItem.parent, this.rightItem, this.mainView.getMeasuredWidth(), 0, this.mainView.getMeasuredWidth(), 0);
                }
                break;
            case "right":
                if (this.leftItem.getActualSize().width !== 0) {
                    View.layoutChild(<View>this.leftItem.parent, this.leftItem, 0, 0, 0, 0);
                }
                break;
            default:
                break;
        }
    }
}
