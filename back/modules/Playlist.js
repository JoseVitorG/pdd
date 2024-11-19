import { DataTypes, QueryTypes } from "sequelize";
import sequelize from "../db.js";
import Musicas from "./Musicas.js";
import Artistas from "./Artistas.js";

const Playlists = sequelize.define("Playlists", {
    id: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, defaultValue: sequelize.literal("nextval('id_historico')")
    },
    nome: {
        type: DataTypes.STRING, allowNull: false
    },
    foto:{
        type: DataTypes.STRING, allowNull: false
    },
    id_musica:{
        type: DataTypes.INTEGER, allowNull: false, foreignKey: { model: Musicas, key: "id" }
    },
    id_artistas:{
        type: DataTypes.INTEGER, allowNull: false, foreignKey: { model: Artistas, key: "id" }
    }
},
    {
        freezeTableName: true,
        timestamps: false
    }

)

Playlists.belongsTo(Musicas, { foreignKey: "id_musica" });
Playlists.belongsTo(Artistas, { foreignKey: "id_artistas" });

export default Playlists