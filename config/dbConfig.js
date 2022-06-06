// Production
module.exports = {
    HOST: 'localhost',
    USER: 'apidbuser',
    PASSWORD: 'Ewia!@#$221ijkIUO~',
    DB: 'apifdtdb',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        }

}

// Development
/* module.exports = {
    HOST: 'localhost',
    USER: 'fdtmobileuser',
    PASSWORD: 'EkdkjapP#Q%%lkd5318',
    DB: 'fdtmobile',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        }

} */