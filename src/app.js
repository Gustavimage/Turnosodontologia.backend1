import express from "express"; 

import {
  getServices,
  getServiceById,
  addService,
  updateService,
  deleteService
} from "./managers/serviceManager.js";

export const app = express(); 

app.use(express.json()); 

app.use((req, res, next) => {
    console.log(`${req.method}${req.url}`);
    next();
});

app.get("/api/services", (req, res) => {
    const services = getServices();
    res.json(services);
});

app.get("/api/services/:id", (req, res) => {
    const service = getServiceById(req.params.id);
    res.json(service);
});
 
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});