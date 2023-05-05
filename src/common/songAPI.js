import axios from 'axios';


  export default axios.create({
    baseURL:"https://spotify23.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': 'd963877a64mshdf0c14feb66d2f7p1615a4jsnce8362235d33',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    },
    
})