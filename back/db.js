import pg from "pg"
const cliente = new pg.Client("postgresql://jose:tHR1q-xC-Cn4WR0HLM-Nqw@watery-fisher-2272.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full")

try{
    cliente.connect()
    console.log("foi db")
}catch(e){
    console.log(e)
}

export default cliente