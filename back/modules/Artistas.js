import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Login from "./Login.js"

const Artistas = sequelize.define("Artistas", {
    id: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, defaultValue: sequelize.literal("nextval('id_login')")
    },
    nome: {
        type: DataTypes.STRING, allowNull: false
    },
    foto: {
        type: DataTypes.STRING, allowNull: false
    },
    id_login: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: { model: Login, key: "id" }
    }
},
    {
        freezeTableName: true,
        timestamps: false
    }
)

Artistas.belongsTo(Login, { foreignKey: "id_login" });

export default Artistas