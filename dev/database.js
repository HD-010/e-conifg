var database = {
    
    Mysql : {
        typeName: 'Mysql',           //数据库类型名称
        host    : 'localhost',
        port    : '3306',
        user    : 'root',
        password: 'root',
        database: 'youbang',
        prefixed: 'youbang_'
    },

    Mariadb : {
        typeName: 'Mariadb',     //数据库类型名称
        host    : 'localhost',
        user    : 'root',
        password: '123456',
        database: 'test'
    },

    Redis : {
        typeName: 'Redis',
        port: 6379,
        host: '127.0.0.1',
        prefixed : 'YOUBANG_'
    }


}

exports.database = database;