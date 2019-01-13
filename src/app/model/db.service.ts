import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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
                type text)").then((id) => {this.database = db;
                }, (error) => {
                    console.log("CREATE TABLE mail ERROR " + error);
                });
        });
    }

    insert(item: Item, type: string) {
        this.database.execSQL("INSERT INTO mail (subject,content,sender,reciever,date,type)\
        values (?,?,?,?,?,?)", [item.subject, item.content, item.sender, item.reciever, item.date, type]);
    }
/*
    fetch = (type: string) => {
        console.log("trying to fetch : " + type);
    }
*/
    fetch(type: string): Promise<any> {
        console.log("trying to fetch : " + type);

        return this.database.all("SELECT * FROM mail where type=?", type).then((rows) => {
            const items: Array<Item> = [];

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
            console.log("fetching " + type + " found data : " + items.length);

            return items;
        }, (error) => {
            console.log("FETCHING ERROR", error);

            return null;
        });
    }

    get(type: string, id: number): Promise<any> {
        return this.database.all("SELECT * from mail where type=? and id=?", type, id).then((row) => {
            const item = {
                id: row[0],
                subject: row[1],
                content: row[2],
                sender: row[3],
                reciever: row[4],
                date: row[5]
            };

            return item;
        }, (error) => {
            console.log("get detail error, " + error);

            return null;
        });
    }
}
