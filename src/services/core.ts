import User from "@app/store/models/User";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://localhost:7227/api/";

const responseData = (axiosResponse: AxiosResponse) => axiosResponse.data;

axios.interceptors.response
.use((axiosResponse: AxiosResponse) => { return axiosResponse },
     (error: AxiosError) => { 
        switch(error.status){
            case 404:
                toast.error(error.message);
                break
            default:
                toast.error(error.message);
                console.log(error);
                break;
        }

        return Promise.reject(error.response);
    });

const requests = {
    get: (url: string) => axios.get(url).then(responseData),
    post:(url: string, data: object) => axios.post(url, data).then(responseData),
    put:(url: string, data: object) => axios.put(url, data).then(responseData),
    delete: (url: string) => axios.delete(url).then(responseData)
}

const search = {
    submitSearch: (data: any) => requests.post('search', data)
}

const user = {
    login: (user: User) => requests.post('Account/LoginUser', user)
}

const serviceCore = {
    search,
    user
}

export default serviceCore;