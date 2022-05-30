module.exports = {
    HOST: 'localhost',
    USER: 'fdtuser',
    PASSWORD: '493167',
    DB: 'fdt',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        }

}