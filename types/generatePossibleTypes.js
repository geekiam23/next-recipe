const fetch = require('node-fetch');
const fs = require('fs');

fetch(`https://freedomchurch.online-staging.church/graphql`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmcmVlZG9tY2h1cmNoLm9ubGluZS1zdGFnaW5nLmNodXJjaCIsImV4cCI6MTY0ODE1MzIwNCwib3JnYW5pemF0aW9uX2lkIjoiZTI3Njk5N2UtMWMxYy00MjNjLWE3OWUtNWMxODIwZTkzMzQyIiwic3Vic2NyaWJlcl9pZCI6ImFhY2JjMzg2LTFmMzItNDE0Yy05MDQ4LWUyYmQ5YTU3ODhlNiJ9.v0NsOfKeeNw8XbcMJt9y3IRUFLFOOE4ZUGnNtpE0V8o',
  },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(result => result.json())
  .then(result => {
    const possibleTypes = {};

    result.data.__schema.types.forEach(supertype => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] = supertype.possibleTypes.map(subtype => subtype.name);
      }
    });

    fs.writeFile('./types/possibleTypes.json', JSON.stringify(possibleTypes), err => {
      if (err) {
        console.error('Error writing possibleTypes.json', err);
      } else {
        console.log('Fragment types successfully extracted!');
      }
    });
  });
