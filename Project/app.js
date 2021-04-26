const express= require(  'express');
const mongoose= require(  'mongoose');
const path= require('path');
const hbs= require('express-handlebars')

const app= express();



/*  Mongoose to MongoDB*/
mongoose.connect('mongodb://localhost:27017/cms_project', {useNewUrlParser: true})
    .then(response =>{
        console.log("MongoDB connected!");
    })
    .catch(err =>{console.log("Connection failed");});


/*configure express */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


/* Setup view engine*/
app.engine('handlebars',hbs({defaultLayout:'default'}));
app.set('view engine', 'handlebars');

/*  Routes*/
app.use(  '/', (req, res) =>
{
    res.send("Welcome to the app");
});



app.listen(3000,() =>
    {
        console.log("Server is running on port number 3000");
    }
);