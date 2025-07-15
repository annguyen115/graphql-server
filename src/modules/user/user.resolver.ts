import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserModel } from './user.model';
import { User } from './user.schema';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserModel])
  users() {
    return this.userService.findAll();
  }

  @Mutation(() => UserModel)
  createUser(
    @Args('name') name: string,
    @Args('email') email: string,
  ): Promise<User> {
    return this.userService.create(name, email);
  }
}
