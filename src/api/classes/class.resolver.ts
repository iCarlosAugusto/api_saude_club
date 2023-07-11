import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ClassService } from './class.service';
import { CreateClassInput } from './dtos/create-class.input';
import { FindAllClassesInput } from './dtos/find-all-classes.input';
import { FindAllClassesByDateInput } from './dtos/find-classes_by_date.input';
import { BookClassInput } from './dtos/book-class.input';
import { FindNextClientClassInput } from './dtos/find-next-client-class.input';
import { CancelClientClassInput } from './dtos/cancel-client-class.input';
import { ClassEntity } from './entities/class.entity';
import { UpdateClassInput } from './dtos/update-class.input';
import { DeleteClassInput } from './dtos/delete-class.input';


@Resolver(() => ClassEntity)
export class ClassResolver {
  constructor(private readonly classService: ClassService) {}

  @Mutation(() => ClassEntity)
  createClass(
    @Args('createClass') createClass: CreateClassInput,
  ){
    return this.classService.createClass(createClass);
  }

  @Mutation(() => ClassEntity)
  updateClass(
    @Args('updateClassInput') updateClassInput: UpdateClassInput,
  ){
    return this.classService.update(updateClassInput);
  }

  @Mutation(() => String)
  deleteClass(
    @Args('deleteClassInput') deleteClassInput: DeleteClassInput,
  ){
    return this.classService.delete(deleteClassInput);
  }

  @Query(() => [ ClassEntity ], { nullable: true })
  findAllClasses(
    @Args('findAllClassesInput') findAllClassesInput: FindAllClassesInput
  ){
    return this.classService.findAllClassses(findAllClassesInput);
  }

  @Query(() => [ ClassEntity ])
  findAllClassesByDate(
    @Args('findAllClassesByDateInput') findAllClassesByDate: FindAllClassesByDateInput
  ){
    return this.classService.findAllClassesByDate(findAllClassesByDate)
  }

  @Mutation(() => ClassEntity)
  bookClass(
    @Args('bookClassInput') bookClassInput: BookClassInput
  ){
    return this.classService.bookClass(bookClassInput);
  }

  @Query(() => ClassEntity, {nullable: true})
  findNextClientClass(
    @Args('findNextClientClassInput') findNextClientClassInput: FindNextClientClassInput
  ) {
    return this.classService.findNextClientClass(findNextClientClassInput);
  }

  @Mutation(() => String)
  cancelClass(
    @Args('cancelClientClass') cancelClientClass: CancelClientClassInput
  ){
    return this.classService.cancelClass(cancelClientClass);
  }
}
