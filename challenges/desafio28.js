const companyName = "LATAM AIRLINES BRASIL";
const latamDomesticFlights = db.voos.count(
  {
    $and: [
      { "empresa.nome": companyName },
      { natureza: "Doméstica" },
    ],
  },
);

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
