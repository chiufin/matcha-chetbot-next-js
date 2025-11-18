import { createSchema } from 'graphql-yoga'
import { cafes } from './mocks/cafes'

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Cafe {
      id: ID!
      name: String!
      address: String!
      area: String!
      rating: Float!
      images: [String!]!
      description: String!
      category: [String!]!
      isFavorite: Boolean!
    }

    type Query {
      cafes(search: String, area: String, isFavorite: Boolean): [Cafe!]!
      favCafes: [Cafe!]!
      cafe(id: ID!): Cafe
    }

    type Mutation {
      toggleFavorite(id: ID!): Cafe
    }
  `,
  resolvers: {
    Query: {
      cafes: (_, { search, area, isFavorite }) => {
        let result = cafes;
        if (search) {
          result = result.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          );
        }
        if (area && area !== "All Areas") {
          result = result.filter((p) => p.area === area);
        }
        if (typeof isFavorite === "boolean") {
          result = result.filter((p) => p.isFavorite === isFavorite);
        }
        return result;
      },
      cafe: (_, { id }) => cafes.find((p) => p.id === id),
    },
    Mutation: {
      toggleFavorite: (_, { id }) => {
        const cafe = cafes.find((p) => p.id === id)
        if (cafe) cafe.isFavorite = !cafe.isFavorite
        return cafe
      },
    },
  },
})