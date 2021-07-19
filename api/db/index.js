const mongoose = require('mongoose');

module.exports = {
  connect: (config) => {
    const { dbname, username, password } = config.db.mongo;

    mongoose.set('useCreateIndex', true);
    mongoose.connect(
      `mongodb+srv://${username}:${password}@cluster0.fzt7a.mongodb.net/${dbname}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    mongoose.set('useFindAndModify', false);
  },
};
