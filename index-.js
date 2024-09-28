// import express from "express";
// import morgan from "morgan";
// import cors from "cors";

// const PORT = process.env.PORT || 3001;
// const app = express();

// morgan.token("body", function (req, res) {
//   return JSON.stringify(req.body);
// });

// app.use(cors());
// app.use(express.json());
// app.use(morgan(":method :url :status :body"));

// let outlets = [
//     {
//         id: 1,
//         content: "HTML is easy",
//         important: true,
//     },
//     {
//         id: 2,
//         content: "Browser can execute only Javascript",
//         important: false,
//     },
//     {
//         id: 3,
//         content: "GET and POST are the most important methods of HTTP",
//         important: true,
//     },
//     {
//         id: 4,
//         content: "Express JS is awesome",
//         important: false,
//     },
// ];

// //HTTP Methods: GET, POST, DELETE, PUT, PATCH
// //RESTful API
// /*
//    URL             verb     functionality
//    notes            GET      fetches all resources in the collection
//     notes/:id       GET     fetches a single resource
//     notes           POST    creates a new resource based on the request data
//     notes/:id       DELETE  removes the identified resource
//     notes/:id       PUT     replaces the entire identified  resource
//     notes/:id       PATCH   replaces a part of the identified resource
// */

// function unknownEndpoint(req, res) {
//     return res.status(404).send({ error: "unknown endpoint" });
//   }
  
//   function generateId() {
//     const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
//     return maxId + 1;
//   }
  
//   app.get("/", (req, res) => {
//     return res.send("<h1>Outlet</h1>");
//   });
  
// //   app.get("/outlet/info", (req, res) => {
// //     const notesCount = notes.length;
  
// //     return res.send(`<p>Notes App have ${notesCount} notes</p>`);
// //   });
  
//   app.get("/outlets", (req, res) => {
//     return res.json(outlets);
//   });
  
//   app.get("/outlets/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const outlet = outlets.find((outlet) => outlet.id === id);  
//     return res.json(outlet);
//   });
  
//   app.delete("/outlets/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const outlet = outlets.filter((outlet) => outlet.id === id);
  
//     return res.status(204).end();
//   });
  
//   app.post("/outlets", (req, res) => {
//     const body = req.body;
  
//     if (!body.content) {
//       return res.status(400).json({ error: "content missing" });
//     }
  
//     const outlet = {
//       content: body.content,
//       important: body.important || false,
//       id: generateId(),
//     };
  
//     outlets = outlets.concat(note);
  
//     return res.status(201).json(note);
//   });
  
//   app.use(unknownEndpoint);
  
//   app.listen(PORT, () => {
//     console.log(`Server is now running on port ${PORT}`);
//   });