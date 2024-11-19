import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Albuns from "./Albuns.js";

const Musicas = sequelize.define("Musicas", {
    id: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, defaultValue: sequelize.literal("nextval('id_login')")
    },
    nome: {
        type: DataTypes.STRING, allowNull: false
    },
    foto: {
        type: DataTypes.STRING, allowNull: false
    },
    data_lancamento:{
        type: DataTypes.DATE, allowNull: false
    },
    id_album: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: { model: Albuns, key: "id" }
    }
},
    {
        freezeTableName: true,
        timestamps: false
    }
)

Musicas.belongsTo(Albuns, { foreignKey: "id_album" });

export default Musicas