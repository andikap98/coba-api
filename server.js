const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());
app.get('/api/data', (req, res) =>{

    const data= [{
        name : 'Andika',
        age: 22,
        timestamp : new Date()
    },
    {
        name : 'Boy',
        age: 45,
        timestamp : new Date()
    }
]
    res.json(data)
})

app.listen(port, ()=>{
    console.log(`Server Anda dijalankan diport ${port}`)
})