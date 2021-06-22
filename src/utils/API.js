import axios from "axios";

const apiURL = "https://randomuser.me/api/?results=90&nat=us";

const API = {
    getEmployees: function() {
    return axios.get(apiURL);
}}
export default API;