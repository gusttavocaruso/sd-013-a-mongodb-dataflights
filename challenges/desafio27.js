const companyName = "PASSAREDO";
const passaredoFlightsLength = db.voos.find(
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
    totalVoosDomesticos: passaredoFlightsLength,
  },
);

db.resumoVoos.findOne(
  { empresa: companyName },
  { _id: 0 },
);
