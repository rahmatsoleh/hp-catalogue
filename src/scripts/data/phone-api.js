import API_ENDPOINT from "../globals/api-endpoint";
import { default as axios} from 'axios';

class PhoneApi {

    static async listPhone(keyword){
        switch(keyword) {
            case 'latest':
                return await this.latest();
                break;
            case 'interest' :
                return await this.interest();
                break;
            case 'fans' :
                return await this.fans();
                break;
            default :
                return {};
        }
    }

    static async latest(){
        try {
            const response = await axios.get(API_ENDPOINT.LATEST);
            return response;
        } catch(error){
            console.log(error);
        }
    }

    static async interest(){
        try {
            const response = await axios.get(API_ENDPOINT.INTEREST);
            return response;
        } catch(error){
            console.log(error);
        }
    }

    static async fans(){
        try {
            const response = await axios.get(API_ENDPOINT.FANS);
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
            console.log(error);
        }
    }
}

export default PhoneApi;