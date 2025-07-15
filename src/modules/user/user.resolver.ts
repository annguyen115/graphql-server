import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserModel } from './user.model';
import { User } from './user.schema';
import { CreateUserInput } from './dtos/create-user-input.dto';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserModel])
  users() {
    return this.userService.findAll();
  }

  @Mutation(() => UserModel)
  createUser(@Args('input') input: CreateUserInput): Promise<User> {
    const { name, email } = input;
    return this.userService.create(name, email);
  }
}
