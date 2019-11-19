var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
app.get('/', function (req, res) {
    res.end("Calculadora");
});
app.get("/calcular/:tipo/:marca/:modelo", (req, res, next) => {
    let precio = 0;
    let marcasTier1 = ["audi", "bmw", "mercedes"];
    let marcasTier2 = ["volkswagen"];
    let marcasTier3 = ["peugeot"];
    let modelosTier1 = ["A8", "A7", "A5", "500", "560", "Serie7"];
    let modelosTier2 = ["A1", "A1 Sportback", "A2", "A3", "A", "CL"];

    if (req.params.tipo.toLowerCase() == "nuevo") {
        precio += 250;
        console.log('nuevo');
    } else {
        precio += 150;
    }
    if (marcasTier1.map((e) => e.toLowerCase()).includes(req.params.marca.toLowerCase())) {
        precio += 250;
        console.log('marca tier1');
    }
    if (marcasTier2.map((e) => e.toLowerCase()).includes(req.params.marca.toLowerCase())) {
        precio += 200;
        console.log('marca tier2');
    }
    if (marcasTier3.map((e) => e.toLowerCase()).includes(req.params.marca.toLowerCase())) {
        precio += 150;
        console.log('marca tier3');
    }
    if (modelosTier1.map((e) => e.toLowerCase()).includes(req.params.modelo.toLowerCase())) {
        precio += 800;
        console.log('modelo tier1');
    } else {
        precio += 500;
        console.log('modelo tier2');
    }

    if (precio > 0) {
        res.json([precio]);
    } else {
        res.end();
    }
});