import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { DateResolver } from 'graphql-scalars';
import { prisma, PrismaClient } from './db';

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
  };
  Context: { prisma: PrismaClient };
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.addScalarType('Date', DateResolver, {});

builder.queryType({
  fields: (t) => ({
    hello: t.field({
      type: 'String',
      resolve: () => 'World',
    }),
  }),
});
