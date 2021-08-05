'use strict';

import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'TypeORMInstance',
        useFactory: async () => await createConnection({
            type: 'mssql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'wo4760334',
            database: 'nest',
            entities: [
                __dirname + '/user/*.entity{.ts,.js}'
            ]
        })
    }
]