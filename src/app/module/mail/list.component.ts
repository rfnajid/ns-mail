import { Component, Input, OnInit } from "@angular/core";
import { Item } from "~/app/model/item";
import { ItemService } from "~/app/model/item.service";

@Component({
    selector: "List",
    moduleId: module.id,
    templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit {

    @Input() type: string;

    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        // Init your component properties here.
        this.loadData();
    }

    loadData(): void {
        console.log("load data : " + this.type);

        if (this.type === "inbox") {
            this.items = this.itemService.getInboxItems();
        } else if (this.type === "sent") {
            this.items = this.itemService.getSentItems();
        }
     }
}
