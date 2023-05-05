import axios from 'axios';


  export default axios.create({
    baseURL:"https://spotify23.p.rapidapi.com",
    headers: {
      'X-RapidAPI-Key': 'a3f12630e6msh5a1557941d91649p199efbjsnac34f051eaef',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    },
    
})