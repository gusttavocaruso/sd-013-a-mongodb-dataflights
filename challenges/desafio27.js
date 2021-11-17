const passaredoFlightsLength = db.voos.count(
  {
    $and: [
      { "empresa.nome": "PASSAREDO" },
      { natureza: "Doméstica" },
    ],
  },
);

db.resumoVoos.insertOne(
  {
    empresa: "PASSAREDO",
    totalVoosDomesticos: passaredoFlightsLength,
  },
);

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  { _id: 0 },
);
