import grpc from 'grpc';

import greeterHandler from './handlers/greeter';

type StartServerType = () => void;

export const startServer: StartServerType = () => {

  const server: grpc.Server = new grpc.Server();

  server.addService(greeterHandler.service, greeterHandler.handler);

  server.bindAsync(
    `0.0.0.0:3001`,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err != null) {
        return console.error(err);
      }
      console.log(`gRPC listening on 3001`)
    }
    
  );

  server.start();

}

startServer();
