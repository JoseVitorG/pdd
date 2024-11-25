import { DataTypes, QueryTypes } from "sequelize";
import sequelize from "../db.js";
import Musicas from "./Musicas.js";
import Artistas from "./Artistas.js";

const Playlists = sequelize.define("Playlists", {
    id: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, defaultValue: sequelize.literal("nextval('id_playlist')")
    },
    nome: {
        type: DataTypes.STRING, allowNull: false
    },
    foto:{
        type: DataTypes.STRING, allowNull: false
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