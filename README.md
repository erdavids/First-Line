
# The First Line / [Landing Page](https://www.firstlineapi.com)

A GraphQL API server for the opening lines of novels.

API Url: [https://www.firstlineapi.com/graphql](https://www.firstlineapi.com/graphql)

Read about contributing below, or submit new lines [with this form](https://docs.google.com/forms/d/e/1FAIpQLSc4Qsz4TdLKLe59xrw8wPV1CGFsaTJNOKGHr489Hp80LAuFlg/viewform?usp=sf_link).

## Usage/Examples
This API is still in a simple state, so these examples should cover pretty much all possibilities of it's use.

The tutorials [here](https://graphql.org/graphql-js/) were the most helpful for me if you're just getting started with GraphQL.
### Get All
```graphql
query {
  getAll {
    line
    book
    author
    year
  }
}
```
```JSON
  "data": {
    "getAll": [
      {
        "line": "It was a bright cold day in April, and the clocks were striking thirteen.",
        "book": "1984",
	"author": "George Orwell",
	"year": "1949"
      },
      {
        "line": "I am an invisible man.",
        "book": "Invisible Man",
	"author": "Ralph Ellison,
	"year": "1952"
      },
    ]
  }
```
### Get Specific Book
```graphql
query {
  getBook(book: "Invisible Man") {
    line 
    author
  }
}
```
```JSON
  "data": {
    "getBook": {
      "line": "I am an invisible man.",
      "author": "Ralph Ellison"
    }
  }
```

### Get Random Line 
```graphql
query {
  getRandomLine {
    line
    book
    author
    year
  }
}
```
```JSON
  "data": {
    "getRandomLine": {
      "line": "In a hole in the ground there lived a hobbit.",
      "book": "The Hobbit",
      "author": "J.R.R. Tokien",
      "year": "1937"
    }
  }
```

### Get Specific Index
```graphql
query {
  getIndex(index: 1) {
    book
  }
}
```
```JSON
  "data": {
    "getIndex": {
      "book": "Invisible Man"
    }
  }
```






  
## Run Locally

The app is hosted at https://firstlineapi.com/graphql, but if you would like to run the project locally you can.

```bash
  git clone hhttps://github.com/erdavids/First-Line
  cd First-Line
  npm install
  node server.js
```

  
## Contributing

Use [this form](https://docs.google.com/forms/d/e/1FAIpQLSc4Qsz4TdLKLe59xrw8wPV1CGFsaTJNOKGHr489Hp80LAuFlg/viewform?usp=sf_link) to add in new opening lines from your favorite or interesting novels! 

I will eventually open up Pull Requests for new code features, but want to work on it a little more myself just to learn for now.


  
