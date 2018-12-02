import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import LocalStorage from './LocalStorage';
import ManageLocalStorage from './ManageLocalStorage';
import {config} from '../config/firebase.json';
import uuid from 'uuid/v1';

const db = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


export class Firebase {
    constructor(tableName) {
        this.tableName = tableName; // name of table on firebase
        this.uid = LocalStorage.get("session") ? LocalStorage.get("session").user.id.replace(".", "_") : '';
        this.deviceid = LocalStorage.get("id_device");
    }

    login = () => {
        let randId = uuid();
        let lastOnlineRef = db.database().ref(`users/${this.uid}/${randId}/lastOnline`);
        lastOnlineRef.set(firebase.firestore.Timestamp.now().toMillis());
        LocalStorage.set("id_device", randId);
    };

    running = () => {
        let lastOnlineRef = db.database().ref(`users/${this.uid}/${this.deviceid}/lastOnline`);
        let connectedRef = db.database().ref('.info/connected');
        connectedRef.on('value', function (snap) {
            if (snap.val() === true) {
                // When I disconnect, update the last time I was seen online
                lastOnlineRef.onDisconnect().set(firebase.firestore.Timestamp.now().toMillis());
            }
        });
    };

    removeEvent = () => {
        db.database().ref(this.tableName).off()
    };

    loadFirstTime = () => new Promise(resolve => {
        let app = db.database().ref(this.tableName);
        app.orderByChild("action").once('value', (snapshot) => {
            new ManageLocalStorage(this.tableName).doCreate(snapshot.val());
            resolve("Done.");
        });
    });


    load = async () => {
        let lastOnlineRef = db.database().ref(`users/${this.uid}/${this.deviceid}/lastOnline`);
        let app = db.database().ref(this.tableName);
        let snap = await lastOnlineRef.once('value');
        let value = await app.orderByChild("created_at").startAt(snap.val()).once('value');

        // update offline
        new ManageLocalStorage(this.tableName).doUpdate(value.val());

        // listen method
        app.orderByChild("created_at").startAt(snap.val()).on('child_added', (snapshot) => {
            new ManageLocalStorage(this.tableName).doUpdateOne(snapshot.val(), snapshot.key);
        });

        app.on('child_changed', (snapshot) => {
            new ManageLocalStorage(this.tableName).doUpdateOne(snapshot.val(), snapshot.key);
        });

        return "Done.";
    }

}