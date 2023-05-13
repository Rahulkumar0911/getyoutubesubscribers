const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data');
const subscribers = require('./models/subscribers');

// Connect to DATABASE
const DATABASE_URL = "mongodb://localhost/subscribers";
mongoose.connect("mongodb+srv://Rahul:Rahul123@cluster0.xrevgsr.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true, bufferTimeoutMS: 30000  });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

//refreshing data and deleting it if any previous data

const refreshAll = async () => {
    try{
    console.log("before insert menu")

    const newdata= await subscriberModel.inserMany(data).catch(err=>console.log(err));
    console.log(`Added ${newdata.length} New Subscribers`);
    console.log("after insert");
    console.log(data);
    }catch(err)
    {("Unable to refresh data"),err}
    finally{
    
    await mongoose.disconnect();
    console.log("disconnected");
}}
refreshAll();
