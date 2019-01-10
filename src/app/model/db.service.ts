import { Injectable } from "@angular/core";
import { Item } from "./item";

const sqlite = require("nativescript-sqlite");

@Injectable({
    providedIn: "root"
})

export class DBService {

    private database: any;

    constructor() {
        //
        (new sqlite("mail.db")).then((db) => {
            db.execSQL("CREATE TABLE IF NOT EXISTS mail (\
                id INTEGER PRIMARY KEY AUTOINCREMENT,\
                subject text,\
                content text,\
                sender text,\
                reciever text,\
                date text,\
                type text").then((id) => {this.database = db;
                }, (error) => {
                    console.log("CREATE TABLE mail ERROR " + error);
                });
        });
    }

    insert(item: Item, type: string) {
        this.database.execSQL("INSERT INTO mail (subject,content,sender,reciever,date,type)\
        values (?,?,?,?,?,?)", [item.subject, item.content, item.sender, item.reciever, item.date, type]);
    }

    fetch(type: string): Array<Item> {
        const items: Array<Item> = [];
        this.database.all("SELECT * FROM mail where type=?", type).then((rows) => {
            // tslint:disable-next-line:forin
            for (const row in rows) {
                items.push({
                   id: rows[row][0],
                   subject: rows[row][1],
                   content: rows[row][2],
                   sender: rows[row][3],
                   reciever: rows[row][4],
                   date: rows[row][5]
                });
            }
        }, (error) => {
            console.log("FETCHING ERROR", error);
        });

        return items;
    }
}
