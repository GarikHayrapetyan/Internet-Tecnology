import axios, { AxiosResponse } from 'axios'
import { IEvent } from '../app/Event';

axios.defaults.baseURL = "http://localhost:3001/api/event";

const responseBody=(response:AxiosResponse)=>response.data;

const requests ={
    get:(url:string) => axios.get(url).then(responseBody),
    post:(url:string,body:{}) => axios.post(url,body).then(responseBody),
    put:(url:string,body:{})=>axios.put(url,body).then(responseBody),
    del:(url:string)=>axios.delete(url).then(responseBody)
}

const Events ={
    list:():Promise<IEvent[]>=>requests.get('/get'),
    details:(id:string)=>requests.get(`/get/${id}`),
    create:(event:IEvent)=>requests.post('/insert',event),
    update:(event:IEvent)=>requests.put('/edit',event),
    delete:(id:string)=>requests.del(`/delete/${id}`)
}

export default{
    Events
}
