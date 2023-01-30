import axios from "axios";

axios.defaults.baseURL = 'https://us-west-2.aws.data.mongodb-api.com/app/data-xhbbr/endpoint';
axios.defaults.headers.common['apiKey'] = 'mGQRDRAWzDevixQztP8t57IbjS7vFUbtbCt27azBco7141KBnZQGCRwDr2yzhYiQ';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = "application/json";
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, DELETE';
axios.defaults.headers.common['Origin'] = 'http://localhost:3004';



export const getBills = () => {
    axios.get(`/bills`)
    .then(res => {
        console.log(res)
        return res.data;
    })
    .catch(err => {
        console.log(err)
        return err.response.data.message;
    })
}