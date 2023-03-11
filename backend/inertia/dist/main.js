/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(4);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const api_module_1 = __webpack_require__(7);
const factory_module_1 = __webpack_require__(41);
const shared_module_1 = __webpack_require__(39);
const auth_module_1 = __webpack_require__(59);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [api_module_1.ApiModule, factory_module_1.FactoryModule, shared_module_1.SharedModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(4);
let AppService = class AppService {
    constructor() {
        this.i = 0;
    }
    getHello() {
        return `Hello World! (${this.i++})`;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiModule = void 0;
const common_1 = __webpack_require__(4);
const api_controller_1 = __webpack_require__(8);
const graph_service_1 = __webpack_require__(28);
const crud_service_1 = __webpack_require__(26);
const shared_module_1 = __webpack_require__(39);
const shared_1 = __webpack_require__(9);
let ApiModule = class ApiModule {
};
ApiModule = __decorate([
    (0, common_1.Module)({
        controllers: [api_controller_1.ApiController],
        imports: [shared_module_1.SharedModule],
        providers: [crud_service_1.CrudService, graph_service_1.GraphService, shared_1.Connection],
    })
], ApiModule);
exports.ApiModule = ApiModule;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiController = void 0;
const common_1 = __webpack_require__(4);
const shared_1 = __webpack_require__(9);
const crud_dto_1 = __webpack_require__(37);
const graph_dto_1 = __webpack_require__(38);
const crud_entity_1 = __webpack_require__(27);
const graph_entity_1 = __webpack_require__(29);
const crud_service_1 = __webpack_require__(26);
const graph_service_1 = __webpack_require__(28);
let ApiController = class ApiController {
    constructor(crudService, graphService) {
        this.crudService = crudService;
        this.graphService = graphService;
    }
    select(payload, root, graphDto) {
        return this.graphService.execute(payload, new graph_entity_1.GraphParameters(Object.assign(Object.assign({}, graphDto), { root, moduleExtension: 'public' })));
    }
    crud(payload, root, crudApiDto) {
        return this.crudService.execute(payload, new crud_entity_1.CrudParameters(Object.assign(Object.assign({}, crudApiDto), { root, moduleExtension: 'public' })));
    }
};
__decorate([
    (0, common_1.Post)('select/:root'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('root')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof graph_dto_1.GraphDto !== "undefined" && graph_dto_1.GraphDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "select", null);
__decorate([
    (0, common_1.Post)('crud/:root'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('root')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_d = typeof crud_dto_1.CrudApiDto !== "undefined" && crud_dto_1.CrudApiDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "crud", null);
ApiController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [typeof (_a = typeof crud_service_1.CrudService !== "undefined" && crud_service_1.CrudService) === "function" ? _a : Object, typeof (_b = typeof graph_service_1.GraphService !== "undefined" && graph_service_1.GraphService) === "function" ? _b : Object])
], ApiController);
exports.ApiController = ApiController;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Connection = exports.ConnectionDb = exports.ConnectionUserData = void 0;
const mysql = __webpack_require__(11);
const _const_1 = __webpack_require__(12);
const inertia_entity_1 = __webpack_require__(13);
const sqlHelper_entity_1 = __webpack_require__(16);
const common_1 = __webpack_require__(4);
class ConnectionUserData {
    constructor(params = null) {
        this.$system = false;
        this.$id = 0;
        this.$groupEnabled = false;
        this.$group = '';
        this.$map = '';
        if (params) {
            for (const k in params) {
                this[k] = params[k];
            }
        }
    }
}
exports.ConnectionUserData = ConnectionUserData;
class ConnectionDb {
    constructor(params = null) {
        if (params) {
            for (const k in params) {
                this[k] = params[k];
            }
        }
    }
}
exports.ConnectionDb = ConnectionDb;
class Connection {
    async startPublic(payload) {
        this.userData = new ConnectionUserData(Object.assign({}, payload.user));
        this.payload = payload;
        await this.start();
        return this;
    }
    async startProtected(payload, tenantName) {
        this.userData = new ConnectionUserData(Object.assign({ $system: true }, payload.user));
        this.payload = Object.assign(Object.assign({}, payload), { tenant: tenantName });
        await this.start();
        return this;
    }
    async startPrivate(tenantName) {
        this.userData = new ConnectionUserData({ $system: true });
        this.payload = { tenant: tenantName };
        await this.start();
        return this;
    }
    async start() {
        this.dbAccess = await this.getConfig();
        this.db = await this.connect(this.dbAccess.host, this.dbAccess.user, this.dbAccess.password, this.dbAccess.port, this.dbAccess.db);
        const systemKey = await this.getSystemKey();
        this.systemKey = 'ef47e181-3cc7-4d48-bcf2-1ce87302a658';
    }
    async getConfig() {
        let dbConnection;
        if (this.tenant === _const_1.CORE) {
            dbConnection = this.getCoreConnection();
        }
        else {
            dbConnection = await this.getConnectionByTenant(await this.getCoreDb(), this.tenant);
        }
        return dbConnection;
    }
    run(sql, output = {}, db = null) {
        if (!db) {
            db = this.db;
        }
        if (db.state === 'disconnected') {
            throw `Connection lost`;
        }
        return new Promise((resolve, reject) => {
            db.query(sql, [], (err, response) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                resolve(response);
            });
        }).then(response => {
            output.response = response;
            return response;
        }).catch(err => {
            return null;
        });
    }
    end() {
        this.disconnect();
    }
    async connect(host, user, password, port, database) {
        const result = await new Promise((resolve, reject) => {
            const con = mysql.createConnection({
                host,
                user,
                password,
                port,
                database
            });
            con.connect(((err) => {
                console.log('connected');
                resolve({ con, err });
            }).bind(this));
        });
        if (result.err) {
            throw new common_1.HttpException('Connection lost', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return result.con;
    }
    disconnect() {
        if (this.db) {
            console.log('disconnected');
            this.db.end();
        }
    }
    async getCoreDb() {
        try {
            const db = await this.connect(inertia_entity_1.InertiaCore.DATABASE_HOST, inertia_entity_1.InertiaCore.DATABASE_USERNAME, inertia_entity_1.InertiaCore.DATABASE_PASSWORD, inertia_entity_1.InertiaCore.DATABASE_PORT, inertia_entity_1.InertiaCore.DATABASE_NAME);
            return db;
        }
        catch (ex) {
            throw ex;
        }
    }
    async getConnectionByTenant(coreDb, tenantGuid) {
        var _a;
        const dbAccess = await this.run(`SELECT db.* FROM public_dbconnection as db LEFT JOIN public_tenants as t ON db.tenants_id=t.id WHERE t.guid='${tenantGuid}' LIMIT 1`, {}, coreDb);
        coreDb.end();
        let dbConnection = new ConnectionDb();
        if (!((_a = dbAccess[0]) === null || _a === void 0 ? void 0 : _a.host)) {
            dbConnection = this.getCoreConnection();
        }
        else {
            dbConnection.user = dbAccess[0].username;
            dbConnection.password = dbAccess[0].pass;
            dbConnection.port = dbAccess[0].port;
            dbConnection.host = dbAccess[0].host;
        }
        dbConnection.db = inertia_entity_1.InertiaCore.keyWord(`tenant_${tenantGuid}`);
        return dbConnection;
    }
    getCoreConnection() {
        const dbConnection = new ConnectionDb();
        dbConnection.db = inertia_entity_1.InertiaCore.keyWord(inertia_entity_1.InertiaCore.DATABASE_NAME);
        dbConnection.user = inertia_entity_1.InertiaCore.DATABASE_USERNAME;
        dbConnection.password = inertia_entity_1.InertiaCore.DATABASE_PASSWORD;
        dbConnection.port = inertia_entity_1.InertiaCore.DATABASE_PORT;
        dbConnection.host = inertia_entity_1.InertiaCore.DATABASE_HOST;
        return dbConnection;
    }
    async getSystemKey() {
        var _a;
        let data = [];
        try {
            let queryRes = new sqlHelper_entity_1.QueryRes();
            await this.run(`SELECT * FROM private_parameters WHERE paramKey='systemKey'`, queryRes);
            data = ((_a = queryRes.response) === null || _a === void 0 ? void 0 : _a.length) ? queryRes.response[0] : null;
        }
        catch (ex) {
            console.log(ex);
        }
        return data;
    }
    get tenant() {
        var _a;
        return (_a = this.payload) === null || _a === void 0 ? void 0 : _a.tenant;
    }
    get isPrivate() {
        return this.userData.$system && !this.userData.$id;
    }
}
exports.Connection = Connection;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CORE = exports.OP_EQUALS = exports.API_DATABASE_PREFIX = exports.API_TRANSLATIONS_TABLE = exports.API_USERSXCHUNKS_TABLE = exports.API_CHUNKS_TABLE = exports.API_USERSXROLES_TABLE = exports.API_ROLES_TABLE = exports.API_SESSIONS_TABLE = exports.API_CLIENTAPPS_TABLE = exports.API_LOGS_TABLE = exports.API_PARAMETERS_TABLE = exports.API_TENANTS_TABLE = exports.API_USERS_TABLE = exports.API_TABLE_PREFIX_PRIVATE = exports.API_TABLE_PREFIX_PUBLIC = exports.API_MODULE_PRIVATE = exports.API_MODULE_PUBLIC = exports.API_MODULE_AUTO = exports.TYPE_GUID = exports.TYPE_1NL = exports.TYPE_1NR = exports.TYPE_1N1 = void 0;
exports.TYPE_1N1 = '1n1';
exports.TYPE_1NR = '1n+';
exports.TYPE_1NL = '1n-';
exports.TYPE_GUID = 'guid';
exports.API_MODULE_AUTO = 'auto';
exports.API_MODULE_PUBLIC = 'public';
exports.API_MODULE_PRIVATE = 'private';
exports.API_TABLE_PREFIX_PUBLIC = 'public_';
exports.API_TABLE_PREFIX_PRIVATE = 'private_';
exports.API_USERS_TABLE = 'users';
exports.API_TENANTS_TABLE = 'tenants';
exports.API_PARAMETERS_TABLE = 'parameters';
exports.API_LOGS_TABLE = 'logs';
exports.API_CLIENTAPPS_TABLE = 'clientapps';
exports.API_SESSIONS_TABLE = 'sessions';
exports.API_ROLES_TABLE = 'roles';
exports.API_USERSXROLES_TABLE = 'usersxroles';
exports.API_CHUNKS_TABLE = 'chunks';
exports.API_USERSXCHUNKS_TABLE = 'usersxchunks';
exports.API_TRANSLATIONS_TABLE = 'translations';
exports.API_DATABASE_PREFIX = 'tenant_';
exports.OP_EQUALS = 'equals';
exports.CORE = 'core';


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var InertiaCore_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InertiaCore = void 0;
const common_1 = __webpack_require__(4);
const config_1 = __webpack_require__(14);
const objectAuthorization_entity_1 = __webpack_require__(15);
let InertiaCore = InertiaCore_1 = class InertiaCore {
    constructor(configService) {
        this.configService = configService;
        InertiaCore_1.DATABASE_NAME = this.configService.get('DATABASE_NAME');
        InertiaCore_1.DATABASE_USERNAME = this.configService.get('DATABASE_USERNAME');
        InertiaCore_1.DATABASE_PASSWORD = this.configService.get('DATABASE_PASSWORD');
        InertiaCore_1.DATABASE_PORT = this.configService.get('DATABASE_PORT');
        InertiaCore_1.DATABASE_HOST = this.configService.get('DATABASE_HOST');
        InertiaCore_1.CORE = this.configService.get('CORE');
    }
    static getPropertyQuery(property) {
        const required = property.required ? 'NOT NULL' : 'NULL';
        switch (property.type) {
            case 'id':
                {
                    return `id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT`;
                }
                break;
            case 'int':
                {
                    return ` ${property.str} int(11) ${required}`;
                }
                break;
            case 'float':
                {
                    return ` ${property.str} double ${required}`;
                }
                break;
            case 'boolean':
                {
                    return ` ${property.str} tinyint(1) ${required}`;
                }
                break;
            case 'date':
                {
                    return ` ${property.str} timestamp ${required} ${property.required ? ' DEFAULT CURRENT_TIMESTAMP ' : ''}`;
                }
                break;
            case 'datetime':
                {
                    return ` ${property.str} timestamp ${required} ${property.required ? ' DEFAULT CURRENT_TIMESTAMP ' : ''}`;
                }
                break;
            case 'guid':
                {
                    return ` ${property.str} varchar(64) NOT NULL`;
                }
                break;
            case 'extrasmalltext':
                {
                    return ` ${property.str} varchar(${property.length || 32}) ${required}`;
                }
                break;
            case 'smalltext':
                {
                    return ` ${property.str} varchar(${property.length || 128}) ${required}`;
                }
                break;
            case 'text':
                {
                    return ` ${property.str} varchar(${property.length || 512}) ${required}`;
                }
                break;
            case 'largetext':
                {
                    return ` ${property.str} varchar(${property.length || 1024}) ${required}`;
                }
                break;
            case 'mediumtext':
                {
                    return ` ${property.str} mediumtext ${required}`;
                }
                break;
            case 'longtext':
                {
                    return ` ${property.str} longtext ${required}`;
                }
                break;
            case '1n-':
                {
                    return ` ${property.str}_id bigint(20) UNSIGNED ${required}`;
                }
                break;
            case '1n1':
                {
                    return ` ${property.str}_id bigint(20) UNSIGNED ${required}`;
                }
                break;
            case '1n+':
                {
                    return null;
                }
                break;
            default:
                {
                    return ` ${property.str} varchar(255) ${required}`;
                }
                break;
        }
    }
    static keyWord(keyword) {
        return keyword.replace(/ /g, '').replace(/-/g, '_').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase();
    }
    static getUserPermissions(user, authorizations = {}, objectName) {
        let permissions = new objectAuthorization_entity_1.ObjectAuthorization({
            create: null,
            update: null,
            delete: null,
            read: null,
            share: null,
            transfer: null,
            clientapp: null
        });
        const accessRequired = new objectAuthorization_entity_1.ObjectAuthorization(authorizations[objectName]);
        const mainRole = user.roles.find(x => x.roles === objectName);
        if (mainRole) {
            for (const k in permissions) {
                permissions[k] = !(accessRequired[k] > 0 && mainRole[`_${k}`] < accessRequired[k]);
            }
        }
        else {
            for (const k in permissions) {
                if (accessRequired[k] > 0) {
                    for (const role of user.roles) {
                        if (role['_' + k] > accessRequired[k]) {
                            permissions[k] = true;
                            break;
                        }
                    }
                }
                else {
                    permissions[k] = true;
                }
            }
        }
        return permissions;
    }
};
InertiaCore = InertiaCore_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], InertiaCore);
exports.InertiaCore = InertiaCore;


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectAuthorization = void 0;
class ObjectAuthorization {
    constructor(params = null) {
        this.create = 0;
        this.update = 0;
        this.delete = 0;
        this.read = 0;
        this.share = 0;
        this.transfer = 0;
        this.clientapp = 0;
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.ObjectAuthorization = ObjectAuthorization;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SqlHelper = exports.QueryRes = void 0;
class QueryRes {
}
exports.QueryRes = QueryRes;
class SqlHelper {
    static async getUserMap(connection, userId = null, map = []) {
        try {
            let queryRes = new QueryRes();
            await this.run(connection.db, `SELECT * FROM public_users WHERE owner=${userId} ${map.length ? 'AND id NOT IN(' + map.join(',') + ')' : ''}`, queryRes);
            const users = queryRes.response;
            for (const user of users) {
                if (user.id && !map.includes(user.id)) {
                    map.push(user.id);
                    await this.getUserMap(connection, user.id, map);
                }
            }
        }
        catch (ex) {
        }
        return map;
    }
    static async setTenantSystemKey(connection) {
        try {
            await this.run(connection.db, `DELETE FROM private_parameters WHERE paramKey='systemKey'`);
            await this.run(connection.db, `INSERT INTO private_parameters(paramKey, paramValue, rule) VALUES('systemKey', '${connection.systemKey}', 'readonly')`);
        }
        catch (ex) {
            console.log(ex);
        }
    }
    static async isTenantGroupSegmentationEnabled(connection) {
        let param = [];
        try {
            let queryRes = new QueryRes();
            await this.run(connection.db, `SELECT * FROM private_parameters WHERE paramKey='allowGroupSegmentation'`, queryRes);
            param = queryRes.response;
            if (`${param[0].paramValue}` === 'true') {
                return true;
            }
        }
        catch (ex) {
            console.log(ex);
        }
        return false;
    }
    static async getTenantSessionDurationKey(connection) {
        let roles = [];
        try {
            let queryRes = new QueryRes();
            await this.run(connection.db, `SELECT * FROM private_parameters WHERE paramKey='sessionDuration'`, queryRes);
            roles = queryRes.response;
        }
        catch (ex) {
            console.log(ex);
        }
        return roles;
    }
    static async run(con, sql, output = {}) {
        return new Promise((resolve, reject) => {
            con.query(sql, [], (err, response) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                resolve(response);
            });
        }).then(response => {
            output.response = response;
            return response;
        }).catch(err => {
            throw err;
        });
    }
}
exports.SqlHelper = SqlHelper;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultResponse = void 0;
class DefaultResponse {
    constructor(params = null) {
        this.object = null;
        this.trace = undefined;
        this.status = false;
        if (params) {
            for (const k in params) {
                this[k] = params[k];
            }
        }
    }
    ok(message = 'ok') {
        if (!this.object) {
            this.object = { data: true };
        }
        this.message = message;
        this.status = true;
        return this;
    }
    error(message = 'ko') {
        if (message instanceof DefaultResponse) {
            this.object = message.object;
            this.message = message.message;
        }
        else {
            if (!this.object) {
                this.object = { data: null };
            }
            this.message = message;
        }
        this.status = false;
        return this;
    }
    exception(_method, _class, message = 'error') {
        if (!this.trace) {
            this.trace = [];
        }
        this.trace.push(`${_class.name}.${_method.name}`);
        this.message = message instanceof Object ? message.message : message;
        this.status = false;
        return this;
    }
}
exports.DefaultResponse = DefaultResponse;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectContent = void 0;
const objectProperty_entity_1 = __webpack_require__(19);
const utils_entity_1 = __webpack_require__(20);
class ObjectContent {
    constructor(obj = null) {
        this.str = '';
        this.guid = '';
        this.createdOn = new Date();
        this.updatedOn = new Date();
        this.creator = 0;
        this.updatedBy = 0;
        this.label = '';
        this.pluralLabel = '';
        this.description = '';
        this.morphology = '';
        this.visibility = '()';
        this.writable = true;
        this.readable = true;
        this.transferable = false;
        this.cacheable = false;
        this.concurrency = false;
        this.clientapp = false;
        this.properties = [];
        if (obj) {
            if (obj.properties) {
                for (const k in obj.properties) {
                    obj.properties[k] = new objectProperty_entity_1.ObjectProperty(obj.properties[k]);
                }
            }
            for (const k in obj) {
                if (obj[k] !== undefined && this[k] !== undefined) {
                    this[k] = obj[k];
                }
            }
        }
    }
    get privateVars() {
        return ['str', 'guid', 'createdOn', 'updatedOn', 'creator', 'updatedBy', 'type'];
    }
    includes(obj) {
        if (!Object.keys(obj).length) {
            return true;
        }
        for (const k in obj) {
            if (['properties'].includes(k)) {
                continue;
            }
            if (this[k] !== undefined) {
                if (typeof this[k] === 'string') {
                    return this[k].includes(obj[k]);
                }
                else if (this[k] === obj[k]) {
                    return true;
                }
            }
        }
        return false;
    }
    merge(obj, log = []) {
        let hasChanges = false;
        for (const k in obj) {
            if (this.privateVars.includes(k)) {
                this[k] = obj[k];
                continue;
            }
            else if (['properties'].includes(k)) {
                for (const propertyName in obj.properties) {
                    if (this.properties[propertyName]) {
                        this.properties[propertyName] = new objectProperty_entity_1.ObjectProperty(this.properties[propertyName]);
                        obj[propertyName] = new objectProperty_entity_1.ObjectProperty(obj[propertyName]);
                        for (const propertyK in this.properties[propertyName]) {
                            if (this.privateVars.includes(propertyK)) {
                                this.properties[propertyName][propertyK] = obj.properties[propertyName][propertyK];
                                continue;
                            }
                            else if (this.properties[propertyName][propertyK] !== obj.properties[propertyName][propertyK]) {
                                log.push({ action: 'update', property: this.properties[propertyName] });
                                hasChanges = true;
                            }
                        }
                    }
                    else {
                        if (!['1n+'].includes(obj.properties[propertyName].type)) {
                            log.push({ action: 'delete', property: obj.properties[propertyName] });
                            hasChanges = true;
                        }
                    }
                }
                for (const propertyName in this.properties) {
                    if (!obj.properties[propertyName]) {
                        this.properties[propertyName].guid = utils_entity_1.Utils.makeguid();
                        log.push({ action: 'create', property: this.properties[propertyName] });
                        hasChanges = true;
                    }
                }
                continue;
            }
            if (this[k] instanceof Object && JSON.stringify(this[k]) !== JSON.stringify(obj[k])) {
                hasChanges = true;
            }
            else if (this[k] !== obj[k]) {
                hasChanges = true;
            }
        }
        return { hasChanges, log };
    }
}
exports.ObjectContent = ObjectContent;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectProperty = void 0;
class ObjectProperty {
    constructor(obj) {
        this.str = '';
        this.type = '';
        this.guid = '';
        this.defaultValue = '';
        this.description = '';
        this.encrypt = '';
        this.helptext = '';
        this.label = '';
        this.pluralLabel = '';
        this.placeholder = '';
        this.expression = '';
        this.mask = '';
        this.length = 0;
        this.writable = true;
        this.readable = true;
        this.required = false;
        this.unique = false;
        this.meta = null;
        if (obj) {
            for (const k in obj) {
                if (obj[k] !== undefined && this[k] !== undefined) {
                    this[k] = obj[k];
                }
            }
        }
    }
}
exports.ObjectProperty = ObjectProperty;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = void 0;
const fs = __webpack_require__(21);
const path = __webpack_require__(22);
const bcrypt = __webpack_require__(23);
class Utils {
    static makeguid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    static thread(f, t = 50) {
        return setTimeout(f, t);
    }
    static dateFormat(date) {
        const res = {
            date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
            time: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        };
        res.full = `${res.date} ${res.time}`;
        return res;
    }
    static clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    static hash(obj) {
        const keys = Object.keys(obj).sort();
        let str = '';
        for (const k of keys) {
            if ((k[0] === '$' && k !== '$guid') ||
                !obj[k] ||
                obj[k] instanceof Object) {
                continue;
            }
            let key = k.split('.').pop();
            if (str.length) {
                str += ',';
            }
            str += `${key}=${obj[k]}`;
        }
        for (var i = 0, h = 9; i < str.length;)
            h = Math.imul(h ^ str.charCodeAt(i++), 9 ** 9);
        return '' + (h ^ h >>> 9);
    }
    static cryptPassword(password) {
        return bcrypt.genSalt(10)
            .then((salt => bcrypt.hash(password, salt)))
            .then(hash => hash);
    }
    static passwordCompare(password, hashPassword) {
        return bcrypt.compare(password, hashPassword)
            .then(resp => resp);
    }
    static createDirectory(pathname) {
        const __dirname = path.resolve();
        pathname = pathname.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, '');
        fs.mkdirSync(path.resolve(__dirname, pathname), { recursive: true });
    }
    static renameDirectory(newName, oldName) {
        const __dirname = path.resolve();
        newName = newName.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, '');
        oldName = oldName.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, '');
        fs.rename(path.resolve(__dirname, oldName), path.resolve(__dirname, newName), function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(`Directory ${oldName} renamed as ${newName}`);
            }
        });
    }
    static deleteDirectory(pathname) {
        const __dirname = path.resolve();
        pathname = pathname.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, '');
        fs.readdirSync(path.resolve(__dirname, pathname)).forEach(function (file, index) {
            const curPath = path.resolve(__dirname, pathname) + '/' + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                Utils.deleteDirectory(curPath);
            }
            else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path.resolve(__dirname, pathname));
    }
    static createFile(fileName, fileContent, options = { overwrite: true }) {
        const __dirname = path.resolve();
        fs.writeFileSync(__dirname + fileName, fileContent, options);
    }
    static deleteFile(fileName) {
        const __dirname = path.resolve();
        fs.unlinkSync(__dirname + fileName);
    }
}
exports.Utils = Utils;


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pagination = void 0;
class Pagination {
    constructor(params = null) {
        this.page = 1;
        this.pageSize = 10;
        this.lastPage = 0;
        this.count = 0;
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
    paginate(data) {
        return data.slice((this.page - 1) * this.pageSize, ((this.page - 1) * this.pageSize) + this.pageSize);
    }
    get(data, size = 2) {
        const arrayPages = [];
        this.count = data.length;
        this.lastPage = Math.ceil(this.count / this.pageSize);
        if (!this.lastPage) {
            return null;
        }
        const actual = this.page;
        for (let i = 1; i <= this.lastPage; i++) {
            let v = i - actual;
            if (v < 0) {
                v *= -1;
            }
            if (v <= size) {
                arrayPages.push(i);
            }
        }
        return {
            page: this.page,
            pageSize: this.pageSize,
            lastPage: this.lastPage,
            count: this.count,
            arrayPages
        };
    }
}
exports.Pagination = Pagination;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetadataService = void 0;
const fs = __webpack_require__(21);
const crud_service_1 = __webpack_require__(26);
const graph_service_1 = __webpack_require__(28);
const shared_1 = __webpack_require__(9);
class MetadataService {
    constructor(connection) {
        this.connection = connection;
    }
    getObjectsContent({ system } = { system: false }) {
        try {
            let data;
            if (system) {
                data = fs.readFileSync('tenants/_system/objects.json', 'utf8');
            }
            else {
                data = fs.readFileSync(`tenants/${this.connection.tenant}/content.json`, 'utf8');
            }
            data = JSON.parse(data);
            return new shared_1.DefaultResponse({ object: { data } }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.getObjectsContent, MetadataService, ex);
        }
    }
    getSchema(tenantName) {
        try {
            let data = null;
            if (fs.existsSync(`tenants/${tenantName}/schema.json`) &&
                fs.existsSync(`tenants/${tenantName}/structure.json`)) {
                const schema = JSON.parse(fs.readFileSync(`tenants/${tenantName}/schema.json`, 'utf8'));
                const structure = JSON.parse(fs.readFileSync(`tenants/${tenantName}/structure.json`, 'utf8'));
                data = { schema, structure };
            }
            return new shared_1.DefaultResponse({ object: { data } }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.getSchema, MetadataService, ex);
        }
    }
    getAuthorizations({ system } = { system: false }) {
        try {
            let data;
            if (system) {
                data = fs.readFileSync('tenants/_system/authorizations.json', 'utf8');
            }
            else {
                data = fs.readFileSync(`tenants/${this.connection.tenant}/authorizations.json`, 'utf8');
            }
            data = JSON.parse(data);
            return new shared_1.DefaultResponse({ object: { data } }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.getAuthorizations, MetadataService, ex);
        }
    }
    saveAuthorizations(data) {
        try {
            shared_1.Utils.createFile(`/tenants/${this.connection.tenant}/authorizations.json`, JSON.stringify(data));
            return new shared_1.DefaultResponse({ object: { data: true } }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.getAuthorizations, MetadataService, ex);
        }
    }
    getAction(type, name) {
        try {
            const data = fs.readFileSync(`tenants/${this.connection.tenant}/plugins/${type}/${name}.action`, 'utf8');
            return new shared_1.DefaultResponse({ object: { data } }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.getActions, MetadataService, ex);
        }
    }
    getActions() {
        try {
            const data = JSON.parse(fs.readFileSync(`tenants/${this.connection.tenant}/actions.json`, 'utf8') || '{}');
            return new shared_1.DefaultResponse({ object: { data } }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.getActions, MetadataService, ex);
        }
    }
    saveActions(data, type, name, js) {
        try {
            shared_1.Utils.createFile(`/tenants/${this.connection.tenant}/actions.json`, JSON.stringify(data));
            if (type) {
                if (!fs.existsSync(`/tenants/${this.connection.tenant}/plugins`)) {
                    shared_1.Utils.createDirectory(`/tenants/${this.connection.tenant}/plugins`);
                }
                if (!fs.existsSync(`/tenants/${this.connection.tenant}/plugins/${type}`)) {
                    shared_1.Utils.createDirectory(`/tenants/${this.connection.tenant}/plugins/${type}`);
                }
                shared_1.Utils.createFile(`/tenants/${this.connection.tenant}/plugins/${type}/${name}.action`, js);
            }
            return new shared_1.DefaultResponse({ object: { data: true } }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.getActions, MetadataService, ex);
        }
    }
    deleteAction(type, name) {
        try {
            shared_1.Utils.deleteFile(`/tenants/${this.connection.tenant}/plugins/${type}/${name}.action`);
            return new shared_1.DefaultResponse({ object: { data: true } }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.getActions, MetadataService, ex);
        }
    }
    async runAction({ action, target, name, data }) {
        return new shared_1.DefaultResponse;
    }
    async objectGraph(params) {
        try {
            const _service = new graph_service_1.GraphService();
            const result = await _service.execute(this.connection.payload, params, this.connection);
            return result;
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.objectGraph, MetadataService, ex);
        }
    }
    async objectCrud(params) {
        try {
            const _service = new crud_service_1.CrudService();
            const result = await _service.execute(this.connection.payload, params, this.connection);
            return result;
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.objectCrud, MetadataService, ex);
        }
    }
}
exports.MetadataService = MetadataService;


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CrudService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrudService = void 0;
const common_1 = __webpack_require__(4);
const crud_entity_1 = __webpack_require__(27);
const shared_1 = __webpack_require__(9);
let CrudService = CrudService_1 = class CrudService {
    constructor() {
    }
    async execute(payload = null, params, _connection = null) {
        var _a;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startPublic(payload);
        try {
            const _metadataService = new shared_1.MetadataService(connection);
            const metadata = new crud_entity_1.CrudMetadata();
            metadata.systemObjectsContent = await _metadataService.getObjectsContent({ system: true }).object.data;
            metadata.systemAuthorizations = await _metadataService.getAuthorizations({ system: true }).object.data;
            params.prefix = this.prefix(params, metadata);
            if (params.prefix() === 'private_') {
                metadata.objectsContent = metadata.systemObjectsContent;
                metadata.authorizations = metadata.systemAuthorizations;
            }
            else {
                metadata.objectsContent = await _metadataService.getObjectsContent().object.data;
                metadata.authorizations = await _metadataService.getAuthorizations().object.data;
            }
            metadata.actions = await ((_a = _metadataService.getActions().object) === null || _a === void 0 ? void 0 : _a.data);
            return await new crud_entity_1.CrudProcess(connection, params, metadata).execute();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.execute, CrudService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
    }
    prefix(params, metadata) {
        switch (params.moduleExtension) {
            case 'private':
                {
                    return (_) => 'private_';
                }
                break;
            case 'public':
                {
                    return (_) => 'public_';
                }
                break;
            case 'auto':
                {
                    return ((objectName) => {
                        if (metadata.objectsContent[objectName]) {
                            return 'public_';
                        }
                        else if (metadata.systemObjectsContent[objectName]) {
                            return 'private_';
                        }
                        return '';
                    }).bind(this);
                }
                break;
            case global.config.core:
                {
                    return (_) => '';
                }
                break;
        }
    }
};
CrudService = CrudService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CrudService);
exports.CrudService = CrudService;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrudProcess = exports.CrudResponse = exports.CrudParameters = exports.CrudMetadata = exports.CrudData = void 0;
const shared_1 = __webpack_require__(9);
class CrudData {
    constructor() {
        this.dictionaries = {};
        this.matrix11 = {};
        this.recursiveMatrix = [];
        this.requiredObjects = [];
    }
}
exports.CrudData = CrudData;
class CrudMetadata {
    constructor() {
        this.actions = {};
        this.authorizations = {};
        this.objectsContent = {};
        this.schema = {};
        this.systemSchema = {};
        this.systemObjectsContent = {};
        this.systemAuthorizations = {};
    }
}
exports.CrudMetadata = CrudMetadata;
class CrudParameters {
    constructor(params) {
        this.schema = {};
        this.returnQuery = false;
        this.isSingleElement = false;
        this.context = [];
        for (const k in params) {
            if (params[k] !== undefined) {
                this[k] = params[k];
            }
        }
        this.buildContext();
    }
    buildContext() {
        if (!Array.isArray(this.schema)) {
            this.schema = [this.schema];
            this.isSingleElement = true;
        }
        this.context = [];
        for (let i = 0; i < this.schema.length; i++) {
            const item = {};
            item[this.root] = this.schema[i];
            this.context.push(item);
        }
    }
}
exports.CrudParameters = CrudParameters;
class CrudResponse {
}
exports.CrudResponse = CrudResponse;
class CrudProcess {
    constructor(connection, params, metadata) {
        this.connection = connection;
        this.params = params;
        this.metadata = metadata;
        this.data = new CrudData();
    }
    async execute() {
        try {
            const response = [];
            for (let item of this.params.context) {
                item = await this.executeBeforeCrudActions(item);
                this.data = new CrudData();
                this.recursiveMatrixCreation(item);
                this.createDictionaries();
                const queries = this.getQueries();
                this.checkAuthorizations(queries);
                let sql = [];
                this.sqlDeleteTree(sql, queries.deleteTree);
                this.sqlDelete(sql, queries.delete);
                await this.sqlUpdate(sql, queries.update);
                await this.sqlInsert(sql, queries.insert);
                if (sql.length) {
                    const obj = new CrudResponse();
                    if (this.params.returnQuery === true) {
                        obj.sql = sql;
                    }
                    if (await this.makeQuery(sql)) {
                        obj.data = this.data.recursiveMatrix.find(x => Object.keys(x)[0] === this.params.root) || this.data.recursiveMatrix[0];
                        obj.data = await this.executeAfterCrudActions(obj.data);
                        response.push(new shared_1.DefaultResponse({ object: { data: obj.data } }).ok());
                    }
                    else {
                        response.push(new shared_1.DefaultResponse().error('Could not execute query'));
                    }
                }
                else {
                    response.push(new shared_1.DefaultResponse({ object: { data: true } }).ok('No changes'));
                }
            }
            if (response.length) {
                if (this.params.isSingleElement) {
                    return response[0];
                }
                return response;
            }
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.execute, CrudProcess, ex);
        }
        return null;
    }
    recursiveMatrixCreation(data, skip = false, postProcess = []) {
        var _a;
        const record = {};
        const objectName = Object.keys(data)[0];
        if (data[objectName].$guid && data[objectName].$hash) {
            record.$guid = data[objectName].$guid;
        }
        else {
            record.$guid = shared_1.Utils.makeguid();
        }
        for (const k in data[objectName]) {
            if (record[k]) {
                continue;
            }
            let v = data[objectName][k] || '';
            if (typeof v === 'object' && !Array.isArray(v) && !(v instanceof Date)) {
                v[objectName] = record.$guid;
                if (((_a = this.getObjectByName(k).properties[objectName]) === null || _a === void 0 ? void 0 : _a.type) === '1n1') {
                    v[`$${objectName}`] = '1n1';
                }
                else {
                    v['$' + objectName] = '1n-';
                }
                v[objectName] = record.$guid;
                const item = {};
                item[k] = v;
                const rel = this.recursiveMatrixCreation(item, true, postProcess);
                record[k] = rel.$guid;
                record['$' + k] = '1n-';
                postProcess.splice(0, 0, (() => {
                    const _item = {};
                    _item[k] = rel;
                    this.data.recursiveMatrix.push(_item);
                }).bind(this));
            }
            else if (Array.isArray(v) && k[0] !== '$') {
                for (const child of v) {
                    child[objectName] = record.$guid;
                    child['$' + objectName] = '1n-';
                    const item = {};
                    item[k] = child;
                    const rel = this.recursiveMatrixCreation(item);
                    if (!record[k]) {
                        record[k] = [];
                    }
                    record[k].push(rel.$guid);
                    record['$' + k] = '1n+';
                }
            }
            else if (k === '$translations') {
                record['*translations*'] = v;
            }
            else {
                record[k] = v;
            }
        }
        if (!skip) {
            const item = {};
            item[objectName] = record;
            this.data.recursiveMatrix.push(item);
            for (const f of postProcess) {
                f();
            }
            postProcess = [];
        }
        return record;
    }
    createDictionaries() {
        for (const item of this.data.recursiveMatrix) {
            const objectName = Object.keys(item)[0];
            if (!this.data.requiredObjects.includes(objectName)) {
                this.data.requiredObjects.splice(0, 0, objectName);
            }
            if (!this.data.dictionaries[objectName]) {
                this.data.dictionaries[objectName] = [];
            }
            this.data.dictionaries[objectName].push({
                objectName,
                content: item[objectName]
            });
        }
    }
    getQueries() {
        const queries = {
            update: [],
            insert: [],
            delete: [],
            deleteTree: []
        };
        try {
            for (const objectName in this.data.dictionaries) {
                for (const record of this.data.dictionaries[objectName]) {
                    const item = {
                        objectName,
                        content: record.content
                    };
                    if (item.content.$hash) {
                        if (item.content.$hash === 'readonly' || item.content.$rule === 'readonly') {
                            continue;
                        }
                        else {
                            if (item.content.$remove) {
                                queries.delete.push(item);
                            }
                            else if (item.content.$unlink) {
                                for (const k in item.content) {
                                    if (k[0] === '$' && ['1n-', '1n1'].includes(item.content[k])) {
                                        const parent = k.substr(1);
                                        item.content[parent] = 0;
                                        item.content[k] = 0;
                                    }
                                }
                                item.content = record.content;
                                queries.update.push(item);
                            }
                            else {
                                const shortRecord = shared_1.Utils.clone(item.content);
                                for (const k in shortRecord) {
                                    if (this.getObjectByName(k) || ['$', '*'].includes(k[0])) {
                                        delete shortRecord[k];
                                    }
                                }
                                const itemHash = shared_1.Utils.hash(shortRecord);
                                if (itemHash !== item.content.$hash) {
                                    queries.update.push(item);
                                }
                            }
                        }
                    }
                    else {
                        if (item.content.$removeAll) {
                            let parent = null;
                            for (const k in item.content) {
                                const v = item.content[k];
                                if (k[0] === '$' && ['1n-', '1n1'].includes(v) && item.content[k.substr(1)]) {
                                    parent = {
                                        objectName: k.substr(1),
                                        guid: item.content[k.substr(1)]
                                    };
                                    break;
                                }
                            }
                            if (parent) {
                                item.parent = parent;
                                queries.deleteTree.push(item);
                            }
                        }
                        else {
                            queries.insert.push(item);
                        }
                    }
                }
            }
        }
        catch (ex) {
            console.log(ex);
        }
        return queries;
    }
    checkAuthorizations(queries) {
        if (this.connection.userData.$system) {
            return true;
        }
        for (let i = 0; i < queries.insert.length; i++) {
            if (this.metadata.systemObjectsContent[queries.insert[i].objectName] && !this.connection.userData.$system) {
                queries.splice(i--, 1);
                continue;
            }
            const permissions = shared_1.InertiaCore.getUserPermissions(this.connection.payload.user, this.metadata.authorizations, queries.insert[i].objectName);
            if (!permissions.create) {
                throw `Access denied to create ${queries.insert[i].objectName}`;
            }
        }
        for (let i = 0; i < queries.update.length; i++) {
            if (this.metadata.systemObjectsContent[queries.update[i].objectName] && !this.connection.userData.$system) {
                queries.splice(i--, 1);
                continue;
            }
            const permissions = shared_1.InertiaCore.getUserPermissions(this.connection.payload.user, this.metadata.authorizations, queries.update[i].objectName);
            if (!permissions.update) {
                throw `Access denied to update ${queries.update[i].objectName}`;
            }
            else if (queries.update[i].content['$:owner'] && !permissions.transfer) {
                throw `Access denied to transfer ${queries.update[i].objectName}`;
            }
        }
        for (let i = 0; i < queries.delete.length; i++) {
            if (this.metadata.systemObjectsContent[queries.delete[i].objectName] && !this.connection.userData.$system) {
                queries.splice(i--, 1);
                continue;
            }
            const permissions = shared_1.InertiaCore.getUserPermissions(this.connection.payload.user, this.metadata.authorizations, queries.delete[i].objectName);
            if (!permissions.delete) {
                throw `Access denied to delete ${queries.delete[i].objectName}`;
            }
        }
        return true;
    }
    async sqlInsert(sql, queries) {
        var _a, _b, _c;
        const formattedDate = shared_1.Utils.dateFormat(new Date()).full;
        let extraQuery = [];
        for (const objectName of this.data.requiredObjects) {
            const object = this.getObjectByName(objectName);
            if (!object) {
                continue;
            }
            for (const item of queries) {
                if (item.objectName === objectName) {
                    const record = item.content;
                    let keys = '';
                    let values = '';
                    const properties = object.properties;
                    for (const k in properties) {
                        if (this.metadata.systemObjectsContent.system.properties[k] || (k[0] === '$' && this.metadata.systemObjectsContent.system.properties[k.substr(1)])) {
                            continue;
                        }
                        let propertyName = k;
                        if (propertyName === 'guid') {
                            values += `'${record.$guid}'`;
                        }
                        else if (propertyName === 'id' || properties[propertyName].type === '1n+' || record[propertyName] === undefined) {
                            continue;
                        }
                        else if (['1n-', '1n1'].includes(properties[propertyName].type)) {
                            values += `(SELECT id FROM ${this.params.prefix(propertyName) + propertyName} WHERE guid='${record[propertyName]}'),`;
                            if (!this.data.matrix11[`${objectName}.${propertyName}`]) {
                                this.data.matrix11[`${objectName}.${propertyName}`] = record.$guid;
                            }
                            if (this.data.matrix11[`${propertyName}.${objectName}`]) {
                                extraQuery.push(`UPDATE ${this.params.prefix(propertyName) + propertyName} SET ${objectName}_id=(SELECT id FROM ${this.params.prefix(objectName) + objectName} WHERE guid='${record.$guid}') WHERE guid='${this.data.matrix11[`${propertyName}.${objectName}`]}';`);
                                delete this.data.matrix11[`${propertyName}.${objectName}`];
                            }
                            propertyName = `${propertyName}_id`;
                        }
                        else if (properties[propertyName].type === 'boolean') {
                            values += record[propertyName] ? '1,' : '0,';
                        }
                        else if (properties[propertyName].type === 'date') {
                            values += record[propertyName] ? `'${record[propertyName]}',` : 'NULL,';
                        }
                        else if (['float', 'int'].includes(properties[propertyName].type)) {
                            values += record[propertyName] ? `${record[propertyName]},` : '0,';
                        }
                        else if (properties[propertyName].type === 'password') {
                            values += `'${await shared_1.Utils.cryptPassword(record[propertyName])}',`;
                            delete record[propertyName];
                        }
                        else {
                            values += `'${((_a = record[propertyName]) === null || _a === void 0 ? void 0 : _a.replace(/\'/g, '\'\'')) || ''}',`;
                        }
                        keys += `${propertyName},`;
                    }
                    if (keys.length) {
                        let owner = this.connection.userData.$id;
                        if (record['$:owner']) {
                            owner = record['$:owner'];
                        }
                        keys += Object.keys(this.metadata.systemObjectsContent.system.properties).filter(x => !['id'].includes(x)).join(',');
                        values += `'${record.$guid}','', '${formattedDate}', NULL, ${this.connection.userData.$id}, ${this.connection.userData.$id}, NULL, ${this.connection.userData.$groupEnabled ? this.connection.userData.$group : 'NULL'}, NULL, false`;
                        sql.push(`INSERT INTO ${this.params.prefix(objectName) + objectName} (${keys}) VALUES (${values});`);
                    }
                    if ((_b = record['*translations*']) === null || _b === void 0 ? void 0 : _b.length) {
                        for (const locale of record['*translations*']) {
                            const propertyGuid = (_c = properties[locale.propertyName]) === null || _c === void 0 ? void 0 : _c.guid;
                            const objectGuid = object.guid;
                            if (propertyGuid && objectGuid && locale.locale && record.$guid) {
                                sql.push(`INSERT INTO ${this.params.prefix('translations') === 'public_' ? 'private_' : this.params.prefix('translations')}translations(objectGuid, recordGuid, propertyGuid, locale, value) VALUES('${objectGuid}', '${record.$guid}', '${propertyGuid}', '${locale.locale}', '${locale.value}')`);
                            }
                        }
                    }
                }
            }
        }
        for (const query of extraQuery) {
            sql.push(query);
        }
    }
    async sqlUpdate(sql, queries) {
        var _a, _b;
        const formattedDate = shared_1.Utils.dateFormat(new Date()).full;
        let extraQuery = [];
        for (const objectName of this.data.requiredObjects) {
            const object = this.getObjectByName(objectName);
            if (!object) {
                continue;
            }
            for (const item of queries) {
                if (item.objectName === objectName) {
                    const record = item.content;
                    if (!record.$guid) {
                        continue;
                    }
                    let values = '';
                    const properties = object.properties;
                    for (const k in properties) {
                        if (this.metadata.systemObjectsContent.system.properties[k] || (k[0] === '$' && this.metadata.systemObjectsContent.system.properties[k.substr(1)])) {
                            continue;
                        }
                        let propertyName = k;
                        if (propertyName === 'guid' || propertyName === 'id' || properties[propertyName].type === '1n+' || record[propertyName] === undefined) {
                            continue;
                        }
                        else if (['1n-', '1n1'].includes(properties[propertyName].type)) {
                            values += `${propertyName}_id=(SELECT id FROM ${this.params.prefix(propertyName) + propertyName} WHERE guid='${record[propertyName]}'),`;
                            if (!this.data.matrix11[`${objectName}.${propertyName}`]) {
                                this.data.matrix11[`${objectName}.${propertyName}`] = record.$guid;
                            }
                            if (this.data.matrix11[`${propertyName}.${objectName}`]) {
                                extraQuery.push(`UPDATE ${this.params.prefix(propertyName) + propertyName} SET ${objectName}_id=(SELECT id FROM ${this.params.prefix(objectName) + objectName} WHERE guid='${record.$guid}') WHERE guid='${this.data.matrix11[`${propertyName}.${objectName}`]}';`);
                                delete this.data.matrix11[`${propertyName}.${objectName}`];
                            }
                        }
                        else if (properties[propertyName].type === 'boolean') {
                            values += `${propertyName}=${record[propertyName] ? '1,' : '0,'}`;
                        }
                        else if (properties[propertyName].type === 'date') {
                            values += `${propertyName}=${record[propertyName] ? '\'' + record[propertyName] + '\',' : 'NULL,'}`;
                        }
                        else if (['float', 'int'].includes(properties[propertyName].type)) {
                            values += `${propertyName}=${record[propertyName] ? record[propertyName] + ',' : '0,'}`;
                        }
                        else if (properties[propertyName].type === 'password') {
                            values += `${propertyName}='${await shared_1.Utils.cryptPassword(record[propertyName])}',`;
                        }
                        else {
                            values += `${propertyName}='${record[propertyName]}',`;
                        }
                    }
                    if (values.length) {
                        values = `${values.substr(0, values.length - 1)},updatedOn='${formattedDate}',updatedBy=${this.connection.userData.$id}`;
                        sql.push(`UPDATE ${this.params.prefix(objectName) + objectName} SET ${values} WHERE guid='${record.$guid}';`);
                    }
                    if ((_a = record['*translations*']) === null || _a === void 0 ? void 0 : _a.length) {
                        for (const locale of record['*translations*']) {
                            const propertyGuid = locale.propertyGuid || ((_b = properties[locale.propertyName]) === null || _b === void 0 ? void 0 : _b.guid);
                            const objectGuid = object.guid;
                            if (propertyGuid && objectGuid && locale.locale && record.$guid) {
                                if (locale.$id) {
                                    sql.push(`UPDATE ${this.params.prefix('translations') === 'public_' ? 'private_' : this.params.prefix('translations')}translations SET value = '${locale.value}' WHERE id='${locale.$id}'`);
                                }
                                else {
                                    sql.push(`INSERT INTO ${this.params.prefix('translations') === 'public_' ? 'private_' : this.params.prefix('translations')}translations(objectGuid, recordGuid, propertyGuid, locale, value) VALUES('${objectGuid}', '${record.$guid}', '${propertyGuid}', '${locale.locale}', '${locale.value}')`);
                                }
                            }
                        }
                    }
                }
            }
        }
        for (const query of extraQuery) {
            sql.push(query);
        }
    }
    sqlDelete(sql, queries) {
        for (const objectName of this.data.requiredObjects) {
            if (!this.getObjectByName(objectName)) {
                continue;
            }
            for (const item of queries) {
                if (item.objectName === objectName) {
                    const record = item.content;
                    if (!record.$guid) {
                        continue;
                    }
                    sql.push(`DELETE FROM ${this.params.prefix(objectName) + objectName} WHERE guid='${record.$guid}';`);
                }
            }
        }
    }
    sqlDeleteTree(sql, queries) {
        for (const objectName of this.data.requiredObjects) {
            if (!this.getObjectByName(objectName)) {
                continue;
            }
            for (const item of queries) {
                if (item.objectName === objectName) {
                    sql.push(`DELETE FROM ${this.params.prefix(objectName) + objectName} WHERE ${item.parent.objectName}_id = (SELECT id FROM ${this.params.prefix(item.parent.objectName) + item.parent.objectName} WHERE guid='${item.parent.guid}');`);
                }
            }
        }
    }
    async makeQuery(sql) {
        try {
            await this.connection.run('START TRANSACTION;');
            for (const query of sql) {
                await this.connection.run(query);
            }
            await this.connection.run('COMMIT;');
            return true;
        }
        catch (ex) {
            await this.connection.run('ROLLBACK;');
            throw new shared_1.DefaultResponse(ex).error((ex === null || ex === void 0 ? void 0 : ex.sqlMessage) || 'Could not execute query').exception(this.makeQuery, CrudProcess);
        }
    }
    async executeBeforeCrudActions(data) {
        let actions = this.metadata.actions.beforeCrud;
        if (actions) {
            actions = Object.values(actions).filter(x => x.status && x.name === this.params.root);
            for (const action of actions) {
            }
        }
        return data;
    }
    async executeAfterCrudActions(data) {
        let actions = this.metadata.actions.afterCrud;
        if (actions) {
            actions = Object.values(actions).filter(x => x.status && x.name === this.params.root);
            for (const action of actions) {
            }
        }
        return data;
    }
    getObjectByName(objectName) {
        return this.metadata.objectsContent[objectName] || this.metadata.systemObjectsContent[objectName];
    }
}
exports.CrudProcess = CrudProcess;


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GraphService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphService = void 0;
const common_1 = __webpack_require__(4);
const graph_entity_1 = __webpack_require__(29);
const shared_1 = __webpack_require__(9);
const connection_entity_1 = __webpack_require__(10);
let GraphService = GraphService_1 = class GraphService {
    async execute(payload = null, params, _connection = null) {
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new connection_entity_1.Connection().startPublic(payload);
        try {
            const metadata = new graph_entity_1.GraphMetadata();
            const metadataService = new shared_1.MetadataService(connection);
            metadata.objectsContent = await metadataService.getObjectsContent().object.data;
            metadata.authorizations = await metadataService.getAuthorizations().object.data;
            metadata.systemObjectsContent = await metadataService.getObjectsContent({ system: true }).object.data;
            metadata.systemAuthorizations = await metadataService.getAuthorizations({ system: true }).object.data;
            params.prefix = this.prefix(params, metadata);
            if (params.prefix() === 'private_') {
                metadata.objectsContent = metadata.systemObjectsContent;
                metadata.authorizations = metadata.systemAuthorizations;
            }
            return await new graph_entity_1.GraphProcess(params, metadata, connection).execute();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.execute, GraphService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
    }
    prefix(params, metadata) {
        switch (params.moduleExtension) {
            case 'private':
                {
                    return (_) => 'private_';
                }
                break;
            case 'public':
                {
                    return (_) => 'public_';
                }
                break;
            case 'auto':
                {
                    return ((objectName) => {
                        if (metadata.objectsContent[objectName]) {
                            return 'public_';
                        }
                        else if (metadata.systemObjectsContent[objectName]) {
                            return 'private_';
                        }
                        return '';
                    }).bind(this);
                }
                break;
            case global.config.core:
                {
                    return (_) => '';
                }
                break;
        }
    }
};
GraphService = GraphService_1 = __decorate([
    (0, common_1.Injectable)()
], GraphService);
exports.GraphService = GraphService;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphProcess = exports.GraphResponse = exports.GraphParameters = exports.GraphMetadata = exports.GraphData = void 0;
const shared_1 = __webpack_require__(9);
class GraphData {
    constructor() {
        this.dictionaries = {};
        this.recursiveMatrix = [];
        this.objects = [];
        this.subQueries = [];
        this.reminiscence = {};
    }
}
exports.GraphData = GraphData;
class GraphMetadata {
    constructor() {
        this.actions = {};
        this.systemProperties = [];
        this.authorizations = {};
        this.systemAuthorizations = {};
    }
}
exports.GraphMetadata = GraphMetadata;
class GraphParameters {
    constructor(params = null) {
        this.schema = {};
        this.returnQuery = false;
        this.includeParentId = true;
        this.includeSystemProperties = true;
        this.isSingleElement = false;
        this.context = [];
        this.pagination = {};
        this.locale = 'en';
        if (params) {
            if (!(params === null || params === void 0 ? void 0 : params.pagination)) {
                params.pagination = {};
            }
            if (!(params === null || params === void 0 ? void 0 : params.pagination.page)) {
                params.pagination.page = 1;
            }
            if (!(params === null || params === void 0 ? void 0 : params.pagination.pageSize)) {
                params.pagination.pageSize = 100;
            }
            if (!(params === null || params === void 0 ? void 0 : params.pagination.mode)) {
                params.pagination.mode = 'sql';
            }
            for (const k in params) {
                if (params[k] !== undefined) {
                    this[k] = params[k];
                }
            }
            this.buildContext();
        }
    }
    buildContext() {
        if (!Array.isArray(this.schema)) {
            this.schema = [this.schema];
            this.isSingleElement = true;
        }
        this.context = [];
        for (let i = 0; i < this.schema.length; i++) {
            const item = {};
            item[this.root] = this.schema[i];
            this.context.push(item);
        }
    }
}
exports.GraphParameters = GraphParameters;
class GraphResponse {
}
exports.GraphResponse = GraphResponse;
class GraphProcess {
    constructor(params, metadata, connection) {
        this.params = params;
        this.metadata = metadata;
        this.connection = connection;
        this.data = new GraphData();
        this.passwordAlias = {};
    }
    async execute() {
        try {
            const response = [];
            for (let graph of this.params.context) {
                this.data = new GraphData();
                this.recursiveMatrixCreation(graph);
                if (this.data.recursiveMatrix.length) {
                    this.data.recursiveMatrix.reverse();
                    this.createDictionaries();
                    const sql = await this.generateSqlQuery();
                    if (sql.length) {
                        const data = await this.makeQuery(sql);
                        const obj = new GraphResponse();
                        if (this.params.returnQuery === true) {
                            obj.sql = [sql];
                        }
                        if (data) {
                            obj.data = await this.compress(data);
                            obj.pagination = this.params.pagination;
                            if (this.params.isSingleElement && obj.data.length === 1) {
                                obj.data = obj.data[0];
                            }
                            response.push(new shared_1.DefaultResponse({ object: obj }).ok());
                        }
                        else {
                            response.push(new shared_1.DefaultResponse().error('Could not execute query'));
                        }
                    }
                }
            }
            if (response.length) {
                if (this.params.isSingleElement && response.length === 1) {
                    return response[0];
                }
                return response;
            }
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().error().exception(this.execute, GraphProcess, ex);
        }
        return null;
    }
    recursiveMatrixCreation(data, map = '') {
        var _a, _b;
        const record = {};
        const objectName = Object.keys(data)[0];
        const obj = this.getObjectByName(objectName);
        if (!obj) {
            return null;
        }
        if (data[objectName]['*guid*']) {
            record['*guid*'] = data[objectName]['*guid*'];
            record.$map = map + '.' + objectName;
        }
        else {
            record['*guid*'] = shared_1.Utils.makeguid();
            record.$map = objectName;
        }
        record.id = '';
        record.guid = '';
        record.owner = '';
        for (const k in this.metadata.systemObjectsContent['system'].properties) {
            if (data[objectName][`$${k}`]) {
                record[k] = data[objectName][`$${k}`];
                delete data[objectName][`$${k}`];
            }
            if (!this.params.includeSystemProperties && !['id', 'guid', 'owner', 'group'].includes(k)) {
                continue;
            }
            record[k] = [...(record[k] || []), { $alias: { k, v: `$${k}` } }];
        }
        if (!this.connection.isPrivate) {
            for (const k in this.metadata.systemObjectsContent['system'].properties) {
                if (!this.params.includeSystemProperties && !['id', 'guid', 'owner', 'group'].includes(k)) {
                    continue;
                }
                if (k === 'owner') {
                    if ((_a = this.params.password) === null || _a === void 0 ? void 0 : _a.length) {
                    }
                    else {
                        if (this.metadata.objectsContent[objectName] && this.connection.userData.$id) {
                            const visibility = this.metadata.objectsContent[objectName].visibility;
                            switch (visibility) {
                                case '0':
                                    {
                                        record.owner.push({ op: 'equals', val: this.connection.userData.$id, con: 'or' });
                                        record.owner.push({ op: 'equals', val: 'NULL', con: 'or' });
                                    }
                                    break;
                                case '<1>':
                                    {
                                        record.owner.push({ op: 'in', val: [...this.connection.userData.$map, this.connection.userData.$id].join(',') });
                                    }
                                    break;
                                case '1':
                                    {
                                    }
                                    break;
                                case '()':
                                    {
                                        record.owner.push({ op: 'equals', val: this.connection.userData.$id, con: 'or' });
                                        record.owner.push({ op: 'equals', val: 'NULL', con: 'or' });
                                        if (this.connection.userData.$groupEnabled && this.connection.userData.$group) {
                                            record.chunk.push({ op: 'equals', val: this.connection.userData.$group, con: 'or' });
                                        }
                                    }
                                    break;
                                default:
                                    {
                                        record.owner.push({ op: 'equals', val: this.connection.userData.$id, con: 'or' });
                                        record.owner.push({ op: 'equals', val: 'NULL', con: 'or' });
                                    }
                                    break;
                            }
                        }
                    }
                }
                if (record[k].filter(x => !x.$alias).length) {
                    record[k] = [{ op: 'bracked_in' }, ...record[k], { op: 'bracked_out' }];
                }
                record[k] = JSON.stringify(record[k]);
            }
            if (objectName === 'users' && this.connection.userData.$id) {
                record.id = JSON.parse(record.id);
                record.id.push({ op: 'equals', val: this.connection.userData.$id, con: 'or' });
                record.id = JSON.stringify(record.id);
            }
        }
        for (let k in data[objectName]) {
            let v = data[objectName][k] || '';
            if (Array.isArray(v) && k[0] !== '$') {
                const property = obj.properties[k];
                const isRelation = (property === null || property === void 0 ? void 0 : property.type) === '1n+' ? true : false;
                if (isRelation) {
                    for (const child of v) {
                        child['*guid*'] = shared_1.Utils.makeguid();
                        child[objectName] = record['*guid*'];
                        child['$' + objectName] = '1n-';
                        if (this.params.includeParentId) {
                            child[objectName + '_id'] = '';
                        }
                        const item = {};
                        item[k] = child;
                        const rel = this.recursiveMatrixCreation(item, record.$map);
                        record['$' + k] = '1n+';
                        record[k] = rel['*guid*'];
                    }
                }
                else if (v.length && v[0].$sub) {
                    for (const child of v) {
                        child['*guid*'] = shared_1.Utils.makeguid();
                        child[objectName] = record['*guid*'];
                        child['$' + objectName] = '1n-';
                        if (this.params.includeParentId) {
                            child[objectName + '_id'] = '';
                        }
                        const item = {};
                        item[k] = child;
                        const rel = this.recursiveMatrixCreation(item, record.$map);
                        record['$' + k] = '1n+';
                        record[k] = rel['*guid*'];
                    }
                }
                else {
                    record[k] = JSON.stringify(v);
                }
            }
            else if (typeof v === 'object' && k[0] !== '$') {
                if (this.getObjectByName(k)) {
                    v['*guid*'] = shared_1.Utils.makeguid();
                    if (['1n-', '1n1'].includes((_b = this.getObjectByName(k).properties[objectName]) === null || _b === void 0 ? void 0 : _b.type)) {
                        v[`$${objectName}`] = '1n-';
                    }
                    else {
                        v[`$${objectName}`] = '1n+';
                    }
                    v[objectName] = record['*guid*'];
                    const item = {};
                    item[k] = v;
                    const rel = this.recursiveMatrixCreation(item, record.$map);
                    record['$' + k] = '1n-';
                    record[k] = rel['*guid*'];
                    if (this.params.includeParentId) {
                        record[k + '_id'] = '';
                    }
                }
            }
            else if (k === '$sub') {
                record['*sub*'] = v;
            }
            else if (k === '$innerJoin') {
                record['*innerJoin*'] = true;
            }
            else if (k[0] === '$' && !this.metadata.systemObjectsContent['system'].properties[k.substr(1)] && !this.getObjectByName(k.substr(1, k.length - 1))) {
                continue;
            }
            else {
                record[k] = v;
            }
        }
        record['*hash*'] = [{ $alias: { k: 'id', v: '$hash' } }];
        const item = {};
        item[objectName] = record;
        this.data.recursiveMatrix.push(item);
        return record;
    }
    createDictionaries() {
        for (const item of this.data.recursiveMatrix) {
            const objectName = Object.keys(item)[0];
            if (!this.data.dictionaries[objectName]) {
                this.data.dictionaries[objectName] = [];
            }
            this.data.dictionaries[objectName].push(item[objectName]);
        }
    }
    async generateSqlQuery() {
        var _a, _b, _c, _d;
        const alias = {};
        const extra = {};
        let join = '';
        let pivot = '';
        let select = '';
        let where = '';
        for (let i = 0; i < this.data.recursiveMatrix.length; i++) {
            const objectName = Object.keys(this.data.recursiveMatrix[i])[0];
            const content = this.data.recursiveMatrix[i][objectName];
            alias[objectName] = content.$map;
            extra[content['*guid*']] = content.$map;
            const map = (_a = content.$map) === null || _a === void 0 ? void 0 : _a.split('.');
            if (map.length < 2) {
                this.pivot = objectName;
                pivot = this.prefix(objectName) + objectName + ' as `' + alias[objectName] + '`';
                continue;
            }
            if (content['*sub*']) {
                continue;
            }
            const joinType = content['*innerJoin*'] ? ' INNER JOIN ' : ' LEFT JOIN ';
            const parent = map[map.length - 2];
            if (content['$' + parent] === '1n+') {
                join += joinType + this.prefix(objectName) + objectName + ' as `' + alias[objectName] + '` on `' + alias[objectName] + '`.' + 'id = `' + alias[parent] + '`.' + objectName + '_id';
            }
            else {
                join += joinType + this.prefix(objectName) + objectName + ' as `' + alias[objectName] + '` on `' + alias[objectName] + '`.' + parent + '_id = `' + alias[parent] + '`.id';
            }
        }
        for (let i = 0; i < this.data.recursiveMatrix.length; i++) {
            const objectName = Object.keys(this.data.recursiveMatrix[i])[0];
            const obj = this.getObjectByName(objectName);
            if (!obj) {
                continue;
            }
            let localWhere = '';
            let localSelect = '';
            let content = this.data.recursiveMatrix[i][objectName];
            const selected = {};
            const isSubQuery = content['*sub*'];
            for (let k in content) {
                if (['*guid*'].includes(k)) {
                    continue;
                }
                const v = content[k];
                if (this.data.dictionaries[k] || k[0] === '$') {
                    continue;
                }
                else if (v && (typeof v === 'string' && v.length)) {
                    let parsingResult = this.parseWhere(objectName, k, '`' + alias[objectName] + '`.' + (k[0] === '$' ? k.substr(1) : k), content);
                    let parsedWhere = parsingResult.where;
                    if (parsedWhere.length) {
                        if (localWhere.length) {
                            localWhere += ` ${parsingResult.lastCon || 'AND'} `;
                        }
                        if (parsedWhere.length && (parsedWhere.endsWith(' AND ') || parsedWhere.endsWith('  OR '))) {
                            parsedWhere = parsedWhere.substr(0, parsedWhere.length - 5);
                        }
                        localWhere += ' (' + parsedWhere + ') ';
                    }
                }
                if (k[0] === '$') {
                    continue;
                }
                else if (['password'].includes((_b = obj.properties[k]) === null || _b === void 0 ? void 0 : _b.type)) {
                    this.passwordAlias[k] = alias[objectName] + '.' + k;
                }
                if (this.getObjectByName(k) && content['$' + k] !== '1n+') {
                    if (content[k].$alias) {
                        localSelect += '`' + alias[objectName] + '`.`' + (`.${content[k].$alias.k || k}`) + '_id` as `' + alias[objectName] + '.' + (`.${content[k].$alias.v || k}`) + '_id`, ';
                    }
                    else {
                        localSelect += '`' + alias[objectName] + '`.`' + k + '_id` as `' + alias[objectName] + '.' + k + '_id`, ';
                    }
                }
                else {
                    if (Array.isArray(content[k]) && content[k].length) {
                        const aliasMask = content[k].find(x => x.$alias);
                        if (aliasMask === null || aliasMask === void 0 ? void 0 : aliasMask.$alias) {
                            localSelect += '`' + alias[objectName] + '`.`' + (`${aliasMask.$alias.k || k}`) + '` as `' + alias[objectName] + '.' + (`${aliasMask.$alias.v || k}`) + '`, ';
                        }
                        else {
                            localSelect += '`' + alias[objectName] + '`.`' + (`${k}`) + '` as `' + alias[objectName] + '.' + (`${k}`) + '`, ';
                        }
                    }
                    else if (k[0] === '*') {
                        continue;
                    }
                    else {
                        localSelect += '`' + alias[objectName] + '`.`' + k + '` as `' + alias[objectName] + '.' + k + '`, ';
                    }
                }
                selected[k] = true;
            }
            if (!isSubQuery) {
                if (localWhere.length) {
                    if (localWhere.endsWith(' AND ') || localWhere.endsWith('  OR ')) {
                        localWhere = localWhere.substr(0, localWhere.length - 5);
                    }
                    where += `(${localWhere}) AND `;
                }
                if (localSelect.length) {
                    select += localSelect;
                }
            }
            else {
                const index = content.$map.split('.').findIndex(x => x === objectName);
                const parentName = content.$map.split('.')[index - 1];
                const parentRoute = content.$map.split('.').reverse().slice(1).reverse().join('.');
                const relationType = content[`$${parentName}`];
                const joinType = content['*innerJoin*'] ? ' INNER JOIN ' : ' LEFT JOIN ';
                if (parentName) {
                    const parentGuid = content[parentName];
                    const subQuery = (async (parentContent, onlyQuerySql = false) => {
                        if (localSelect.endsWith(', ')) {
                            localSelect = localSelect.substr(0, localSelect.length - 2);
                        }
                        console.log(parentContent);
                        const parentProperty = isSubQuery.parent;
                        const selfProperty = isSubQuery.object;
                        let subQuerySql;
                        if (relationType === '1n-') {
                            let subQueryWhere = ' WHERE `' + alias[objectName] + '`.' + selfProperty + ' = \'' + parentContent[parentRoute + '.' + parentProperty] + '\'';
                            if (localWhere.length) {
                                subQueryWhere += ` AND (${localWhere}) `;
                            }
                            subQuerySql = await this.makeQuery('SELECT ' + localSelect + ' FROM ' + this.prefix(objectName) + objectName + ' as `' + alias[objectName] + '`' + subQueryWhere);
                        }
                        else {
                        }
                        const subQueryData = [];
                        const recursiveSubQueryKey = Object.keys(this.data.subQueries).filter(x => this.data.subQueries[x].parentName === objectName);
                        for (const item of subQuerySql) {
                            for (const recursiveItem of recursiveSubQueryKey) {
                                const recursiveSubquerySql = await this.data.subQueries[recursiveItem].subQuery(1, true);
                                if (recursiveSubquerySql === null || recursiveSubquerySql === void 0 ? void 0 : recursiveSubquerySql.length) {
                                    for (const rk in recursiveSubquerySql[0]) {
                                        if (recursiveSubquerySql[0][rk]) {
                                            item[rk] = recursiveSubquerySql[0][rk];
                                        }
                                    }
                                }
                            }
                            const compressed = await this.compress([item]);
                            if (compressed.length) {
                                subQueryData.push(compressed[0]);
                            }
                        }
                        if (onlyQuerySql) {
                            return subQuerySql;
                        }
                        return subQueryData;
                    }).bind(this);
                    const subQueryKey = `${content.$map}.sub_${parentGuid.replace(/-/g, '')}`;
                    this.data.subQueries[`${subQueryKey}`] = { subQuery, parentName, parentGuid };
                    select += ` 1 as ${'`' + subQueryKey + '`'}, `;
                }
            }
        }
        if (where.endsWith(' AND ') || where.endsWith('  OR ')) {
            where = where.substr(0, where.length - 5);
        }
        select = select.substr(0, select.length - 2);
        if (where.length) {
            where = ' WHERE ' + where;
        }
        let queryOrderBy = '';
        if (!((_c = this.params.orderBy) === null || _c === void 0 ? void 0 : _c.length)) {
            for (const k in this.params.orderBy) {
                for (const property in this.params.orderBy[k]) {
                    if (this.params.orderBy[k][property]) {
                        if (queryOrderBy) {
                            queryOrderBy = '';
                        }
                    }
                    queryOrderBy += '`' + alias[k] + '.' + property + '` ' + this.params.orderBy[k][property];
                }
            }
            if (queryOrderBy.length) {
                queryOrderBy = ' ORDER BY ' + queryOrderBy;
            }
        }
        if (((_d = this.params.pagination) === null || _d === void 0 ? void 0 : _d.mode) === 'sql') {
            const count = await this.makeQuery(`SELECT COUNT(*) as count FROM  ${pivot}${join}${where}`);
            this.params.pagination.count = (count === null || count === void 0 ? void 0 : count.length) ? count[0].count : 0;
            return 'SELECT ' + select + ' FROM ' + pivot + join + where + queryOrderBy + ' LIMIT ' + this.params.pagination.pageSize + ' OFFSET ' + (((parseInt('' + this.params.pagination.page)) - 1) * parseInt('' + this.params.pagination.pageSize));
        }
        return 'SELECT ' + select + ' FROM ' + pivot + join + where + queryOrderBy;
    }
    parseWhere(objectName, propertyName, alias, content) {
        var _a;
        let where = '';
        let lastCon = '';
        try {
            content[propertyName] = JSON.parse(content[propertyName]);
            let val = content[propertyName];
            if (!Array.isArray(val)) {
                val = [{
                        op: 'equals',
                        val
                    }];
            }
            if (propertyName[0] === '$') {
            }
            let breakHere = false;
            for (const item of val) {
                if (!item.op) {
                    continue;
                }
                if (!item.con) {
                    item.con = 'and';
                }
                const objectContent = this.getObjectByName(objectName);
                let property = objectContent.properties[propertyName];
                if (!property && this.metadata.systemObjectsContent['system'].properties[propertyName]) {
                    property = this.metadata.systemObjectsContent['system'].properties[propertyName];
                }
                if (!property) {
                    if (propertyName.endsWith('_id')) {
                        property = new shared_1.ObjectProperty({ type: '1n-' });
                    }
                    else {
                        breakHere = true;
                    }
                }
                let cmp = null;
                switch (item.op) {
                    case 'lwt':
                        {
                            if (['float', 'int'].includes(property.type)) {
                                cmp = ` < ${item.val}`;
                            }
                            else if (property.type === 'date') {
                                cmp = ` < '${item.val}'`;
                            }
                            else {
                                cmp = ` < '${item.val}'`;
                            }
                        }
                        break;
                    case 'lgt':
                        {
                            if (['float', 'int'].includes(property.type)) {
                                cmp = ` > ${item.val}`;
                            }
                            else if (property.type === 'date') {
                                cmp = ` > '${item.val}'`;
                            }
                            else {
                                cmp = ` > '${item.val}'`;
                            }
                        }
                        break;
                    case 'lwt_equals':
                        {
                            if (['float', 'int'].includes(property.type)) {
                                cmp = ` <= ${item.val}`;
                            }
                            else if (property.type === 'date') {
                                cmp = ` <= '${item.val}'`;
                            }
                            else {
                                cmp = ` <= '${item.val}'`;
                            }
                        }
                        break;
                    case 'lgt_equals':
                        {
                            if (['float', 'int'].includes(property.type)) {
                                cmp = ` >= ${item.val}`;
                            }
                            else if (property.type === 'date') {
                                cmp = ` >= '${item.val}'`;
                            }
                            else {
                                cmp = ` >= '${item.val}'`;
                            }
                        }
                        break;
                    case 'equals':
                        {
                            if (item.val === 'NULL') {
                                cmp = ` IS NULL `;
                            }
                            else {
                                if (['float', 'int', '1n-', '1n1'].includes(property.type)) {
                                    cmp = ` = ${item.val}`;
                                }
                                else if (property.type === 'date') {
                                    cmp = ` BETWEEN '${item.val}T00:00:00.00' AND '${item.val}T23:59:59.999'`;
                                }
                                else {
                                    cmp = ` = '${item.val}'`;
                                }
                            }
                        }
                        break;
                    case 'diff':
                        {
                            if (['float', 'int', '1n-', '1n1'].includes(property.type)) {
                                cmp = ` <> ${item.val}`;
                            }
                            else if (item.val === 'NULL') {
                                cmp = ` IS NOT NULL `;
                            }
                            else {
                                cmp = ` != '${item.val}'`;
                            }
                        }
                        break;
                    case 'starts_with':
                        {
                            cmp = ` LIKE '%${item.val}'`;
                        }
                        break;
                    case 'ends_with':
                        {
                            cmp = ` LIKE '${item.val}%'`;
                        }
                        break;
                    case 'like':
                        {
                            cmp = ` LIKE '%${item.val}%'`;
                        }
                        break;
                    case 'in':
                        {
                            cmp = ` IN (${item.val})`;
                        }
                        break;
                    case 'not_in':
                        {
                            cmp = ` NOT IN (${item.val})`;
                        }
                        break;
                    case 'con':
                        {
                            if (where.length) {
                                switch ((_a = item.val) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
                                    case 'and':
                                        {
                                            if (!where.endsWith(' AND ') && !where.endsWith('OR')) {
                                                where = ' AND ' + where;
                                            }
                                        }
                                        break;
                                    case 'or':
                                        {
                                            if (!cmp.endsWith(' AND ') && !where.endsWith('OR')) {
                                                where = '  OR ' + where;
                                            }
                                        }
                                        break;
                                    case 'bracked_in':
                                        {
                                        }
                                        break;
                                    case 'bracked_out':
                                        {
                                        }
                                        break;
                                }
                            }
                        }
                        break;
                    case 'bracked_in':
                        {
                            where = where + '(';
                        }
                        break;
                    case 'bracked_out':
                        {
                            where = where + ')';
                        }
                        break;
                    default:
                        {
                            breakHere = true;
                        }
                        break;
                }
                if (cmp) {
                    if (item.con && where.length) {
                        if (item.con === 'and') {
                            if (!where.endsWith(' AND ') && !where.endsWith('OR') && !where.endsWith('(')) {
                                where += ' AND ';
                            }
                        }
                        else if (item.con === 'or') {
                            if (!where.endsWith(' AND ') && !where.endsWith('OR') && !where.endsWith('(')) {
                                where += '  OR ';
                            }
                        }
                    }
                    where += alias + cmp;
                }
                if (!lastCon.length) {
                    if (item.con === 'and') {
                        lastCon = 'AND';
                    }
                    else if (item.con === 'or') {
                        lastCon = 'OR';
                    }
                }
                if (breakHere) {
                    break;
                }
            }
        }
        catch (ex) {
            console.log(ex);
        }
        if (where.startsWith(' ( OR ')) {
        }
        return { where, lastCon };
    }
    async makeQuery(sql) {
        try {
            return await this.connection.run(sql);
        }
        catch (ex) {
            console.log(ex);
        }
        return false;
    }
    get prefix() {
        switch (this.params.moduleExtension) {
            case 'private':
                {
                    return (_) => 'private_';
                }
                break;
            case 'public':
                {
                    return (_) => 'public_';
                }
                break;
            case 'auto':
                {
                    return ((objectName) => {
                        if (this.metadata.objectsContent[objectName]) {
                            return 'public_';
                        }
                        else if (this.metadata.systemObjectsContent[objectName]) {
                            return 'private_';
                        }
                        return '';
                    }).bind(this);
                }
                break;
            case global.config.core:
                {
                    return (_) => '';
                }
                break;
        }
    }
    async compress(results) {
        const formattedResult = [];
        if (results.length) {
            const chunks = {};
            for (const result of results) {
                if (this.params.password && this.passwordAlias) {
                    for (const k in this.passwordAlias) {
                        const value = result[this.passwordAlias[k]];
                        delete result[this.passwordAlias[k]];
                        const password = this.params.password.find(x => x.field === k);
                        if (value && (password === null || password === void 0 ? void 0 : password.value) && !(await shared_1.Utils.passwordCompare(password.value, value))) {
                            throw `Invalid Password`;
                        }
                    }
                }
                if (!chunks[result[`${this.pivot}.$id`]]) {
                    chunks[result[`${this.pivot}.$id`]] = [];
                }
                chunks[result[`${this.pivot}.$id`]].push(result);
            }
            for (const _ in chunks) {
                const chunk = await this.processChunk(chunks[_]);
                if (chunk) {
                    formattedResult.push(chunk);
                }
            }
        }
        return formattedResult;
    }
    async processChunk(chunk, objectName = this.pivot) {
        const json = {};
        json[objectName] = {};
        for (let i = 0; i < chunk.length; i++) {
            this.data.reminiscence = {};
            for (const propertyName in chunk[i]) {
                if (this.data.subQueries[propertyName]) {
                    if (chunk[i]) {
                        const parentName = this.data.subQueries[propertyName].parentName;
                        const parentId = chunk[i][`${parentName}.$id`];
                        if (parentId) {
                            const f = this.data.subQueries[propertyName].subQuery;
                            let subQueryResult = await f(chunk[i]);
                            if (subQueryResult === null || subQueryResult === void 0 ? void 0 : subQueryResult.length) {
                                for (const item of subQueryResult) {
                                    const subQueryMethod = () => {
                                        try {
                                            return item[parentName];
                                        }
                                        catch (ex) {
                                        }
                                    };
                                    this.deepJson(json, propertyName.split('.').slice(1).join('.'), propertyName, subQueryMethod, chunk[i], objectName);
                                    console.log(subQueryMethod);
                                }
                            }
                        }
                    }
                }
                else {
                    this.deepJson(json, propertyName.split('.').slice(1).join('.'), propertyName, chunk[i][propertyName], chunk[i], objectName);
                }
            }
        }
        return json;
    }
    deepJson(json, propertyName, basePropertyName, value, chunk, parent, callback = null) {
        var _a, _b, _c, _d, _e;
        if (this.data.reminiscence[basePropertyName]) {
            const reversedPropertyName = basePropertyName.split('.').reverse()[0];
            const item = this.data.reminiscence[basePropertyName];
            const propertyNameID = basePropertyName.split('.').slice(0, -1).join('.');
            const _propertyName = propertyNameID.split('.').slice(-1)[0];
            const keys = Object.keys(chunk);
            const k = keys.find(x => x.endsWith(`${item.parent}.$id`));
            const propertyK = keys.find(x => x.endsWith(`${item.propertyName}.$id`));
            let parentObject = Array.isArray(item.json[item.parent]) ? item.json[item.parent].find(x => x.$id === chunk[k]) : item.json[item.parent];
            if (chunk[propertyK] && parentObject) {
                if (parentObject[_propertyName] === undefined) {
                    if (item.isChild) {
                        parentObject[_propertyName] = [];
                    }
                    else {
                        parentObject[_propertyName] = {};
                    }
                }
                if (item.isChild) {
                    if (!Array.isArray(parentObject[_propertyName])) {
                        parentObject[_propertyName] = [parentObject[_propertyName]];
                    }
                    const index = (_a = parentObject[_propertyName]) === null || _a === void 0 ? void 0 : _a.findIndex(x => x.$id === chunk[propertyK]);
                    if (index >= 0) {
                        if (reversedPropertyName === '$hash') {
                            value = shared_1.Utils.hash(parentObject[_propertyName][index]);
                        }
                        parentObject[_propertyName][index][reversedPropertyName] = value;
                    }
                    else {
                        const child = {};
                        child[reversedPropertyName] = value;
                        parentObject[_propertyName].push(child);
                    }
                }
                else {
                    if (reversedPropertyName === '$hash') {
                        value = shared_1.Utils.hash(parentObject[_propertyName]);
                    }
                    parentObject[_propertyName][reversedPropertyName] = value;
                }
            }
            else if (item.propertyName === 'translations') {
                if (parentObject[_propertyName] === undefined) {
                    parentObject[_propertyName] = [];
                }
                if (!Array.isArray(parentObject[_propertyName])) {
                    parentObject[_propertyName] = [parentObject[_propertyName]];
                }
                value = (value instanceof Function ? value() : value)[_propertyName];
                parentObject[_propertyName].push(value);
            }
            return true;
        }
        let target;
        if (Array.isArray(json[parent])) {
            const k = Object.keys(chunk).find(x => x.endsWith(`${parent}.$id`));
            const found = json[parent].find(x => (x === null || x === void 0 ? void 0 : x.$id) === chunk[k]);
            if (found) {
                target = found;
            }
            else {
                target = {};
                json[parent].push(target);
            }
        }
        else {
            target = json[parent];
        }
        if (propertyName.includes('.')) {
            const currentPropertyName = propertyName.split('.')[0];
            let isChild;
            if (this.data.subQueries[`${parent}.${propertyName}`]) {
                isChild = false;
            }
            else {
                isChild = ['1n-', '1n1'].includes((_c = (_b = this.getObjectByName(currentPropertyName)) === null || _b === void 0 ? void 0 : _b.properties[parent]) === null || _c === void 0 ? void 0 : _c.type) &&
                    !['1n-', '1n1'].includes((_e = (_d = this.getObjectByName(parent)) === null || _d === void 0 ? void 0 : _d.properties[currentPropertyName]) === null || _e === void 0 ? void 0 : _e.type);
            }
            if (!target[currentPropertyName]) {
                target[currentPropertyName] = {};
            }
            this.deepJson(target, propertyName.split('.').slice(1).join('.'), basePropertyName, value, chunk, currentPropertyName, (() => {
                var _a, _b, _c;
                if (target[currentPropertyName]) {
                    if (isChild) {
                        if (!Array.isArray(target[currentPropertyName])) {
                            if ((_a = target[currentPropertyName]) === null || _a === void 0 ? void 0 : _a.$id) {
                                target[currentPropertyName] = [target[currentPropertyName]];
                            }
                            else {
                                target[currentPropertyName] = [];
                            }
                        }
                        if (target[currentPropertyName].length && !((_b = target[currentPropertyName][target[currentPropertyName].length - 1]) === null || _b === void 0 ? void 0 : _b.$id)) {
                            target[currentPropertyName] = target[currentPropertyName].slice(0, -1);
                        }
                    }
                    else {
                        if (!((_c = target[currentPropertyName]) === null || _c === void 0 ? void 0 : _c.$id)) {
                            if (!(value instanceof Function)) {
                                delete target[currentPropertyName];
                            }
                        }
                    }
                    if (propertyName.split('.').length < 3) {
                        if (!this.data.reminiscence[basePropertyName]) {
                            this.data.reminiscence[basePropertyName] = {
                                json,
                                parent,
                                propertyName: currentPropertyName,
                                basePropertyName,
                                isChild,
                                parentId: target.$id
                            };
                        }
                    }
                }
            }).bind(this));
        }
        else {
            if (propertyName === '$hash') {
                value = shared_1.Utils.hash(target);
            }
            if (value instanceof Function) {
                const subQueryValue = value();
                if (subQueryValue) {
                    Object.assign(target, subQueryValue[parent]);
                }
            }
            else {
                target[propertyName] = value;
            }
        }
        if (callback) {
            callback();
        }
    }
    getObjectByName(objectName) {
        if (this.metadata.objectsContent[objectName] && this.metadata.systemObjectsContent[objectName]) {
            Object.assign(this.metadata.objectsContent[objectName].properties, this.metadata.systemObjectsContent[objectName].properties);
        }
        return this.metadata.objectsContent[objectName] || this.metadata.systemObjectsContent[objectName];
    }
}
exports.GraphProcess = GraphProcess;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Authenticable = void 0;
const common_1 = __webpack_require__(4);
const jwt_decode_1 = __webpack_require__(31);
const session_service_1 = __webpack_require__(32);
exports.Authenticable = (0, common_1.createParamDecorator)((data, ctx) => {
    var _a, _b;
    const req = ctx.switchToHttp().getRequest();
    if (!req.headers.authorization) {
        throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
    }
    var payload = (0, jwt_decode_1.default)(req.headers.authorization);
    if (!((_a = payload === null || payload === void 0 ? void 0 : payload.user) === null || _a === void 0 ? void 0 : _a.username)) {
        throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    if (!session_service_1.SessionService.sessions[`${payload.tenant}_${payload.user.username}`]) {
    }
    else if (((_b = session_service_1.SessionService.sessions[`${payload.tenant}_${payload.user.username}`]) === null || _b === void 0 ? void 0 : _b.payload.sessionId) !== payload.sessionId) {
        throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
    }
    return payload;
});


/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SessionService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionService = void 0;
const common_1 = __webpack_require__(4);
const graph_entity_1 = __webpack_require__(29);
const login_entity_1 = __webpack_require__(33);
const userSession_entity_1 = __webpack_require__(34);
const shared_1 = __webpack_require__(9);
const _const_1 = __webpack_require__(12);
const jwt = __webpack_require__(35);
const register_entity_1 = __webpack_require__(36);
const crud_entity_1 = __webpack_require__(27);
let SessionService = SessionService_1 = class SessionService {
    async login(params, _connection = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startPrivate(params.tenantName);
        try {
            if (!params.password || !params.username) {
                throw `Please fill all required fields`;
            }
            const _metadataService = new shared_1.MetadataService(connection);
            const metadata = new login_entity_1.LoginMetadata();
            metadata.objectsContent = await _metadataService.getObjectsContent().object.data;
            metadata.systemObjectsContent = await _metadataService.getObjectsContent({ system: true }).object.data;
            const schema = {};
            for (const propertyName in metadata.systemObjectsContent.users.properties) {
                const property = metadata.systemObjectsContent.users.properties[propertyName];
                if (property.required) {
                    schema[propertyName] = '';
                }
            }
            schema.username = [{ 'op': _const_1.OP_EQUALS, 'val': params.username }];
            schema.password = '';
            if (params.userExtension) {
                schema[params.userExtension] = {};
                for (const propertyName in (_a = metadata.objectsContent[params.userExtension]) === null || _a === void 0 ? void 0 : _a.properties) {
                    const property = (_b = metadata.objectsContent[params.userExtension]) === null || _b === void 0 ? void 0 : _b.properties[propertyName];
                    if (![_const_1.TYPE_1NL, _const_1.TYPE_1NR, _const_1.TYPE_1N1].includes(property.type)) {
                        schema[params.userExtension][propertyName] = '';
                    }
                }
            }
            schema.usersxroles = [{
                    roles: {
                        meta: "",
                        name: "",
                        _create: '',
                        _read: '',
                        _update: '',
                        _delete: '',
                        _transfer: '',
                        _clientapp: ''
                    }
                }];
            schema.usersxchunks = [{
                    chunks: {
                        alias: ''
                    }
                }];
            const exists = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: _const_1.API_USERS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                includeSystemProperties: false,
                returnQuery: true,
                password: [{
                        field: 'password',
                        value: params.password
                    }],
                schema
            }));
            if (!exists.status) {
                throw exists;
            }
            else if (!((_e = (_d = (_c = exists === null || exists === void 0 ? void 0 : exists.object) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.users) === null || _e === void 0 ? void 0 : _e.$id)) {
                throw `User does not exists`;
            }
            const user = (_g = (_f = exists === null || exists === void 0 ? void 0 : exists.object) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.users;
            const sessionDuration = await shared_1.SqlHelper.getTenantSessionDurationKey(connection);
            if (SessionService_1.sessions[`${connection.tenant}_${params.username}`] && Date.now() - SessionService_1.sessions[`${connection.tenant}_${params.username}`].time < parseInt(sessionDuration[0].paramValue) * 1000) {
                delete SessionService_1.sessions[`${connection.tenant}_${params.username}`];
                throw `Your account is being used`;
            }
            if (!((_h = user.usersxroles) === null || _h === void 0 ? void 0 : _h.length)) {
                throw `User has not role`;
            }
            const roles = [];
            for (const userxrole of user.usersxroles) {
                if ((_j = userxrole === null || userxrole === void 0 ? void 0 : userxrole.roles) === null || _j === void 0 ? void 0 : _j.$id) {
                    roles.push({
                        meta: userxrole.roles.meta,
                        name: userxrole.roles.name,
                        _create: userxrole.roles._create,
                        _read: userxrole.roles._read,
                        _update: userxrole.roles._update,
                        _delete: userxrole.roles._delete
                    });
                }
                else {
                    throw `User cointains invalid role ${userxrole.$id}`;
                }
            }
            delete user.usersxroles;
            user.roles = roles;
            user.$groupEnabled = await shared_1.SqlHelper.isTenantGroupSegmentationEnabled(connection);
            if (user.$groupEnabled) {
                if ((_k = user.usersxchunks) === null || _k === void 0 ? void 0 : _k.length) {
                    let selectedChunk;
                    if (params.group) {
                        selectedChunk = user.usersxchunks.find(x => { var _a; return ((_a = x.chunks) === null || _a === void 0 ? void 0 : _a.alias) === params.group; });
                    }
                    if (!selectedChunk) {
                        selectedChunk = user.usersxchunks.find(x => { var _a; return (_a = x.chunks) === null || _a === void 0 ? void 0 : _a.alias; });
                    }
                    if (selectedChunk) {
                        user.$group = selectedChunk.$id;
                    }
                }
                else {
                    user.$group = null;
                }
            }
            delete user.usersxchunks;
            let selectedUserExtension = '';
            if (params.userExtension) {
                if (user[params.userExtension]) {
                    for (const k in user[params.userExtension]) {
                        if (k[0] !== '$') {
                            user[k] = user[params.userExtension][k];
                        }
                    }
                    user[`${params.userExtension}_id`] = user[params.userExtension].$id;
                    selectedUserExtension = params.userExtension;
                }
                delete user[params.userExtension];
            }
            Object.assign(user, { $map: await shared_1.SqlHelper.getUserMap(connection, user.$id) });
            const sessionId = shared_1.Utils.makeguid();
            const payload = {
                user,
                mod: selectedUserExtension,
                tenant: connection.tenant,
                sessionId
            };
            const accessToken = jwt.sign(payload, connection.systemKey, { expiresIn: parseInt(sessionDuration[0].paramValue) });
            SessionService_1.sessions[`${connection.tenant}_${params.username}`] = new userSession_entity_1.UserSession({
                payload,
                accessToken,
                username: params.username,
                time: Date.now()
            });
            result = new shared_1.DefaultResponse({ object: { data: { accessToken } } }).ok(`Welcome to ${connection.tenant}`);
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.login, SessionService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async logout(payload) {
        let result = null;
        try {
            delete SessionService_1.sessions[`${payload.tenant}_${payload.user.username}`];
            result = new shared_1.DefaultResponse().ok(`Bye`);
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.logout, SessionService_1, ex);
        }
        finally {
        }
        return result;
    }
    async refresh(payload, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startPublic(payload);
        try {
            delete payload.exp;
            delete payload.iat;
            payload.sessionId = shared_1.Utils.makeguid();
            const sessionDuration = await shared_1.SqlHelper.getTenantSessionDurationKey(connection);
            const accessToken = jwt.sign(payload, connection.systemKey, { expiresIn: parseInt(sessionDuration[0].paramValue) });
            const session = SessionService_1.sessions[`${payload.tenant}_${payload.user.username}`];
            session.payload = payload;
            session.accessToken = accessToken;
            session.time = Date.now();
            result = new shared_1.DefaultResponse({ object: { data: { accessToken } } }).ok(`Refreshed`);
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.refresh, SessionService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async register(params, _connection = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startPrivate(params.tenantName);
        try {
            if (!params.password) {
                throw `Please fill all required fields (Password)`;
            }
            else if (!params.confirmPassword) {
                throw `Please fill all required fields (Confirm Password)`;
            }
            else if (!params.username) {
                throw `Please fill all required fields (Username)`;
            }
            else if (params.password !== params.confirmPassword) {
                throw `Invalid password`;
            }
            const _metadataService = new shared_1.MetadataService(connection);
            const metadata = new register_entity_1.RegisterMetadata();
            metadata.objectsContent = await _metadataService.getObjectsContent().object.data;
            metadata.systemObjectsContent = await _metadataService.getObjectsContent({ system: true }).object.data;
            const role = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: 'roles',
                moduleExtension: _const_1.API_MODULE_AUTO,
                returnQuery: true,
                schema: {
                    meta: [{ op: 'equals', val: params.userExtension }]
                },
                pagination: {
                    page: 1,
                    pageSize: 1
                }
            }));
            if (!((_c = (_b = (_a = role === null || role === void 0 ? void 0 : role.object) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.roles) === null || _c === void 0 ? void 0 : _c.$id)) {
                throw `Entity has not default role`;
            }
            let user = {};
            user.username = params.username;
            user.password = params.password;
            user.email = params.email;
            user[params.userExtension] = params.content;
            if (((_e = (_d = metadata.objectsContent[params.userExtension]) === null || _d === void 0 ? void 0 : _d.properties.users) === null || _e === void 0 ? void 0 : _e.type) === _const_1.TYPE_1NL) {
                user.users = {};
                for (const k in user) {
                    if (k[0] === '$' || (user[k] instanceof Object && k !== 'users') || k === 'confirmPassword') {
                        delete user[k];
                        continue;
                    }
                    if (metadata.systemObjectsContent.users.properties[k]) {
                        user.users[k] = user[k];
                        delete user[k];
                    }
                    else if (!metadata.objectsContent[params.userExtension].properties[k]) {
                        throw `Invalid property ${k}`;
                    }
                }
                user.users.usersxroles = [{
                        roles: (_g = (_f = role === null || role === void 0 ? void 0 : role.object) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.roles
                    }];
            }
            else {
                throw `Invalid entity ${params.userExtension}`;
            }
            const exists = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: _const_1.API_USERS_TABLE,
                moduleExtension: _const_1.API_MODULE_PUBLIC,
                schema: {
                    username: [{ 'op': _const_1.OP_EQUALS, val: user.users.username }],
                },
                pagination: {
                    page: 1,
                    pageSize: 1
                }
            }));
            if (!exists.status) {
                throw exists;
            }
            else if ((_k = (_j = (_h = exists.object) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.users) === null || _k === void 0 ? void 0 : _k.$id) {
                throw `User ${user.users.username} already exists`;
            }
            const registered = await _metadataService.objectCrud(new crud_entity_1.CrudParameters({
                root: _const_1.API_USERS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: user
            }));
            if ((_l = registered.object) === null || _l === void 0 ? void 0 : _l.data) {
                result = new shared_1.DefaultResponse().ok('Welcome');
            }
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.register, SessionService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async reset(payload, params, _connection = null) {
        var _a, _b, _c;
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startPublic(payload);
        try {
            if (!params.password) {
                throw `Please fill all required fields (Password)`;
            }
            else if (!params.confirmPassword) {
                throw `Please fill all required fields (Confirm Password)`;
            }
            else if (!params.oldPassword) {
                throw `Please fill all required fields (Old Password)`;
            }
            const _metadataService = new shared_1.MetadataService(connection);
            const metadata = new register_entity_1.RegisterMetadata();
            metadata.objectsContent = await _metadataService.getObjectsContent().object.data;
            metadata.systemObjectsContent = await _metadataService.getObjectsContent({ system: true }).object.data;
            const exists = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: _const_1.API_USERS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                password: [{
                        field: 'password',
                        value: params.oldPassword
                    }],
                schema: {
                    username: [{ 'op': _const_1.OP_EQUALS, val: payload.user.username }],
                    $id: [{ 'op': _const_1.OP_EQUALS, val: payload.user.$id }],
                    password: ''
                },
                pagination: {
                    page: 1,
                    pageSize: 1
                }
            }));
            if (!exists.status) {
                throw exists;
            }
            else if (!((_c = (_b = (_a = exists.object) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.users) === null || _c === void 0 ? void 0 : _c.$id)) {
                throw `User does not exists`;
            }
            const user = payload.user;
            user.password = params.password;
            result = await _metadataService.objectCrud(new crud_entity_1.CrudParameters({
                root: _const_1.API_USERS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: user
            }));
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.reset, SessionService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
};
SessionService.sessions = {};
SessionService = SessionService_1 = __decorate([
    (0, common_1.Injectable)()
], SessionService);
exports.SessionService = SessionService;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginMetadata = exports.LoginParameters = void 0;
class LoginParameters {
    constructor(params) {
        if (params) {
            for (const k in params) {
                if (params[k] !== undefined) {
                    this[k] = params[k];
                }
            }
        }
    }
}
exports.LoginParameters = LoginParameters;
class LoginMetadata {
    constructor() {
        this.objectsContent = {};
        this.systemObjectsContent = {};
        this.schema = {};
    }
}
exports.LoginMetadata = LoginMetadata;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSession = void 0;
class UserSession {
    constructor(params = null) {
        if (params) {
            for (const k in params) {
                if (params[k] !== undefined) {
                    this[k] = params[k];
                }
            }
        }
    }
}
exports.UserSession = UserSession;


/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterMetadata = exports.RegisterParameters = void 0;
class RegisterParameters {
    constructor(params) {
        this.content = {};
        if (params) {
            for (const k in params) {
                if (params[k] !== undefined) {
                    this[k] = params[k];
                }
            }
        }
    }
}
exports.RegisterParameters = RegisterParameters;
class RegisterMetadata {
    constructor() {
        this.objectsContent = {};
        this.systemObjectsContent = {};
        this.schema = {};
    }
}
exports.RegisterMetadata = RegisterMetadata;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrudApiDto = void 0;
class CrudApiDto {
    constructor() {
        this.schema = {};
    }
}
exports.CrudApiDto = CrudApiDto;


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphDto = void 0;
class GraphDto {
    constructor() {
        this.schema = {};
        this.returnQuery = false;
        this.includeParentId = false;
        this.includeSystemProperties = false;
        this.pagination = {};
    }
}
exports.GraphDto = GraphDto;


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedModule = void 0;
const common_1 = __webpack_require__(4);
const metadata_service_1 = __webpack_require__(25);
const config_1 = __webpack_require__(14);
const env_helper_1 = __webpack_require__(40);
const inertia_entity_1 = __webpack_require__(13);
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: (0, env_helper_1.getEnvPath)(`${__dirname}/common/envs`), isGlobal: true }),
        ],
        controllers: [],
        providers: [metadata_service_1.MetadataService, config_1.ConfigService, inertia_entity_1.InertiaCore]
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEnvPath = void 0;
const fs_1 = __webpack_require__(21);
const path_1 = __webpack_require__(22);
function getEnvPath(dest) {
    const env = '';
    const fallback = `src/shared/environments/${env}.env`;
    const filename = (0, path_1.resolve)(`${dest}/.env`);
    let filePath = (0, path_1.resolve)(`${filename}`);
    if (!(0, fs_1.existsSync)(filePath)) {
        filePath = fallback;
    }
    return filePath;
}
exports.getEnvPath = getEnvPath;


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FactoryModule = void 0;
const common_1 = __webpack_require__(4);
const factory_controller_1 = __webpack_require__(42);
const tenant_service_1 = __webpack_require__(50);
const schema_service_1 = __webpack_require__(49);
const shared_module_1 = __webpack_require__(39);
const objects_service_1 = __webpack_require__(48);
const authorizations_service_1 = __webpack_require__(53);
const actions_service_1 = __webpack_require__(54);
const bridge_service_1 = __webpack_require__(57);
let FactoryModule = class FactoryModule {
};
FactoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [factory_controller_1.FactoryController],
        providers: [tenant_service_1.TenantService, schema_service_1.SchemaService, objects_service_1.ObjectsService, authorizations_service_1.AuthorizationsService, actions_service_1.ActionsService, bridge_service_1.BridgesService],
        imports: [shared_module_1.SharedModule],
    })
], FactoryModule);
exports.FactoryModule = FactoryModule;


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FactoryController = void 0;
const common_1 = __webpack_require__(4);
const shared_1 = __webpack_require__(9);
const objects_dto_1 = __webpack_require__(43);
const schema_dto_1 = __webpack_require__(44);
const objects_entity_1 = __webpack_require__(45);
const schema_entity_1 = __webpack_require__(46);
const tenant_entity_1 = __webpack_require__(47);
const objects_service_1 = __webpack_require__(48);
const schema_service_1 = __webpack_require__(49);
const tenant_service_1 = __webpack_require__(50);
const authorization_dto_1 = __webpack_require__(51);
const authorizations_entity_1 = __webpack_require__(52);
const authorizations_service_1 = __webpack_require__(53);
const actions_service_1 = __webpack_require__(54);
const actions_dto_1 = __webpack_require__(56);
const action_entity_1 = __webpack_require__(55);
const graph_dto_1 = __webpack_require__(38);
const bridge_service_1 = __webpack_require__(57);
const bridge_entity_1 = __webpack_require__(58);
const crud_dto_1 = __webpack_require__(37);
let FactoryController = class FactoryController {
    constructor(_tenantService, _objectsService, _schemaService, _authorizationsService, _actionsService, _bridgeService) {
        this._tenantService = _tenantService;
        this._objectsService = _objectsService;
        this._schemaService = _schemaService;
        this._authorizationsService = _authorizationsService;
        this._actionsService = _actionsService;
        this._bridgeService = _bridgeService;
    }
    createTenant(payload, tenantName) {
        try {
            return this._tenantService.createTenant(payload, new tenant_entity_1.CreateTenantParameters({ tenantName }));
        }
        catch (ex) {
            return ex;
        }
    }
    deleteTenant(payload, tenantName) {
        try {
            return this._tenantService.deleteTenant(payload, new tenant_entity_1.DeleteTenantParameters({ tenantName }));
        }
        catch (ex) {
            return ex;
        }
    }
    readSchema(payload, tenantName) {
        try {
            return this._schemaService.read(payload, new schema_entity_1.ReadSchemaParameters({ tenantName }));
        }
        catch (ex) {
            return ex;
        }
    }
    createSchema(payload, tenantName, schemaDto) {
        try {
            return this._schemaService.create(payload, new schema_entity_1.SchemaParameters(Object.assign({ tenantName }, schemaDto)));
        }
        catch (ex) {
            return ex;
        }
    }
    readObject(payload, tenantName, readObjectDto) {
        try {
            return this._objectsService.read(payload, new objects_entity_1.ReadObjectParameters(Object.assign(Object.assign({}, readObjectDto), { tenantName })));
        }
        catch (ex) {
            return ex;
        }
    }
    upsertObject(payload, tenantName, upsertObjectDto) {
        try {
            return this._objectsService.upsert(payload, new objects_entity_1.UpsertObjectParameters(Object.assign(Object.assign({}, upsertObjectDto), { tenantName })));
        }
        catch (ex) {
            return ex;
        }
    }
    destroyObject(payload, tenantName, destroyObjectDto) {
        try {
            return this._objectsService.destroy(payload, new objects_entity_1.DestroyObjectParameters(Object.assign(Object.assign({}, destroyObjectDto), { tenantName })));
        }
        catch (ex) {
            return ex;
        }
    }
    readAuthorization(payload, tenantName, readAuthorizationDto) {
        try {
            return this._authorizationsService.read(payload, new authorizations_entity_1.ReadAuthorizationParameters(Object.assign(Object.assign({}, readAuthorizationDto), { tenantName })));
        }
        catch (ex) {
            return ex;
        }
    }
    upsertAuthorization(payload, tenantName, upsertAuthorizationDto) {
        try {
            return this._authorizationsService.upsert(payload, new authorizations_entity_1.UpsertAuthorizationParameters(Object.assign(Object.assign({}, upsertAuthorizationDto), { tenantName })));
        }
        catch (ex) {
            return ex;
        }
    }
    readActions(payload, tenantName, readAuthorizationDto) {
        try {
            return this._actionsService.read(payload, new action_entity_1.ReadActionsParameters(Object.assign(Object.assign({}, readAuthorizationDto), { tenantName })));
        }
        catch (ex) {
            return ex;
        }
    }
    getAction(payload, tenantName, getActionDto) {
        try {
            return this._actionsService.get(payload, new action_entity_1.GetActionParameters(Object.assign(Object.assign({}, getActionDto), { tenantName })));
        }
        catch (ex) {
            return ex;
        }
    }
    upsertActions(payload, tenantName, crudActionsDto) {
        try {
            return this._actionsService.crud(payload, new action_entity_1.CrudActionParameters(Object.assign(Object.assign({}, crudActionsDto), { tenantName })));
        }
        catch (ex) {
            return ex;
        }
    }
    deleteActions(payload, tenantName, crudActionsDto) {
        try {
            return this._actionsService.destroy(payload, new action_entity_1.CrudActionParameters(Object.assign(Object.assign({}, crudActionsDto), { tenantName })));
        }
        catch (ex) {
            return ex;
        }
    }
    bridgeSelect(payload, tenantName, root, graphDto) {
        try {
            return this._bridgeService.select(payload, new bridge_entity_1.BridgeParameters({ data: graphDto, root, tenantName }));
        }
        catch (ex) {
            return ex;
        }
    }
    bridgeCrud(payload, tenantName, root, crudApiDto) {
        try {
            return this._bridgeService.crud(payload, new bridge_entity_1.BridgeParameters({ data: crudApiDto, root, tenantName }));
        }
        catch (ex) {
            return ex;
        }
    }
};
__decorate([
    (0, common_1.Post)('tenant/create/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "createTenant", null);
__decorate([
    (0, common_1.Post)('tenant/delete/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "deleteTenant", null);
__decorate([
    (0, common_1.Post)('schema/read/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "readSchema", null);
__decorate([
    (0, common_1.Post)('schema/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_g = typeof schema_dto_1.SchemaDto !== "undefined" && schema_dto_1.SchemaDto) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "createSchema", null);
__decorate([
    (0, common_1.Post)('object/read/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_h = typeof objects_dto_1.ReadObjectDto !== "undefined" && objects_dto_1.ReadObjectDto) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "readObject", null);
__decorate([
    (0, common_1.Post)('object/upsert/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_j = typeof objects_dto_1.UpsertObjectDto !== "undefined" && objects_dto_1.UpsertObjectDto) === "function" ? _j : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "upsertObject", null);
__decorate([
    (0, common_1.Post)('object/destroy/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_k = typeof objects_dto_1.DestroyObjectDto !== "undefined" && objects_dto_1.DestroyObjectDto) === "function" ? _k : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "destroyObject", null);
__decorate([
    (0, common_1.Post)('authorization/read/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_l = typeof authorization_dto_1.ReadAuthorizationDto !== "undefined" && authorization_dto_1.ReadAuthorizationDto) === "function" ? _l : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "readAuthorization", null);
__decorate([
    (0, common_1.Post)('authorization/update/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_m = typeof authorization_dto_1.UpsertAuthorizationDto !== "undefined" && authorization_dto_1.UpsertAuthorizationDto) === "function" ? _m : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "upsertAuthorization", null);
__decorate([
    (0, common_1.Post)('actions/read/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_o = typeof actions_dto_1.ReadActionsDto !== "undefined" && actions_dto_1.ReadActionsDto) === "function" ? _o : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "readActions", null);
__decorate([
    (0, common_1.Post)('actions/get/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_p = typeof actions_dto_1.GetActionsDto !== "undefined" && actions_dto_1.GetActionsDto) === "function" ? _p : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "getAction", null);
__decorate([
    (0, common_1.Post)('actions/upsert/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_q = typeof actions_dto_1.CrudActionsDto !== "undefined" && actions_dto_1.CrudActionsDto) === "function" ? _q : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "upsertActions", null);
__decorate([
    (0, common_1.Post)('actions/destroy/:tenantName'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_r = typeof actions_dto_1.CrudActionsDto !== "undefined" && actions_dto_1.CrudActionsDto) === "function" ? _r : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "deleteActions", null);
__decorate([
    (0, common_1.Post)('bridge/select/:tenantName/:root'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Param)('root')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, typeof (_s = typeof graph_dto_1.GraphDto !== "undefined" && graph_dto_1.GraphDto) === "function" ? _s : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "bridgeSelect", null);
__decorate([
    (0, common_1.Post)('bridge/crud/:tenantName/:root'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Param)('tenantName')),
    __param(2, (0, common_1.Param)('root')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, typeof (_t = typeof crud_dto_1.CrudApiDto !== "undefined" && crud_dto_1.CrudApiDto) === "function" ? _t : Object]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "bridgeCrud", null);
FactoryController = __decorate([
    (0, common_1.Controller)('factory'),
    __metadata("design:paramtypes", [typeof (_a = typeof tenant_service_1.TenantService !== "undefined" && tenant_service_1.TenantService) === "function" ? _a : Object, typeof (_b = typeof objects_service_1.ObjectsService !== "undefined" && objects_service_1.ObjectsService) === "function" ? _b : Object, typeof (_c = typeof schema_service_1.SchemaService !== "undefined" && schema_service_1.SchemaService) === "function" ? _c : Object, typeof (_d = typeof authorizations_service_1.AuthorizationsService !== "undefined" && authorizations_service_1.AuthorizationsService) === "function" ? _d : Object, typeof (_e = typeof actions_service_1.ActionsService !== "undefined" && actions_service_1.ActionsService) === "function" ? _e : Object, typeof (_f = typeof bridge_service_1.BridgesService !== "undefined" && bridge_service_1.BridgesService) === "function" ? _f : Object])
], FactoryController);
exports.FactoryController = FactoryController;


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DestroyObjectDto = exports.ReadObjectDto = exports.UpsertObjectDto = void 0;
class UpsertObjectDto {
}
exports.UpsertObjectDto = UpsertObjectDto;
class ReadObjectDto {
    constructor() {
        this.filters = {};
        this.orderBy = {};
    }
}
exports.ReadObjectDto = ReadObjectDto;
class DestroyObjectDto {
}
exports.DestroyObjectDto = DestroyObjectDto;


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaDto = void 0;
class SchemaDto {
    constructor() {
        this.userExt = [];
        this.schema = {};
        this.deepClean = false;
    }
}
exports.SchemaDto = SchemaDto;


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectProcess = exports.UpsertObjectMetadata = exports.ReadObjectParameters = exports.DestroyObjectParameters = exports.UpsertObjectParameters = void 0;
const shared_1 = __webpack_require__(9);
const _const_1 = __webpack_require__(12);
class UpsertObjectParameters {
    constructor(params = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.UpsertObjectParameters = UpsertObjectParameters;
class DestroyObjectParameters {
    constructor(params = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.DestroyObjectParameters = DestroyObjectParameters;
class ReadObjectParameters {
    constructor(params = null) {
        this.filters = {};
        this.orderBy = {};
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.ReadObjectParameters = ReadObjectParameters;
class UpsertObjectMetadata {
}
exports.UpsertObjectMetadata = UpsertObjectMetadata;
class ObjectProcess {
    constructor(connection, params, metadata) {
        this.connection = connection;
        this.params = params;
        this.metadata = metadata;
    }
    async upsert() {
        try {
            if (!this.metadata.objectsContent[this.params.object.str]) {
                return await this.create();
            }
            else {
                return await this.update();
            }
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.upsert, ObjectProcess, ex);
        }
    }
    async create() {
        const data = new shared_1.ObjectContent(this.params.object);
        data.guid = shared_1.Utils.makeguid();
        for (const k in data.properties) {
            if ([_const_1.TYPE_1NR].includes(data.properties[k].type) ||
                ['guid'].includes(data.properties[k].str)) {
                delete data.properties[k];
            }
        }
        const tableName = `${_const_1.API_TABLE_PREFIX_PUBLIC}${data.str}`;
        if (!(await this.makeQuery(`SHOW TABLES LIKE '${tableName}'`)).length) {
            let sql = `CREATE TABLE ${tableName} (`;
            const propertiesSql = [];
            for (const k in this.metadata.systemObjectsContent['system'].properties) {
                propertiesSql.push(shared_1.InertiaCore.getPropertyQuery(this.metadata.systemObjectsContent['system'].properties[k]));
            }
            for (const k in data.properties) {
                if (k.endsWith('.guid')) {
                    continue;
                }
                propertiesSql.push(shared_1.InertiaCore.getPropertyQuery(data.properties[k]));
            }
            sql += propertiesSql.filter(x => x).join(',') + `, PRIMARY KEY (id) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
            await this.makeQuery(sql);
        }
        for (const k in data.properties) {
            if ([_const_1.TYPE_1NL, _const_1.TYPE_1N1].includes(data.properties[k].type)) {
                await this.processTableChange(data.str, { action: 'link', property: data.properties[k] });
            }
        }
        data.createdOn = new Date();
        data.creator = this.connection.userData.$id;
        this.metadata.objectsContent[data.str] = data;
        this.saveObjectsContent();
        return new shared_1.DefaultResponse({ object: { data } }).ok(`${data.str} created`);
    }
    async update() {
        const data = new shared_1.ObjectContent(this.params.object);
        const oldData = new shared_1.ObjectContent(this.metadata.objectsContent[data.str]);
        const mergeResult = data.merge(oldData);
        if (mergeResult.hasChanges) {
            for (const request of mergeResult.log) {
                if ([_const_1.TYPE_1NR].includes(request.property.type)) {
                    continue;
                }
                await this.processTableChange(data.str, request);
            }
            data.updatedOn = new Date();
            data.updatedBy = this.connection.userData.$id;
            this.metadata.objectsContent[data.str] = data;
            this.saveObjectsContent();
            return new shared_1.DefaultResponse({ object: { data } }).ok();
        }
        else {
            return new shared_1.DefaultResponse({ object: { data: true } }).ok('No changes');
        }
    }
    async destroy() {
        try {
            const object = this.metadata.objectsContent[this.params.object.str];
            for (const k in object.properties) {
                if ([_const_1.TYPE_1NR].includes(object.properties[k].type)) {
                    throw `${object.str} is related to ${object.properties[k].str}`;
                }
            }
            for (const k in object.properties) {
                if ([_const_1.TYPE_1NL, _const_1.TYPE_1N1].includes(object.properties[k].type)) {
                    await this.processTableChange(object.str, { action: 'delete', property: object.properties[k] });
                }
            }
            await this.makeQuery(`DROP TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${object.str}`);
            delete this.metadata.objectsContent[object.str];
            this.saveObjectsContent();
            return new shared_1.DefaultResponse({ object: { data: true } }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.destroy, ObjectProcess, ex);
        }
    }
    async processTableChange(objectName, request) {
        try {
            switch (request.action) {
                case 'delete':
                    {
                        const constraintName = `fk_${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName}_${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str}`;
                        await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} DROP CONSTRAINT ${constraintName};`);
                        await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} DROP INDEX ${constraintName};`);
                        if ([_const_1.TYPE_1NL, _const_1.TYPE_1N1].includes(request.property.type)) {
                            const constraintNameInv = `fk_${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str}_${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName}`;
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str} DROP CONSTRAINT ${constraintNameInv};`);
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str} DROP INDEX ${constraintNameInv};`);
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str} DROP COLUMN ${objectName}_id`);
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} DROP COLUMN ${request.property.str}_id`);
                            delete this.metadata.objectsContent[request.property.str].properties[`${objectName}`];
                        }
                        else {
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} DROP COLUMN ${request.property.str}`);
                        }
                    }
                    break;
                case 'create':
                    {
                        const constraintName = `fk_${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName}_${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str}`;
                        const propertySql = shared_1.InertiaCore.getPropertyQuery(request.property);
                        await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} ADD COLUMN ${propertySql}`);
                        if ([_const_1.TYPE_1NL, _const_1.TYPE_1N1].includes(request.property.type)) {
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} ADD CONSTRAINT ${constraintName} FOREIGN KEY(${request.property.str}_id) REFERENCES ${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str}(id);`);
                            let propertyInv;
                            if (request.property.type === _const_1.TYPE_1N1) {
                                propertyInv = new shared_1.ObjectProperty({ str: objectName, type: _const_1.TYPE_1N1 });
                                const propertySqlInv = shared_1.InertiaCore.getPropertyQuery(propertyInv);
                                await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str} ADD COLUMN ${propertySqlInv}`);
                                const constraintNameInv = `fk_${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str}_${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName}`;
                                await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str} ADD CONSTRAINT ${constraintNameInv} FOREIGN KEY(${objectName}_id) REFERENCES ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName}(id);`);
                            }
                            else {
                                propertyInv = new shared_1.ObjectProperty({ str: request.property.name, type: _const_1.TYPE_1N1 });
                            }
                            this.metadata.objectsContent[request.property.str].properties[`${objectName}`] = propertyInv;
                        }
                        else if (request.property.unique) {
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} ADD CONSTRAINT ${constraintName} UNIQUE(${request.property.str})`);
                        }
                    }
                    break;
                case 'update':
                    {
                        const propertySql = shared_1.InertiaCore.getPropertyQuery(request.property);
                        await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} MODIFY COLUMN ${propertySql}`);
                        const constraintName = `fk_${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName}_${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str}`;
                        if ([_const_1.TYPE_1NL, _const_1.TYPE_1N1].includes(request.property.type)) {
                        }
                        else if (request.property.unique) {
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} ADD CONSTRAINT ${constraintName} UNIQUE(${request.property.str})`);
                        }
                        else {
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} DROP CONSTRAINT ${constraintName};`);
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} DROP INDEX ${constraintName};`);
                        }
                    }
                    break;
                case 'link':
                    {
                        const constraintName = `fk_${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName}_${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str}`;
                        if ([_const_1.TYPE_1NL, _const_1.TYPE_1N1].includes(request.property.type)) {
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} ADD CONSTRAINT ${constraintName} FOREIGN KEY(${request.property.str}_id) REFERENCES ${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str}(id);`);
                            let propertyInv;
                            if (request.property.type === _const_1.TYPE_1N1) {
                                propertyInv = new shared_1.ObjectProperty({ str: objectName, type: _const_1.TYPE_1N1 });
                                const propertySqlInv = shared_1.InertiaCore.getPropertyQuery(propertyInv);
                                await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str} ADD COLUMN ${propertySqlInv}`);
                                const constraintNameInv = `fk_${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str}_${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName}`;
                                await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${request.property.str} ADD CONSTRAINT ${constraintNameInv} FOREIGN KEY(${objectName}_id) REFERENCES ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName}(id);`);
                            }
                            else {
                                propertyInv = new shared_1.ObjectProperty({ str: request.property.name, type: _const_1.TYPE_1N1 });
                            }
                            this.metadata.objectsContent[request.property.str].properties[`${objectName}`] = propertyInv;
                        }
                        else if (request.property.unique) {
                            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} ADD CONSTRAINT ${constraintName} UNIQUE(${request.property.str})`);
                        }
                    }
                    break;
            }
        }
        catch (ex) {
            throw ex;
        }
    }
    async makeQuery(sql, output = {}) {
        try {
            await this.connection.run(sql, output);
            return (output === null || output === void 0 ? void 0 : output.response) || 1;
        }
        catch (ex) {
            console.error(ex);
        }
    }
    saveObjectsContent() {
        const objectsJson = {};
        const properties = {};
        for (const k in this.metadata.objectsContent) {
            objectsJson[k] = {
                properties: {}
            };
            for (const propertyName in this.metadata.objectsContent[k].properties) {
                objectsJson[k].properties[this.metadata.objectsContent[k].properties[propertyName].str] = {
                    type: this.metadata.objectsContent[k].properties[propertyName].type,
                    required: this.metadata.objectsContent[k].properties[propertyName].required || undefined,
                    unique: this.metadata.objectsContent[k].properties[propertyName].unique || undefined,
                    writable: this.metadata.objectsContent[k].properties[propertyName].writable || undefined,
                    readable: this.metadata.objectsContent[k].properties[propertyName].readable || undefined,
                    encrypt: this.metadata.objectsContent[k].properties[propertyName].encrypt || undefined
                };
                properties[propertyName] = objectsJson[k].properties[this.metadata.objectsContent[k].properties[propertyName].str];
            }
        }
        shared_1.Utils.createFile(`/tenants/${this.connection.tenant}/content.json`, JSON.stringify(this.metadata.objectsContent));
        shared_1.Utils.createFile(`/tenants/${this.connection.tenant}/objects.json`, JSON.stringify(objectsJson));
        shared_1.Utils.createFile(`/tenants/${this.connection.tenant}/properties.json`, JSON.stringify(properties));
    }
}
exports.ObjectProcess = ObjectProcess;


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReadSchemaParameters = exports.SchemaProcess = exports.SchemaResponse = exports.SchemaParameters = exports.SchemaMetadata = exports.SchemaData = void 0;
const shared_1 = __webpack_require__(9);
const _const_1 = __webpack_require__(12);
class SchemaData {
    constructor() {
        this.dictionaries = {};
        this.recursiveMatrix = [];
        this.schemaMap = [];
        this.currentMap = [];
        this.objectsContent = {};
        this.dbCleaned = false;
    }
}
exports.SchemaData = SchemaData;
class SchemaMetadata {
    constructor() {
        this.systemObjectsContent = {};
    }
}
exports.SchemaMetadata = SchemaMetadata;
class SchemaParameters {
    constructor(params) {
        this.userExt = [];
        this.schema = {};
        this.deepClean = false;
        for (const k in params) {
            if (params[k] !== undefined) {
                this[k] = params[k];
            }
        }
    }
}
exports.SchemaParameters = SchemaParameters;
class SchemaResponse {
}
exports.SchemaResponse = SchemaResponse;
class SchemaProcess {
    constructor(connection, params, metadata) {
        this.connection = connection;
        this.params = params;
        this.metadata = metadata;
        this.data = new SchemaData();
        this.dbName = '';
        this.schema = {};
    }
    async execute() {
        this.dbName = shared_1.InertiaCore.keyWord(`${_const_1.API_DATABASE_PREFIX}${this.params.tenantName}`);
        this.schema = shared_1.Utils.clone(this.params.schema);
        try {
            for (const item of this.params.schema) {
                this.data.recursiveMatrix = [];
                this.data.dictionaries = {};
                this.data.currentMap = [];
                this.recursiveMatrixCreation(item);
                this.createDictionaries();
                this.createSchemaMap();
                this.createTenantObjectsContent();
                await this.migrate();
                this.data.schemaMap.push(this.data.currentMap);
            }
            this.saveObjectsContent();
            return new shared_1.DefaultResponse({ object: { data: this.data } }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.execute, SchemaProcess, ex);
        }
    }
    recursiveMatrixCreation(schema, i = 0, j = 50) {
        if (i++ >= j) {
            throw 'Iddle';
        }
        const record = {};
        const objectName = Object.keys(schema)[0];
        schema[objectName].$guid = shared_1.Utils.makeguid();
        if (schema[objectName].guid) {
            delete schema[objectName].guid;
        }
        if (this.params.userExt && this.params.userExt.includes(objectName) && objectName !== _const_1.API_USERS_TABLE) {
            schema[objectName].$users_11 = true;
            if (!schema[objectName].users) {
                schema[objectName].users = {
                    username: 'text'
                };
            }
        }
        for (const k in schema[objectName]) {
            let v = schema[objectName][k] || '';
            if (Array.isArray(v)) {
                for (const child of v) {
                    child[`$${objectName}`] = _const_1.TYPE_1NL;
                    const item = {};
                    item[k] = child;
                    const rel = this.recursiveMatrixCreation(item, i);
                    if (!record[k]) {
                        record[k] = [];
                    }
                    record[k].push(rel.$guid);
                    record[`$${k}`] = _const_1.TYPE_1NR;
                }
            }
            else if (typeof v === 'object') {
                if (schema[objectName][`$${k}_11`]) {
                    v[`$${objectName}`] = _const_1.TYPE_1N1;
                }
                else {
                    v[`$${objectName}`] = _const_1.TYPE_1NR;
                }
                const item = {};
                item[k] = v;
                const rel = this.recursiveMatrixCreation(item, i);
                record[`$${k}`] = _const_1.TYPE_1NL;
            }
            else if (k.endsWith('_11')) {
                continue;
            }
            else {
                record[k] = v;
            }
        }
        const item = {};
        item[objectName] = record;
        this.data.recursiveMatrix.push(item);
        return record;
    }
    createDictionaries() {
        for (const item of this.data.recursiveMatrix) {
            const objectName = Object.keys(item)[0];
            if (!this.data.dictionaries[objectName]) {
                this.data.dictionaries[objectName] = {};
            }
            Object.assign(this.data.dictionaries[objectName], item[objectName]);
        }
        if (!this.data.dictionaries.users) {
            this.data.dictionaries.users = new shared_1.ObjectContent();
        }
        for (const k in this.metadata.systemObjectsContent.users.properties) {
            this.data.dictionaries.users[k] = this.metadata.systemObjectsContent.users.properties[k].type;
        }
    }
    createSchemaMap() {
        for (const item of this.data.recursiveMatrix) {
            this.scanMap(Object.keys(item)[0]);
        }
    }
    scanMap(objectName) {
        if (this.data.currentMap.includes(objectName) || !this.data.dictionaries[objectName]) {
            return false;
        }
        this.data.currentMap.push(objectName);
        for (const propertyName in this.data.dictionaries[objectName]) {
            const type = this.data.dictionaries[propertyName];
            if (type === _const_1.TYPE_1NL || type === _const_1.TYPE_1N1) {
                this.scanMap(propertyName.substr(1));
            }
        }
    }
    createTenantObjectsContent() {
        for (const objectName of this.data.currentMap) {
            const content = this.data.dictionaries[objectName];
            const properties = {};
            for (let propertyName in content) {
                let type = content[propertyName];
                if (!type || ['$users_11', _const_1.TYPE_GUID].includes(propertyName)) {
                    continue;
                }
                else if (propertyName === _const_1.TYPE_GUID) {
                    type = _const_1.TYPE_GUID;
                }
                if (propertyName[0] === '$') {
                    propertyName = propertyName.substr(1);
                }
                properties[propertyName] = new shared_1.ObjectProperty({
                    str: propertyName,
                    guid: shared_1.Utils.makeguid(),
                    type
                });
            }
            const objectContent = new shared_1.ObjectContent({
                str: objectName,
                guid: shared_1.Utils.makeguid(),
                properties
            });
            if (!this.data.objectsContent[objectName]) {
                this.data.objectsContent[objectName] = objectContent;
            }
            else {
                Object.assign(this.data.objectsContent[objectName].properties, properties);
            }
        }
    }
    async migrate() {
        try {
            await this.createDatabase();
            this.makeQuery(`USE ${this.dbName};`);
            if (!this.data.dbCleaned) {
                await this.dropAllConstraint();
                await this.deleteTables();
                this.data.dbCleaned = true;
            }
            for (const objectName of this.data.currentMap) {
                const objectContent = this.data.objectsContent[objectName];
                const tableName = _const_1.API_TABLE_PREFIX_PUBLIC + objectName;
                if (!(await this.makeQuery(`SHOW TABLES LIKE '${tableName}'`)).length) {
                    let sql = `CREATE TABLE ${tableName} (`;
                    const propertiesSql = [];
                    for (const k in this.metadata.systemObjectsContent.system.properties) {
                        propertiesSql.push(shared_1.InertiaCore.getPropertyQuery(this.metadata.systemObjectsContent.system.properties[k]));
                    }
                    for (const k in objectContent.properties) {
                        if (this.metadata.systemObjectsContent.system.properties[k]) {
                            continue;
                        }
                        propertiesSql.push(shared_1.InertiaCore.getPropertyQuery(objectContent.properties[k]));
                    }
                    sql += propertiesSql.filter(x => x).join(',') + `, PRIMARY KEY (id) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
                    await this.makeQuery(sql);
                }
            }
            for (const objectName of this.data.currentMap) {
                const objectContent = this.data.objectsContent[objectName];
                for (const propertyName in objectContent.properties) {
                    if ([_const_1.TYPE_1NL].includes(objectContent.properties[propertyName].type)) {
                        await this.createRelation(objectName, objectContent.properties[propertyName].str);
                    }
                }
            }
            await this.createPrivateTables();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.migrate, SchemaProcess, ex);
        }
    }
    async createDatabase() {
        var _a;
        try {
            const exists = {};
            await this.makeQuery(`SHOW DATABASES LIKE '${this.dbName}';`, exists);
            if (!((_a = exists.response) === null || _a === void 0 ? void 0 : _a.length)) {
                await this.makeQuery(`CREATE DATABASE ${this.dbName};`);
            }
            return 1;
        }
        catch (ex) {
        }
        return false;
    }
    async createRelation(objectName, propertyName) {
        try {
            const constraintName = `fk_${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName}_${_const_1.API_TABLE_PREFIX_PUBLIC}${propertyName}`;
            if (!(await this.makeQuery(`SELECT * FROM information_schema.TABLE_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='${this.dbName}' AND CONSTRAINT_TYPE='FOREIGN KEY' AND CONSTRAINT_NAME='${constraintName}'`)).length) {
                await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${objectName} ADD CONSTRAINT ${constraintName} FOREIGN KEY(${propertyName}_id) REFERENCES ${_const_1.API_TABLE_PREFIX_PUBLIC}${propertyName}(id);`);
            }
        }
        catch (ex) {
            throw new shared_1.DefaultResponse(ex).exception(this.createRelation, SchemaProcess, ex);
        }
    }
    async dropAllConstraint() {
        var _a;
        const constraintNames = await this.makeQuery(`SELECT DISTINCT(constraint_name) FROM information_schema.table_constraints WHERE constraint_schema='${this.dbName}' ORDER BY constraint_name ASC;`);
        if (constraintNames === null || constraintNames === void 0 ? void 0 : constraintNames.length) {
            for (const item of constraintNames) {
                try {
                    const v = ((_a = item.constraint_name) === null || _a === void 0 ? void 0 : _a.split('_')) || [];
                    if (!v[2]) {
                        continue;
                    }
                    await this.removeForeignKey(v[2], item.constraint_name);
                }
                catch (ex) {
                }
            }
        }
    }
    async removeForeignKey(table, key) {
        try {
            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${table} DROP CONSTRAINT ${key};`);
            await this.makeQuery(`ALTER TABLE ${_const_1.API_TABLE_PREFIX_PUBLIC}${table} DROP INDEX ${key};`);
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.removeForeignKey, SchemaProcess, ex);
        }
    }
    async deleteTables() {
        for (let i = 0; i < 5; i++) {
            const tables = await this.makeQuery(`SHOW TABLES`);
            if (tables instanceof Array) {
                for (const table of tables) {
                    try {
                        const tableName = Object.values(table)[0];
                        await this.makeQuery(`DROP TABLE ${tableName}`);
                    }
                    catch (ex) {
                    }
                }
            }
        }
    }
    async createPrivateTables() {
        try {
            await this.createPrivateTable(_const_1.API_PARAMETERS_TABLE);
            await this.createPrivateTable(_const_1.API_LOGS_TABLE);
            await this.createPrivateTable(_const_1.API_CLIENTAPPS_TABLE);
            await this.createPrivateTable(_const_1.API_ROLES_TABLE);
            await this.createPrivateTable(_const_1.API_USERSXROLES_TABLE);
            await this.createPrivateTable(_const_1.API_CHUNKS_TABLE);
            await this.createPrivateTable(_const_1.API_USERSXCHUNKS_TABLE);
            await this.createPrivateTable(_const_1.API_TRANSLATIONS_TABLE);
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.createPrivateTables, SchemaProcess, ex);
        }
    }
    async createPrivateTable(tableName) {
        const exists = await this.makeQuery(`SHOW TABLES LIKE '${_const_1.API_TABLE_PREFIX_PRIVATE}${tableName}'`);
        if (this.params.deepClean) {
            if (exists.length) {
                await this.makeQuery(`DROP TABLE ${_const_1.API_TABLE_PREFIX_PRIVATE}${tableName}`);
            }
        }
        if (!exists.length) {
            let sql = `CREATE TABLE ${_const_1.API_TABLE_PREFIX_PRIVATE}${tableName} (`;
            const propertiesSql = [];
            for (const k in this.metadata.systemObjectsContent.system.properties) {
                propertiesSql.push(shared_1.InertiaCore.getPropertyQuery(this.metadata.systemObjectsContent.system.properties[k]));
            }
            for (const k in this.metadata.systemObjectsContent[tableName].properties) {
                if (k.endsWith('.guid')) {
                    continue;
                }
                propertiesSql.push(shared_1.InertiaCore.getPropertyQuery(this.metadata.systemObjectsContent[tableName].properties[k]));
            }
            sql += propertiesSql.filter(x => x).join(',') + `, PRIMARY KEY (id) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
            await this.makeQuery(sql);
        }
        return true;
    }
    async makeQuery(sql, output = {}) {
        try {
            await this.connection.run(sql, output);
            return (output === null || output === void 0 ? void 0 : output.response) || 1;
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.makeQuery, SchemaProcess, ex);
        }
    }
    saveObjectsContent() {
        try {
            const content = {};
            const properties = {};
            const authorizations = {};
            const actions = {};
            for (const k in this.data.objectsContent) {
                authorizations[k] = new shared_1.ObjectAuthorization();
                content[k] = { guid: this.data.objectsContent[k].guid, properties: {} };
                delete this.data.objectsContent[k].properties[`${k}.guid`];
                for (const propertyName in this.data.objectsContent[k].properties) {
                    content[k].properties[this.data.objectsContent[k].properties[propertyName].str] = {
                        type: this.data.objectsContent[k].properties[propertyName].type,
                        guid: this.data.objectsContent[k].properties[propertyName].guid
                    };
                    properties[`${k}.${this.data.objectsContent[k].properties[propertyName].str}`] = {
                        type: this.data.objectsContent[k].properties[propertyName].type,
                        guid: this.data.objectsContent[k].properties[propertyName].guid
                    };
                }
            }
            shared_1.Utils.createFile(`/tenants/${this.params.tenantName}/content.json`, JSON.stringify(this.data.objectsContent));
            shared_1.Utils.createFile(`/tenants/${this.params.tenantName}/objects.json`, JSON.stringify(content));
            shared_1.Utils.createFile(`/tenants/${this.params.tenantName}/properties.json`, JSON.stringify(properties));
            const schema = {};
            schema.userExtensions = this.params.userExt || [];
            schema.atlas = this.data.schemaMap;
            shared_1.Utils.createFile(`/tenants/${this.params.tenantName}/schema.json`, JSON.stringify(schema));
            shared_1.Utils.createFile(`/tenants/${this.params.tenantName}/structure.json`, JSON.stringify(this.schema));
            shared_1.Utils.createFile(`/tenants/${this.params.tenantName}/authorizations.json`, JSON.stringify(authorizations));
            shared_1.Utils.createFile(`/tenants/${this.params.tenantName}/actions.json`, JSON.stringify(actions));
            shared_1.Utils.createDirectory(`/tenants/${this.params.tenantName}/dictionaries`);
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.saveObjectsContent, SchemaProcess, ex);
        }
    }
}
exports.SchemaProcess = SchemaProcess;
class ReadSchemaParameters {
    constructor(params) {
        for (const k in params) {
            if (params[k] !== undefined) {
                this[k] = params[k];
            }
        }
    }
}
exports.ReadSchemaParameters = ReadSchemaParameters;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteTenantParameters = exports.CreateTenantParameters = void 0;
class CreateTenantParameters {
    constructor(params) {
        for (const k in params) {
            if (params[k] !== undefined) {
                this[k] = params[k];
            }
        }
    }
}
exports.CreateTenantParameters = CreateTenantParameters;
class DeleteTenantParameters {
    constructor(params) {
        for (const k in params) {
            if (params[k] !== undefined) {
                this[k] = params[k];
            }
        }
    }
}
exports.DeleteTenantParameters = DeleteTenantParameters;


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ObjectsService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectsService = void 0;
const common_1 = __webpack_require__(4);
const graph_entity_1 = __webpack_require__(29);
const objects_entity_1 = __webpack_require__(45);
const shared_1 = __webpack_require__(9);
const _const_1 = __webpack_require__(12);
let ObjectsService = ObjectsService_1 = class ObjectsService {
    async upsert(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, params.tenantName);
        try {
            if (!params.object.str) {
                throw `Object not defined`;
            }
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const metadata = new objects_entity_1.UpsertObjectMetadata();
            metadata.objectsContent = await _metadataService.getObjectsContent().object.data;
            metadata.systemObjectsContent = await _metadataService.getObjectsContent({ system: true }).object.data;
            ;
            result = await new objects_entity_1.ObjectProcess(connection, params, metadata).upsert();
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.upsert, ObjectsService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async destroy(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, params.tenantName);
        try {
            if (!params.object.str) {
                throw `Object not defined`;
            }
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const metadata = new objects_entity_1.UpsertObjectMetadata();
            metadata.objectsContent = await _metadataService.getObjectsContent().object.data;
            result = await new objects_entity_1.ObjectProcess(connection, params, metadata).destroy();
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.destroy, ObjectsService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async read(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, params.tenantName);
        try {
            if (!params.filters) {
                params.filters = {};
            }
            if (!params.orderBy) {
                params.orderBy = {};
            }
            if (params.pagination) {
                params.pagination = new shared_1.Pagination(params.pagination);
            }
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const objectsContent = await _metadataService.getObjectsContent().object.data;
            let objects = Object.values(objectsContent);
            for (let i = 0; i < objects.length; ++i) {
                if (params.filters.str) {
                    if (!objects[i].str.includes(params.filters.str)) {
                        objects.splice(i--, 1);
                    }
                }
                if (params.filters.guid) {
                    if (objects[i].guid !== params.filters.guid) {
                        objects.splice(i--, 1);
                    }
                }
            }
            if (Object.keys(params.orderBy).length) {
                const k = Object.keys(params.orderBy)[0];
                if (!['asc', 'desc'].includes(params.orderBy[k])) {
                    throw `Invalid sort parameter`;
                }
                if (objects.length) {
                    if (objects[0][k] !== undefined) {
                        objects = objects.sort((a, b) => params.orderBy[k] === 'desc' ? a[k] > b[k] ? -1 : 1 : b[k] < a[k] ? 1 : -1);
                    }
                }
            }
            result = new shared_1.DefaultResponse({
                object: {
                    data: {
                        objects: params.pagination ? params.pagination.paginate(objects) : objects,
                        pagination: params.pagination ? params.pagination.get(objects) : null
                    }
                }
            }).ok();
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.read, ObjectsService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async getTenant(payload, tenantName) {
        var _a, _b, _c;
        let result = null;
        const connection = await new shared_1.Connection().startPublic(payload);
        try {
            const _metadataService = new shared_1.MetadataService(connection);
            result = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: _const_1.API_TENANTS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: {
                    $guid: [{ 'op': _const_1.OP_EQUALS, val: tenantName }]
                },
                pagination: {
                    page: 1,
                    pageSize: 1
                }
            }));
            if (!((_c = (_b = (_a = result.object) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.tenants) === null || _c === void 0 ? void 0 : _c.$id)) {
                throw `Tenant ${tenantName} does not exists`;
            }
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.getTenant, ObjectsService_1, ex);
        }
        finally {
            connection.end();
        }
        return result;
    }
};
ObjectsService = ObjectsService_1 = __decorate([
    (0, common_1.Injectable)()
], ObjectsService);
exports.ObjectsService = ObjectsService;


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaService = void 0;
const common_1 = __webpack_require__(4);
const crud_entity_1 = __webpack_require__(27);
const graph_entity_1 = __webpack_require__(29);
const schema_entity_1 = __webpack_require__(46);
const shared_1 = __webpack_require__(9);
const _const_1 = __webpack_require__(12);
let SchemaService = SchemaService_1 = class SchemaService {
    async create(payload, params, _connection = null) {
        var _a;
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startPublic(payload);
        try {
            const _metadataService = new shared_1.MetadataService(connection);
            const metadata = new schema_entity_1.SchemaMetadata();
            metadata.systemObjectsContent = await _metadataService.getObjectsContent({ system: true }).object.data;
            result = await new schema_entity_1.SchemaProcess(connection, params, metadata).execute();
            if (!((_a = result.object) === null || _a === void 0 ? void 0 : _a.data)) {
                throw `Could not create schema`;
            }
            _metadataService.connection = await new shared_1.Connection().startProtected(payload, params.tenantName);
            await this.insertDefaultValues(_metadataService, params, result.object.data.objectsContent);
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.create, SchemaService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async read(payload, params, _connection = null) {
        var _a, _b, _c, _d, _e;
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startPublic(payload);
        try {
            const _metadataService = new shared_1.MetadataService(connection);
            const exists = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: _const_1.API_TENANTS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: {
                    $guid: [{ 'op': _const_1.OP_EQUALS, val: params.tenantName }]
                },
                pagination: {
                    page: 1,
                    pageSize: 1
                }
            }));
            if (!((_c = (_b = (_a = exists.object) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.tenants) === null || _c === void 0 ? void 0 : _c.$id)) {
                throw `Tenant does not exists`;
            }
            const schema = (_e = (_d = _metadataService.getSchema(params.tenantName)) === null || _d === void 0 ? void 0 : _d.object) === null || _e === void 0 ? void 0 : _e.data;
            if (!schema) {
                result = new shared_1.DefaultResponse({ object: { data: null } }).ok('Schema is empty');
            }
            else {
                result = new shared_1.DefaultResponse({ object: { data: schema } }).ok();
            }
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.create, SchemaService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async insertDefaultValues(_metadataService, params, objectsContent) {
        try {
            _metadataService.connection.systemKey = shared_1.Utils.makeguid();
            await shared_1.SqlHelper.setTenantSystemKey(_metadataService.connection);
            await _metadataService.objectCrud(new crud_entity_1.CrudParameters({
                root: 'parameters',
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: [{
                        paramKey: 'allowMultiSession',
                        paramValue: 'false'
                    }, {
                        paramKey: 'allowGroupSegmentation',
                        paramValue: 'true'
                    }, {
                        paramKey: 'allowUserRegistration',
                        paramValue: 'true'
                    }, {
                        paramKey: 'emailConfirmRegistration',
                        paramValue: 'true'
                    }, {
                        paramKey: 'maxLoginFailedCount',
                        paramValue: '3'
                    }, {
                        paramKey: 'sessionDuration',
                        paramValue: `${60 * 20 * 1000}`
                    }, {
                        paramKey: 'authorizationLevel',
                        paramValue: '10'
                    }]
            }));
            for (const userExt of params.userExt) {
                if (Object.keys(objectsContent).includes(userExt)) {
                    await _metadataService.objectCrud(new crud_entity_1.CrudParameters({
                        root: _const_1.API_ROLES_TABLE,
                        moduleExtension: _const_1.API_MODULE_AUTO,
                        schema: {
                            name: objectsContent[userExt].str,
                            meta: userExt.toLowerCase(),
                            isUserExtension: true
                        }
                    }));
                }
            }
            await _metadataService.objectCrud(new crud_entity_1.CrudParameters({
                root: _const_1.API_USERS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: {
                    username: 'system',
                    password: 'secret',
                    usersxroles: [{
                            roles: {
                                name: 'System',
                                meta: 'system',
                                isUserExtension: true,
                                _create: 10,
                                _update: 10,
                                _delete: 10,
                                _read: 10,
                                _share: 10,
                                _transfer: 10,
                                _clientapp: 10,
                                $rule: 'readonly'
                            }
                        }]
                }
            }));
            return true;
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().error(ex).exception(this.insertDefaultValues, SchemaService_1);
        }
    }
};
SchemaService = SchemaService_1 = __decorate([
    (0, common_1.Injectable)()
], SchemaService);
exports.SchemaService = SchemaService;


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TenantService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantService = void 0;
const common_1 = __webpack_require__(4);
const crud_entity_1 = __webpack_require__(27);
const graph_entity_1 = __webpack_require__(29);
const shared_1 = __webpack_require__(9);
const _const_1 = __webpack_require__(12);
let TenantService = TenantService_1 = class TenantService {
    async createTenant(payload, params, _connection = null) {
        var _a, _b, _c;
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, _const_1.CORE);
        try {
            const _metadataService = new shared_1.MetadataService(connection);
            const exists = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: _const_1.API_TENANTS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: {
                    alias: [{ 'op': _const_1.OP_EQUALS, val: params.tenantName }]
                },
                pagination: {
                    page: 1,
                    pageSize: 1
                }
            }));
            if ((_c = (_b = (_a = exists.object) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.tenants) === null || _c === void 0 ? void 0 : _c.$id) {
                throw `Tenant ${params.tenantName} already exists`;
            }
            result = await _metadataService.objectCrud(new crud_entity_1.CrudParameters({
                root: _const_1.API_TENANTS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: {
                    alias: params.tenantName,
                    dbconnection: {
                        username: '',
                        pass: '',
                        host: '',
                        port: ''
                    }
                }
            }));
            if (!result.status) {
                throw result;
            }
            shared_1.Utils.createDirectory(`/tenants/${result.object.data.tenants.$guid}`);
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.createTenant, TenantService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async deleteTenant(payload, params, _connection = null) {
        var _a, _b, _c, _d, _e;
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, _const_1.CORE);
        try {
            const _metadataService = new shared_1.MetadataService(connection);
            const exists = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: _const_1.API_TENANTS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: {
                    alias: [{ 'op': _const_1.OP_EQUALS, val: params.tenantName }]
                },
                pagination: {
                    page: 1,
                    pageSize: 1
                }
            }));
            if (!((_c = (_b = (_a = exists.object) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.tenants) === null || _c === void 0 ? void 0 : _c.$id)) {
                throw `Tenant ${params.tenantName} does not exists`;
            }
            const tenant = (_e = (_d = exists.object) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.tenants;
            tenant.$remove = true;
            result = await _metadataService.objectCrud(new crud_entity_1.CrudParameters({
                root: _const_1.API_TENANTS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: tenant
            }));
            if (!result.status) {
                throw result;
            }
            shared_1.Utils.deleteDirectory(`/tenants/${tenant.$guid}`);
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.deleteTenant, TenantService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
};
TenantService = TenantService_1 = __decorate([
    (0, common_1.Injectable)()
], TenantService);
exports.TenantService = TenantService;


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReadAuthorizationDto = exports.UpsertAuthorizationDto = void 0;
class UpsertAuthorizationDto {
}
exports.UpsertAuthorizationDto = UpsertAuthorizationDto;
class ReadAuthorizationDto {
}
exports.ReadAuthorizationDto = ReadAuthorizationDto;


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReadAuthorizationParameters = exports.UpsertAuthorizationParameters = exports.Authorization = void 0;
class Authorization {
    constructor(params = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.Authorization = Authorization;
class UpsertAuthorizationParameters {
    constructor(params = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.UpsertAuthorizationParameters = UpsertAuthorizationParameters;
class ReadAuthorizationParameters {
    constructor(params = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.ReadAuthorizationParameters = ReadAuthorizationParameters;


/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthorizationsService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorizationsService = void 0;
const common_1 = __webpack_require__(4);
const graph_entity_1 = __webpack_require__(29);
const shared_1 = __webpack_require__(9);
const _const_1 = __webpack_require__(12);
const authorizations_entity_1 = __webpack_require__(52);
let AuthorizationsService = AuthorizationsService_1 = class AuthorizationsService {
    async upsert(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, params.tenantName);
        try {
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const authorizations = await _metadataService.getAuthorizations().object.data;
            if (!authorizations[params.root]) {
                throw `Object does not exists`;
            }
            authorizations[params.root] = new authorizations_entity_1.Authorization(params.authorization);
            result = _metadataService.saveAuthorizations(authorizations);
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.upsert, AuthorizationsService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async read(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, params.tenantName);
        try {
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const authorizations = await _metadataService.getAuthorizations().object.data;
            if (!authorizations[params.root]) {
                throw `Object does not exists`;
            }
            const authorization = new authorizations_entity_1.Authorization(authorizations[params.root]);
            result = new shared_1.DefaultResponse({
                object: {
                    data: authorization
                }
            }).ok();
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.read, AuthorizationsService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async getTenant(payload, tenantName) {
        var _a, _b, _c;
        let result = null;
        const connection = await new shared_1.Connection().startPublic(payload);
        try {
            const _metadataService = new shared_1.MetadataService(connection);
            result = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: _const_1.API_TENANTS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: {
                    $guid: [{ 'op': _const_1.OP_EQUALS, val: tenantName }]
                },
                pagination: {
                    page: 1,
                    pageSize: 1
                }
            }));
            if (!((_c = (_b = (_a = result.object) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.tenants) === null || _c === void 0 ? void 0 : _c.$id)) {
                throw `Tenant ${tenantName} does not exists`;
            }
        }
        catch (ex) {
            throw new shared_1.DefaultResponse().exception(this.getTenant, AuthorizationsService_1, ex);
        }
        finally {
            connection.end();
        }
        return result;
    }
};
AuthorizationsService = AuthorizationsService_1 = __decorate([
    (0, common_1.Injectable)()
], AuthorizationsService);
exports.AuthorizationsService = AuthorizationsService;


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ActionsService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionsService = void 0;
const common_1 = __webpack_require__(4);
const graph_entity_1 = __webpack_require__(29);
const action_entity_1 = __webpack_require__(55);
const shared_1 = __webpack_require__(9);
const _const_1 = __webpack_require__(12);
const action_entity_2 = __webpack_require__(55);
let ActionsService = ActionsService_1 = class ActionsService {
    async crud(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, params.tenantName);
        try {
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const objectsContent = await _metadataService.getObjectsContent().object.data;
            if (!objectsContent[params.root]) {
                throw `Object ${params.root} does not exists`;
            }
            const actions = await _metadataService.getActions().object.data;
            if (!actions[params.root]) {
                actions[params.root] = new action_entity_1.ActionList();
            }
            if (!actions[params.root][params.type]) {
                throw `Action type invalid`;
            }
            const exists = actions[params.root][params.type].find(x => x.name === params.action.name);
            if (exists) {
                Object.assign(exists, params.action);
            }
            else {
                actions[params.root][params.type].push(new action_entity_2.Action(params.action));
            }
            result = _metadataService.saveActions(actions, params.type, params.action.name, params.code);
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.crud, ActionsService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async destroy(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, params.tenantName);
        try {
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const objectsContent = await _metadataService.getObjectsContent().object.data;
            if (!objectsContent[params.root]) {
                throw `Object ${params.root} does not exists`;
            }
            const actions = await _metadataService.getActions().object.data;
            if (!actions[params.root]) {
                actions[params.root] = new action_entity_1.ActionList();
            }
            if (!actions[params.root][params.type]) {
                throw `Action type invalid`;
            }
            const index = actions[params.root][params.type].findIndex(x => x.name === params.action.name);
            if (index >= 0) {
                actions[params.root][params.type].splice(index, 1);
            }
            else {
                throw `Action does not exists`;
            }
            result = _metadataService.saveActions(actions) && _metadataService.deleteAction(params.type, params.action.name);
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.crud, ActionsService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async get(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, params.tenantName);
        try {
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const objectsContent = await _metadataService.getObjectsContent().object.data;
            if (!objectsContent[params.root]) {
                throw `Object ${params.root} does not exists`;
            }
            const actions = await _metadataService.getActions().object.data;
            if (!actions[params.root]) {
                actions[params.root] = new action_entity_1.ActionList();
            }
            if (!actions[params.root][params.type]) {
                throw `Action type invalid`;
            }
            const exists = actions[params.root][params.type].find(x => x.name === params.action.name);
            if (!exists) {
                throw `Action does not exists`;
            }
            result = _metadataService.getAction(params.type, params.action.name);
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.crud, ActionsService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async read(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, params.tenantName);
        try {
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const objectsContent = await _metadataService.getObjectsContent().object.data;
            if (!objectsContent[params.root]) {
                throw `Object ${params.root} does not exists`;
            }
            const actions = await _metadataService.getActions().object.data;
            if (!actions[params.root]) {
                actions[params.root] = new action_entity_1.ActionList();
            }
            result = new shared_1.DefaultResponse({
                object: {
                    data: actions[params.root]
                }
            }).ok();
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.read, ActionsService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async getTenant(payload, tenantName) {
        var _a, _b, _c;
        let result = null;
        const connection = await new shared_1.Connection().startPublic(payload);
        try {
            const _metadataService = new shared_1.MetadataService(connection);
            result = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: _const_1.API_TENANTS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: {
                    $guid: [{ 'op': _const_1.OP_EQUALS, val: tenantName }]
                },
                pagination: {
                    page: 1,
                    pageSize: 1
                }
            }));
            if (!((_c = (_b = (_a = result.object) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.tenants) === null || _c === void 0 ? void 0 : _c.$id)) {
                throw `Tenant ${tenantName} does not exists`;
            }
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.getTenant, ActionsService_1, ex);
        }
        finally {
            connection.end();
        }
        return result;
    }
};
ActionsService = ActionsService_1 = __decorate([
    (0, common_1.Injectable)()
], ActionsService);
exports.ActionsService = ActionsService;


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetActionParameters = exports.ReadActionsParameters = exports.CrudActionParameters = exports.ActionList = exports.Action = void 0;
class Action {
    constructor(params = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.Action = Action;
class ActionList {
    constructor(params = null) {
        this.beforeSelect = [];
        this.afterSelect = [];
        this.beforeCrud = [];
        this.afterCrud = [];
        this.customPublic = [];
        this.customPrivate = [];
        this.customProtected = [];
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.ActionList = ActionList;
class CrudActionParameters {
    constructor(params = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.CrudActionParameters = CrudActionParameters;
class ReadActionsParameters {
    constructor(params = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.ReadActionsParameters = ReadActionsParameters;
class GetActionParameters {
    constructor(params = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.GetActionParameters = GetActionParameters;


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetActionsDto = exports.ReadActionsDto = exports.CrudActionsDto = void 0;
class CrudActionsDto {
}
exports.CrudActionsDto = CrudActionsDto;
class ReadActionsDto {
}
exports.ReadActionsDto = ReadActionsDto;
class GetActionsDto {
}
exports.GetActionsDto = GetActionsDto;


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BridgesService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BridgesService = void 0;
const common_1 = __webpack_require__(4);
const graph_entity_1 = __webpack_require__(29);
const shared_1 = __webpack_require__(9);
const _const_1 = __webpack_require__(12);
const crud_entity_1 = __webpack_require__(27);
let BridgesService = BridgesService_1 = class BridgesService {
    async crud(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startProtected(payload, params.tenantName);
        try {
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const objectsContent = await _metadataService.getObjectsContent().object.data;
            if (!objectsContent[params.root]) {
                throw `Object ${params.root} does not exists`;
            }
            result = await _metadataService.objectCrud(new crud_entity_1.CrudParameters(Object.assign(Object.assign({}, params.data), { root: params.root, moduleExtension: _const_1.API_MODULE_AUTO })));
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.crud, BridgesService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async select(payload, params, _connection = null) {
        let result = null;
        const connection = _connection !== null && _connection !== void 0 ? _connection : await new shared_1.Connection().startPrivate(params.tenantName);
        try {
            await this.getTenant(payload, params.tenantName);
            const _metadataService = new shared_1.MetadataService(connection);
            const objectsContent = await _metadataService.getObjectsContent().object.data;
            const systemObjectsContent = await _metadataService.getObjectsContent({ system: true }).object.data;
            if (!objectsContent[params.root] && !systemObjectsContent[params.root]) {
                throw `Object ${params.root} does not exists`;
            }
            result = await _metadataService.objectGraph(new graph_entity_1.GraphParameters(Object.assign(Object.assign({}, params.data), { root: params.root, moduleExtension: _const_1.API_MODULE_AUTO })));
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.select, BridgesService_1, ex);
        }
        finally {
            if (!_connection) {
                connection.end();
            }
        }
        return result;
    }
    async getTenant(payload, tenantName) {
        var _a, _b, _c;
        let result = null;
        const connection = await new shared_1.Connection().startPublic(payload);
        try {
            const _metadataService = new shared_1.MetadataService(connection);
            result = await _metadataService.objectGraph(new graph_entity_1.GraphParameters({
                root: _const_1.API_TENANTS_TABLE,
                moduleExtension: _const_1.API_MODULE_AUTO,
                schema: {
                    $guid: [{ 'op': _const_1.OP_EQUALS, val: tenantName }]
                },
                pagination: {
                    page: 1,
                    pageSize: 1
                }
            }));
            if (!((_c = (_b = (_a = result.object) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.tenants) === null || _c === void 0 ? void 0 : _c.$id)) {
                throw `Tenant ${tenantName} does not exists`;
            }
        }
        catch (ex) {
            result = new shared_1.DefaultResponse().exception(this.getTenant, BridgesService_1, ex);
        }
        finally {
            connection.end();
        }
        return result;
    }
};
BridgesService = BridgesService_1 = __decorate([
    (0, common_1.Injectable)()
], BridgesService);
exports.BridgesService = BridgesService;


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BridgeParameters = void 0;
class BridgeParameters {
    constructor(params = null) {
        if (params) {
            for (const property in params) {
                if (params.hasOwnProperty(property)) {
                    this[property] = params[property];
                }
            }
        }
    }
}
exports.BridgeParameters = BridgeParameters;


/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(4);
const auth_controller_1 = __webpack_require__(60);
const shared_module_1 = __webpack_require__(39);
const session_service_1 = __webpack_require__(32);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [session_service_1.SessionService],
        imports: [shared_module_1.SharedModule]
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(4);
const shared_1 = __webpack_require__(9);
const login_dto_1 = __webpack_require__(61);
const register_dto_1 = __webpack_require__(62);
const reset_dto_1 = __webpack_require__(63);
const login_entity_1 = __webpack_require__(33);
const register_entity_1 = __webpack_require__(36);
const reset_entity_1 = __webpack_require__(64);
const session_service_1 = __webpack_require__(32);
let AuthController = class AuthController {
    constructor(_sessionService) {
        this._sessionService = _sessionService;
    }
    login(tenantName, userExtension, loginDto) {
        try {
            return this._sessionService.login(new login_entity_1.LoginParameters(Object.assign({ tenantName, userExtension }, loginDto)));
        }
        catch (ex) {
            return ex;
        }
    }
    refresh(payload) {
        try {
            return this._sessionService.refresh(payload);
        }
        catch (ex) {
            return ex;
        }
    }
    logout(payload) {
        try {
            return this._sessionService.logout(payload);
        }
        catch (ex) {
            return ex;
        }
    }
    register(tenantName, userExtension, registerDto) {
        try {
            return this._sessionService.register(new register_entity_1.RegisterParameters(Object.assign({ tenantName, userExtension }, registerDto)));
        }
        catch (ex) {
            return ex;
        }
    }
    reset(payload, resetDto) {
        try {
            return this._sessionService.reset(payload, new reset_entity_1.ResetParameters(resetDto));
        }
        catch (ex) {
            return ex;
        }
    }
};
__decorate([
    (0, common_1.Post)('login/:tenantName/:userExtension'),
    __param(0, (0, common_1.Param)('tenantName')),
    __param(1, (0, common_1.Param)('userExtension')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_b = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, shared_1.Authenticable)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, shared_1.Authenticable)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('register/:tenantName/:userExtension'),
    __param(0, (0, common_1.Param)('tenantName')),
    __param(1, (0, common_1.Param)('userExtension')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('reset'),
    __param(0, (0, shared_1.Authenticable)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_d = typeof reset_dto_1.ResetDto !== "undefined" && reset_dto_1.ResetDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "reset", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof session_service_1.SessionService !== "undefined" && session_service_1.SessionService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
class LoginDto {
}
exports.LoginDto = LoginDto;


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = void 0;
class RegisterDto {
}
exports.RegisterDto = RegisterDto;


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetDto = void 0;
class ResetDto {
}
exports.ResetDto = ResetDto;


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetMetadata = exports.ResetParameters = void 0;
class ResetParameters {
    constructor(params) {
        if (params) {
            for (const k in params) {
                if (params[k] !== undefined) {
                    this[k] = params[k];
                }
            }
        }
    }
}
exports.ResetParameters = ResetParameters;
class ResetMetadata {
    constructor() {
        this.objectsContent = {};
        this.systemObjectsContent = {};
        this.schema = {};
    }
}
exports.ResetMetadata = ResetMetadata;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors({
        origin: '*',
        methods: 'GET, PUT, POST, DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    });
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;