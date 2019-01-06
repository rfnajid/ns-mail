import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private inbox = new Array<Item>(
        { id: 1, title: "Tes", content: "Email test" },
        { id: 2, title: "Unique", content: "Unique EMAIL" },
        { id: 3, title: "Haloo", content: "Healoo" },
        { id: 4, title: "Coba", content: "Coba" },
        { id: 5, title: "Ini adalah email", content: "iya" },
        { id: 6, title: "sdfasdf", content: "siap" },
        { id: 7, title: "xcxcxcx", content: "xzcxz" },
        { id: 8, title: "Tes", content: "Email test" },
        { id: 9, title: "Haloo", content: "Healoo" },
        { id: 10, title: "Coba", content: "Coba" },
        { id: 11, title: "Ini adalah email", content: "iya" },
        { id: 12, title: "sdfasdf", content: "siap" },
        { id: 13, title: "xcxcxcx", content: "xzcxz" },
        { id: 14, title: "Tes", content: "Email test" },
        { id: 15, title: "Haloo", content: "Healoo" },
        { id: 16, title: "Coba", content: "Coba" },
        { id: 17, title: "Ini adalah email", content: "iya" },
        { id: 18, title: "sdfasdf", content: "siap" },
        { id: 19, title: "xcxcxcx", content: "xzcxz" },
        { id: 20, title: "Tes", content: "Email test" },
        { id: 21, title: "Haloo", content: "Healoo" },
        { id: 22, title: "Coba", content: "Coba" },
        { id: 23, title: "Ini adalah email", content: "iya" },
        { id: 24, title: "sdfasdf", content: "siap" },
        { id: 25, title: "xcxcxcx", content: "xzcxz" }
    );

    private sent = new Array<Item>(
        { id: 1, title: "Syara", content: "Sua test" },
        { id: 2, title: "Sent", content: "Sent EMAIL" },
        { id: 3, title: "Roblo", content: "Healoo" },
        { id: 4, title: "lla", content: "Coba" },
        { id: 5, title: "Ini xccx email", content: "iya" },
        { id: 6, title: "xcxcxcxcx", content: "siap" },
        { id: 7, title: "asda", content: "xzcxz" },
        { id: 8, title: "Tes", content: "Email test" },
        { id: 9, title: "Haloo", content: "Healoo" }
    );

    getInboxItems(): Array<Item> {
        return this.inbox;
    }

    getInboxItem(id: number): Item {
        return this.inbox.filter((item) => item.id === id)[0];
    }

    getSentItems(): Array<Item> {
        return this.sent;
    }

    getSentItem(id: number): Item {
        return this.sent.filter((item) => item.id === id)[0];
    }
}
