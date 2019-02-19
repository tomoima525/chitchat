import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    name: String
    profileUrl: String
  }

  type Message {
    body: String
    createdAt: Int
  }

  type MessageResponse {
    user: User
    messages: [Message]
  }

  type Query {
    chat: MessageResponse
  }
`;
