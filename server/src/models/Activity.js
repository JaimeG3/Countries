const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define ('Activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              min: 1,
              max: 5,
            },
          },
          duracion: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          temporada: {
            type: DataTypes.ENUM('otoño', 'invierno', 'primavera', 'verano'),
            allowNull: false,
          },
        },
    );
  };