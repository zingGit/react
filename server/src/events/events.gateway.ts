import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(3003)
export class EventsGateway {
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('events')
  handleMessage(client: any, data: any): string {

    console.log("handle:", data)
    return 'Hello world!';
  }
}
