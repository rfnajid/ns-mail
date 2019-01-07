import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private inbox = new Array<Item>(
        { id: 1, subject: "Tes", content: "Email test", sender: "", reciever: "", date: ""},
        { id: 2, subject: "Unique", content: "Unique EMAIL", sender: "", reciever: "", date: ""},
        { id: 3, subject: "Haloo", content: "Healoo", sender: "", reciever: "", date: ""},
        { id: 4, subject: "Coba", content: "Coba", sender: "", reciever: "", date: ""},
        { id: 5, subject: "Ini adalah email", content: "iya", sender: "", reciever: "", date: ""},
        { id: 6, subject: "sdfasdf", content: "siap", sender: "", reciever: "", date: ""},
        { id: 7, subject: "xcxcxcx", content: "xzcxz", sender: "", reciever: "", date: ""},
        { id: 8, subject: "Tes", content: "Email test", sender: "", reciever: "", date: ""},
        { id: 9, subject: "Haloo", content: "Healoo", sender: "", reciever: "", date: ""},
        { id: 10, subject: "Coba", content: "Coba", sender: "", reciever: "", date: ""},
        { id: 11, subject: "Ini adalah email", content: "iya", sender: "", reciever: "", date: ""},
        { id: 12, subject: "sdfasdf", content: "siap", sender: "", reciever: "", date: ""},
        { id: 13, subject: "xcxcxcx", content: "xzcxz", sender: "", reciever: "", date: ""},
        { id: 14, subject: "Tes", content: "Email test", sender: "", reciever: "", date: ""},
        { id: 15, subject: "Haloo", content: "Healoo", sender: "", reciever: "", date: ""},
        { id: 16, subject: "Coba", content: "Coba", sender: "", reciever: "", date: ""},
        { id: 17, subject: "Ini adalah email", content: "iya", sender: "", reciever: "", date: ""},
        { id: 18, subject: "sdfasdf", content: "siap", sender: "", reciever: "", date: ""},
        { id: 19, subject: "xcxcxcx", content: "xzcxz", sender: "", reciever: "", date: ""},
        { id: 20, subject: "Tes", content: "Email test", sender: "", reciever: "", date: ""},
        { id: 21, subject: "Haloo", content: "Healoo", sender: "", reciever: "", date: ""},
        { id: 22, subject: "Coba", content: "Coba", sender: "", reciever: "", date: ""},
        { id: 23, subject: "Ini adalah email", content: "iya", sender: "", reciever: "", date: ""},
        { id: 24, subject: "sdfasdf", content: "siap", sender: "", reciever: "", date: ""},
        { id: 25, subject: "xcxcxcx", content: "xzcxz", sender: "", reciever: "", date: ""}
    );

    private sent = new Array<Item>(
        { id: 1, subject: "Syara", content: "Sua test", sender: "", reciever: "", date: ""},
        { id: 2, subject: "Sent", content: "Sent EMAIL", sender: "", reciever: "", date: ""},
        { id: 3, subject: "Roblo", content: "Healoo", sender: "", reciever: "", date: ""},
        { id: 4, subject: "lla", content: "Coba", sender: "", reciever: "", date: ""},
        { id: 5, subject: "Ini xccx email", content: "iya", sender: "", reciever: "", date: ""},
        { id: 6, subject: "xcxcxcxcx", content: "siap", sender: "", reciever: "", date: ""},
        { id: 7, subject: "asda", content: "xzcxz", sender: "", reciever: "", date: ""},
        { id: 8, subject: "Tes", content: "Email test", sender: "", reciever: "", date: ""},
        { id: 9, subject: "Haloo", content: "Healoo", sender: "", reciever: "", date: ""}
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

    isEmailTargetValid(email: Item): boolean {
        // tslint:disable-next-line:max-line-length
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        const valid = emailRegEx.test(email.reciever);

        return valid ? null : true;
    }
}
