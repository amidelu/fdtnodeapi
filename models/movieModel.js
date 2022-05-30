module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('movie', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        overview: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        posterUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        releaseDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shortUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        downloadUrl: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })

    return Movie
}