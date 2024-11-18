import pg from "pg"
const cliente = new pg.Client("")

// try{
//     cliente.connect()
//     console.log("foi db")
// }catch(e){
//     console.log(e)
// }

export default cliente