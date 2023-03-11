import mysql from 'mysql';

export class ConnectionUserData {
    $system: boolean = false;
    $id: number = 0;
    $groupEnabled: boolean = false;
    $group: string = '';
    $map: string = '';
}

export class ConnectionDb {
    host: string;
    user: string;
    password: string;
    port: string;
    db: string;
}

export class Connection {
    public tenant: string;
    public dbAccess: ConnectionDb;
    public systemKey: string;
    public userData: ConnectionUserData;
    public token: string;
    public db: mysql.Connection;

    public start() {

    }
}
