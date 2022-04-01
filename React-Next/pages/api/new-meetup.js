import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://As420116:Ashish1234@practice.sgnnn.mongodb.net/meetups?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    const db = client.db();
    console.log(db);
    //name of the below collections can be different
    const meetupsCollection = db.collection("meetups");
    //insert One data at a time
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(200).json({
      message: "Message Inserted",
    });
  }
};

export default handler;
