import { createYoga } from '@graphql-yoga/node';
import { createServer } from 'node:http';
import { schema } from './schema';

const yoga = createYoga({ schema });
const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http:localhost:4000/graphql');
});
