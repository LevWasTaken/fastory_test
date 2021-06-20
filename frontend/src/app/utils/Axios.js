import axios from 'axios';

class Axios {
    constructor() {
        this.getPeopleById = this.getByIdBuilder("People")
        this.getPlanetsById = this.getByIdBuilder("Planets")
        this.getSpeciesById = this.getByIdBuilder("Species")
        this.getStarshipsById = this.getByIdBuilder("Starships")
        this.getVehiclesById = this.getByIdBuilder("Vehicles")
        this.getFilmsById = this.getByIdBuilder("Films")
        this.getAllPeople = this.getAllBuilder("People")
        this.getAllPlanets = this.getAllBuilder("Planets")
        this.getAllSpecies = this.getAllBuilder("Species")
        this.getAllStarships = this.getAllBuilder("Starships")
        this.getAllVehicles = this.getAllBuilder("Vehicles")
        this.getAllFilms = this.getAllBuilder("Films")
    }
    baseURL = 'http://localhost:8080/';


    getByIdBuilder(name) {
        return async function(id) {
            console.log(id)
            const data = await axios({
                method: 'get',
                url: this.baseURL + 'get' + name + 'ById?id=' + id,
            });
            return data;
        }
    }
    getAllBuilder(name) {
        return async function() {
            const data = await axios({
                method: 'get',
                url: this.baseURL + 'getAll' + name,
            });
            console.log(data)
            return data;
        }
    }
    async login(username, password) {
            const response = await axios({
                method: 'post',
                url: this.baseURL + 'login',
                data : {
                    username: username,
                    password: password
                }
            });
            console.log(response)
            return response;
        }
    }


export default new Axios();