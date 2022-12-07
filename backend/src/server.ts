import { ApolloServer } from "@apollo/server";
import express from "express";
import http from "http";
import { getSchema } from "./graphql/schema/schema";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { json } from "body-parser";
require("./db/dbContext");
import mongoose from "mongoose";
import { config } from "./config/config";

(async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const schema = await getSchema();

  // mongoose.connect(config.db.host, {}, () => {
  //   console.log("connected to database");
  // });

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    cors(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        return {};
      },
    })
  );

  await new Promise((resolve) => {
    resolve(httpServer.listen({ port: 4000 }));
  });

  console.log(`🚀 Server ready at http://localhost:4000`);
})();
