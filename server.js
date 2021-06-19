var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const data = require('./lines.json');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Line {
    book: String
    line: String
  }
 
  type Query {
    getRandomLine: Line
    getAll: [Line]
    getIndex(index : Int!): Line
    getBook( book : String!): Line
  }

`);
 
class Line {
  constructor({book, line}) {
    this.book= book;
    this.line = line;
  }
}
 
var root = {
  getAll: () => {
    return data['lines']
  },
  getIndex: ({index}) => {
    return new Line(data['lines'][index])
  },
  getRandomLine: () => {
    return new Line(data['lines'][Math.floor(Math.random()*data['lines'].length)]);
  },
  getBook: ({book}) => {
    for (const l in data['lines']) {
      if (data['lines'][l].book == book) {
        return new Line(data['lines'][l])
      }
    }
    throw new Error('No entry for ' + book + ', please consider submitting a Pull Request to add it.');
  }
};
 
var app = express();
app.use(express.static("src"))
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(process.env.PORT || 5000, () => {
  console.log('Running a GraphQL API server');
});
