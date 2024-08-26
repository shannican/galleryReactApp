import axios from "axios"

const instace  = axios.create({
    baseURL:'https://api.pexels.com/v1',
    headers:{
        Authorization:'I2hCyFEH8Fv3YApqRomEBJsbTfMeIhKyIoo1FeFhXOX8NHDzp6dvjknQ'
    }
})

export default instace;


