module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        penulis: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        penerbit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        imageType: DataTypes.STRING,
        imagePath: DataTypes.STRING,
        imageFile: DataTypes.BLOB,
    }, {
        tableName: 'komik',

    });
    return Komik;
};