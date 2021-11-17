const companyName = "PASSAREDO";
const passaredoFlightsLength = db.voos.count(
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
    totalVoosDomesticos: passaredoFlightsLength,
  },
);

db.resumoVoos.findOne(
  { empresa: companyName },
  { _id: 0 },
);
