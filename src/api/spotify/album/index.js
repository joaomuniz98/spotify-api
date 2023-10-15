import request from "../request";


export default {

    getAlbum(id){
        return request.get(`album/${id}`)
    }
}