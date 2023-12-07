import axios from "axios";

const headers = {
	"Content-Type": "application/json",
};

const api = axios.create({
	baseURL: "http://10.234.93.180:8000/api/",
	 //"http://10.109.71.5:8000/api/" "http://10.234.93.180:8000/api/",
	headers: headers,
});

export default api;
