import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

export enum UserRole {
    CUSTOMER = 'customer',
    RESTAURANT_OWNER = 'restaurant_owner',
    RIDER = 'rider',
}

@Schema({timestamps: true})
export class User {
    @Prop({required: true, unique: true, lowercase: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    firstName: string;

    @Prop({required: true})
    lastName: string;
    
    @Prop({required: true})
    phone: string;
    
    @Prop({required: true, enum: UserRole, default: UserRole.CUSTOMER})
    role: UserRole;

    @Prop({default: true})
    isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);