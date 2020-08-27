const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bazaar', {
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(() => {
    console.log(' ✔ Successfully Connected With MongoDB Database ');

}).catch((error) => {
    console.log(` Error Connection: ${ error } `)

})