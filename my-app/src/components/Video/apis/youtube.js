import axios from 'axios'
const KEY='AIzaSyA4wDfcVPcoP6LZdf40HZR_lP__2buZ5I4'

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})