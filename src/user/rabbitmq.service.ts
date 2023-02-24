import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class RabbitMQService {
  private channel: amqp.Channel;

  constructor() {
    this.init();
  }

  async init(): Promise<void> {
    const connection = await amqp.connect('amqp://admin:password@rabbitmq:5672');
    this.channel = await connection.createChannel();
  }

  async publish(exchange: string, routingKey: string, message: any): Promise<void> {
    const jsonMessage = JSON.stringify(message);
    if (this.channel) {
      this.channel.assertExchange(exchange, 'fanout', { durable: false });
      this.channel.publish(exchange, routingKey, Buffer.from(jsonMessage));
    } else {
      throw new Error('RabbitMQ channel not initialized');
    }
  }
}
