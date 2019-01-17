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
            db.execSQL("PRAGMA foreign_keys = on");
            db.execSQL("CREATE TABLE IF NOT EXISTS mail (\
                id INTEGER PRIMARY KEY AUTOINCREMENT,\
                subject text,\
                content text,\
                sender text,\
                reciever text,\
                date text,\
                type text);\
                CREATE TABLE IF NOT EXISTS featured (\
                    id INTEGER PRIMARY KEY,\
                    type").then((id) => {this.database = db;
                }, (error) => {
                    console.log("CREATE TABLE mail ERROR " + error);
                });
            db.execSQL("CREATE TABLE IF NOT EXISTS featured (\
                featid INTEGER,\
                type text,\
                FOREIGN KEY (featid) REFERENCES mail(id))").then((id) => {
                    //
                }, (error) => {
                    console.log("CREATE TABLE featured ERROR " + error);
                });
        });

    }

    insert(item: Item, type: string) {
        this.database.execSQL("INSERT INTO mail (subject,content,sender,reciever,date,type)\
        values (?,?,?,?,?,?)", [item.subject, item.content, item.sender, item.reciever, item.date, type]);
    }

    insertFeat(id: number, type: string) {
        this.database.execSQL("INSERT INTO featured (featid,type) values (?,?)", id, type);
    }

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

    fetchFeat() {

        return this.database.all("SELECT * FROM mail where type IN \
        (select featid from featured)").then((rows) => {
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
            console.log("fetching featured found data : " + items.length);

            return items;
        }, (error) => {
            console.log("FETCHING ERROR", error);

            return null;
        });

    }

    get(id: number, type: string): Promise<any> {
        console.log("trying to get " + type + " id : " + id);

        return this.database.all("SELECT * from mail where id=? and type=?", [id, type]).then((rows) => {
            console.log("get row : " + JSON.stringify(rows));

            const item = {
                id: rows[0][0],
                subject: rows[0][1],
                content: rows[0][2],
                sender: rows[0][3],
                reciever: rows[0][4],
                date: rows[0][5]
            };

            console.log("get item : " + JSON.stringify(item));

            return item;
        }, (error) => {
            console.log("get detail error, " + error);

            return null;
        });
    }

    delete(id: number) {
        this.database.execSQL("DELETE FROM mail WHERE id=?", [id]);
    }

    deleteFeat(id: number) {
        this.database.execSQL("DELETE FROM featured WHERE id=?", [id]);
    }
}
