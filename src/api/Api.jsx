import axios from "axios";

const headers = {
	"Content-Type": "application/json",
};

const api = axios.create({
	baseURL: "http://   127.0.0.1:8000/api/", //"http://10.234.93.180:8000/api/",
	headers: headers,
});

export default api;
