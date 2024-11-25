import { DataTypes, QueryTypes } from "sequelize";
import sequelize from "../db.js";
import Musicas from "./Musicas.js";
import Playlist from "./Playlist.js"

const data_playlist = sequelize.define("data_playlist", {
    id: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, defaultValue: sequelize.literal("nextval('id_dataPlaylist')")
    },
    id_musica: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: { model: Musicas, key: "id" }
    },
    id_playlist: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: { model: Playlist, key: "id" }
    }
},
    {
        freezeTableName: true,
        timestamps: false
    }

)

data_playlist.belongsTo(Musicas, { foreignKey: "id_musica" });
data_playlist.belongsTo(Playlist, { foreignKey: "id_playlist" });

export default data_playlist