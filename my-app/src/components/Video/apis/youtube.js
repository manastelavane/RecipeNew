import axios from 'axios'
// const KEY='AIzaSyA4wDfcVPcoP6LZdf40HZR_lP__2buZ5I4'
// const KEY='AIzaSyA4wDfcVPcoP6LZdf40HZR_lP__2buZ5I4'
// const KEY='AIzaSyDMJNLsfiWMo0dP10eMtvsFjC0bb4pdARc'
// AIzaSyB3YSEpw6NaBuDswl45bAi97IbFNhn-wX4
const KEY='AIzaSyA3VBPa5K5rlu7qBk2p1qmx0Wz8CLRfMMg'
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:2,
        key:KEY
    }
})