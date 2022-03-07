import API_ENDPOINT from "../globals/api-endpoint";
import { default as axios} from 'axios';

class PhoneApi {
    static async latest(){
        try {
            const response = await axios.get(API_ENDPOINT.LATEST);
            return response;
        } catch(error){
            console.log(error);
        }
    }

    static async search(query){
        try {
            const response = await axios.get(API_ENDPOINT.SEARCH(query));
            return response;
        } catch (error) {
            
        }
    }
}

export default PhoneApi;