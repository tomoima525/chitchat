const messageResponse = {
  messages: [
    { body: "Hi", createdAt: 100 },
    { body: "What'up?", createdAt: 102 }
  ],
  user: {
    name: "J.K. Rowling",
    profileUrl: "TBD"
  }
};

export const resolvers = {
  Query: {
    chat: () => messageResponse
  }
};
