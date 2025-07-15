import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.schema';
import { CreateUserRequestPayload } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { FilterUserRequestPayloadDto } from './dtos/filter-user.dto';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserDto])
  users() {
    return this.userService.findAll();
  }

  @Mutation(() => UserDto)
  createUser(@Args('input') input: CreateUserRequestPayload): Promise<User> {
    const { name, email, password } = input;
    return this.userService.create(name, email, password);
  }
  @Query(() => [UserDto])
  filterUsers(
    @Args('filter') input: FilterUserRequestPayloadDto,
  ): Promise<User[]> {
    const { name } = input;
    return this.userService.filter(name);
  }
}
