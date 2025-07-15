import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FilterUserRequestPayloadDto {
  @Field(() => String)
  name: string;
}
