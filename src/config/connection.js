const mongoose = require('mongoose');

class Connection {
  constructor() {
    this.dataBaseConnectionMongoDB();
  }

  dataBaseConnectionMongoDB(){
    this.mongoDBConnection = mongoose.connect("mongodb+srv://guilhermereis:guilherme@cluster0.1pyz1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    
    .then(() => {
      console.log("Conexão estabelicida com o MongoDB");
    })
    .catch((error) => {
      console.log(`Erro ao estabelecer conexão com mongoDB: ${error}`)
    })
  }
}

module.exports = new Connection();