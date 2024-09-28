import express from "express";
import morgan from "morgan";
import cors from "cors";

const PORT = process.env.PORT || 3001;
const app = express();

morgan.token("body", function (req, res) {
    return JSON.stringify(req.body);
})

app.use(cors());
app.use(express.json());
app.use(morgan(":method :url :status :body"));


//middleware


function unknownEndpoint(req, res) {
    res.status(404).send({error:"unknown endpoint"});
}

/*generate id */
function generateId() {
    const maxId = outlets.length > 0 ? Math.max(...outlets.map(n => n.id)) : 0;
    return maxId + 1;
}

let outlets = [
    {
        id: 1,
        branchCode: 1101,
        outletCode: "PDC001",
        outletName: "Centro Alabang",
        address:"Muntinlupa City"
        
    },
    {
        id: 2,
        branchCode: 1102,
        outletCode: "PDC002",
        outletName: "ATC",
        address:"Muntinlupa City"
        
    },
    {
        id: 3,
        branchCode: 1103,
        outletCode: "PDC003",
        outletName: "Festival",
        address:"Muntinlupa City"
        
    }
]

app.get("/", (req, res) => {
    return res.send("<h1>Outlet</h1>");
});

app.get("/outlets", (req, res) => {
   return res.json(outlets);
})


app.get("/outlets/:id", (req, res) => {
    const id = Number(req.params.id);
    const outlet = outlets.find((outlet) => outlet.id === id);
    return res.json(outlet);
})

app.delete("/outlets/:id", (req, res) => {
    const id = Number(req.params.id);
    outlets = outlets.filter((outlet) => outlet.id !== id);
    return res.status(204).end();
    
})

app.post("/outlets", (req, res) => {
    const body = req.body;
    
    if (!body.branchCode || !body.outletCode || !body.outletName || !body.address) {
        return res.status(400).json({ message: "Bad request!." });
    }

    const outlet = {
        id: generateId(),
        branchCode: body.branchCode,
        outletCode: body.outletCode,
        outletName: body.outletName,
        address:body.address
    }

    outlets = outlets.concat(outlet);
    return res.status(201).json(outlet);
})
app.use(unknownEndpoint);
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
  });