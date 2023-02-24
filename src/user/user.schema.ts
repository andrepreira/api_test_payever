import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  id: number;
  
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  avatar: Buffer;

  @Prop()
  avatarHash: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
