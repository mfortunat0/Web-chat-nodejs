import {http} from './http'
import "./websocket/client"
import "./websocket/admin"

http.listen(3001,() => console.log("Server run on port 3001"))