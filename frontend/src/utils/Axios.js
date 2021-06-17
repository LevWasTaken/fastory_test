import axios from 'axios';

class Axios {
    baseURL = 'http://localhost:8080/';

    async getPeopleById(id) {
        console.log(id)
        const data = await axios({
            method: 'get',
            url: this.baseURL + 'getPeopleById?id=' + id,
        });
        return data;
    }
    async getAllPeople() {
        console.log('yo')

        const data = await axios({
            method: 'get',
            url: this.baseURL + 'getAllPeople',
        });
        
        return data;
    }

}

export default new Axios();