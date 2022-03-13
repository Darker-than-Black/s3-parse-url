import axios from 'axios';

export class ApiHttpService {
    async getJson(url) {
        const {data} = await axios.get(url);
        return data;
    }
}