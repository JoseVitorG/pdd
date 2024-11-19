import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Artistas from "./Artistas.js";

const Albuns = sequelize.define("Albuns", {
    id: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, defaultValue: sequelize.literal("nextval('id_login')")
    },
    nome: {
        type: DataTypes.STRING, allowNull: false
    },
    foto: {
        type: DataTypes.STRING, allowNull: false
    },
    id_artista: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: { model: Artistas, key: "id" }
    }
},
    {
        freezeTableName: true,
        timestamps: false
    }
)

Albuns.belongsTo(Artistas, { foreignKey: "id_artista" });

export default Albuns