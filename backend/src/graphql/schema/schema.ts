import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";
import { IResolvers } from "@graphql-tools/utils";
import { loadFilesSync } from "@graphql-tools/load-files";
import {join} from "path";
import {mergeResolvers, mergeTypeDefs} from "@graphql-tools/merge";

export const getSchema = async (): Promise<GraphQLSchema> => {
  const typeDefs = mergeTypeDefs(loadFilesSync(
      join(__dirname, '../types'),
      { recursive: true }
  ));

  const resolvers = mergeResolvers(loadFilesSync<IResolvers>(
      join(__dirname, '../resolvers'),
      { recursive: true }
  ));

  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
};
