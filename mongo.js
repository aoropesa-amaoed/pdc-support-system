import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://arjayoropesa23:7Nv5LP37y7xanINF@arjaydb.cp1gn5r.mongodb.net/pdc_db?retryWrites=true&w=majority&appName=ArjayDB';

mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI);

const outletSchema = new mongoose.Schema({
    branchCode: String,
    outletCode: String,
    outletName: String,
    address: String
});

const Outlet = mongoose.model("Outlet", outletSchema);

const outlet = new Outlet({
    branchCode: "057",
    outletCode: "PDC001",
    outletName: "ATC2 AYALA",
    address: "ENTERTAINMENT CMPLX SPACE NO. 146 ATC AYALA ALABANG MUNTINLUPA CITY"
});

outlet.save().then((result) => {
    console.log(result);
    console.log("Outlet added!");
    mongoose.connection.close();
});
