import { Injectable } from "@angular/core";
import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {

    loadPagination: number = 13;

    private inbox = new Array<Item>();
    private sent = new Array<Item>();
    private draft = new Array<Item>();
    private featured = new Array<Item>();

    constructor() {
        this.generate("inbox", 19);
        this.generate("sent", 50);
        this.generate("draft", 20);
        this.generate("featured", 1000);
    }

    generate(type: string, size: number): void {
        for (let i: number = 1; i < size; i++) {
            const item: Item = {
                id: i,
                subject: "Email " + type.toUpperCase() + " #" + i,
                content: "This is the content of " + type.toUpperCase() + " number " + i,
                sender: "sender@gmail.com",
                reciever: "reciever@gmail.com",
                date: "20-12-2012"
            };

            if (type === "inbox") {
                this.inbox.push(item);
            } else if (type === "sent") {
                this.sent.push(item);
            } else if (type === "draft") {
                this.draft.push(item);
            } else if (type === "featured") {
                this.featured.push(item);
            }
        }
    }

    getInboxItems(index: number = 1): Array<Item> {
        console.log("item count : " + this.inbox.length);

        return this.inbox.slice(this.loadPagination * (index - 1), this.loadPagination * index);
    }

    getInboxItem(id: number): Item {
        return this.inbox.filter((item) => item.id === id)[0];
    }

    getSentItems(index: number = 1): Array<Item> {
        console.log("item count : " + this.sent.length);

        return this.sent.slice(this.loadPagination * (index - 1), this.loadPagination * index);
    }

    getSentItem(id: number): Item {
        return this.sent.filter((item) => item.id === id)[0];
    }

    getDraftItems(index: number = 1): Array<Item> {
        console.log("item count : " + this.draft.length);

        return this.draft.slice(this.loadPagination * (index - 1), this.loadPagination * index);
    }

    getDraftItem(id: number): Item {
        return this.draft.filter((item) => item.id === id)[0];
    }

    getFeaturedItems(index: number = 1): Array<Item> {
        console.log("item count : " + this.featured.length);

        return this.featured.slice(this.loadPagination * (index - 1), this.loadPagination * index);
    }

    getFeaturedItem(id: number): Item {
        return this.featured.filter((item) => item.id === id)[0];
    }
}
