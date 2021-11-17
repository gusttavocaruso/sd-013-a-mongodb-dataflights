// 4 - Retorne a quantidade de voos da empresa GOL.
// use("dataFlights");
db.voos.count({ "empresa.nome": "GOL" });
