module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('wp_posts', {
        post_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        guid: {
            type: DataTypes.STRING,
        },
    }, {
        timestamps: false
    })

    return Movie
}