# Book-apollo-engine
## Description
This application is a full-stack web application designed to as a book database, where users can search for books and save them if they have an account.

## Technologies
- React
- Express
- MongoDB
- Apollo GraphQL

## Code Snippet
This is used to establish a Query within Apollo's query platform.
```
    Query: {
        users: async() => {
            return User.findAll()
        }
    },
    me: async (parent, args, context ) => {
        if (context.user) {
            return User.findOne({_id: context.user._id})
        }
        throw new AuthenticationError('Log in now to view content')
    }
```
## Links
- ![GitHub](https://github.com/dylankreisman)
- ![LinkedIn](https://www.linkedin.com/in/dylan-kreisman-3752b1160/)