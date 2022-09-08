const { AuthenticationError } = require('apollo-server-express')
const { User } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
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
    },
    Mutation: {
        addUser: async (parent, {username, email, password}) => {
            try {
                const user = await User.create({ username, email, password})
                const token = signToken(user)
                return {token, user}
            } catch {
            throw new AuthenticationError('Invalid entry')
        }
    }, 

    login: async (parent, {email, password}) => {
        const user = await User.findOne({ email: email });

        if (!user) {
            throw new AuthenticationError('Incorrect login information');
        }

        const checkPassword = await user.isCorrectPassword(password);

        if (!checkPassword) {
            throw new AuthenticationError('Incorrect password');
        }

        const token = auth(user);
        return { token, user };
    },
},
}