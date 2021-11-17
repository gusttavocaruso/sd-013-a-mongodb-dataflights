const companyName = "LATAM AIRLINES BRASIL";
const latamDomesticFlights = db.voos.find(
  {
    $and: [
      { "empresa.nome": companyName },
      { natureza: "Doméstica" },
    ],
  },
).count();

db.resumoVoos.insertOne(
  {
    empresa: companyName,
    totalVoosDomesticos: latamDomesticFlights,
  },
);

db.resumoVoos.findOne(
  { empresa: companyName },
  { _id: 0 },
);
