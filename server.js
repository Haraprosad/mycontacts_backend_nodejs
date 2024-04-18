const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

//*******Start api related code */

app.use("/api/contacts",require('./routes/contactRoutes'));
app.use(errorHandler);

//*******End api related code */




const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})