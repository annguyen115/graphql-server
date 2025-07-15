import { ObjectType, Field, ID, HideField } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @HideField()
  password: string;
}
