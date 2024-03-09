import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { ROUTES } from '@routes'
import { PostsService } from './posts.service'
import { Post, NewPost, UpdatePost } from '@models/graphql.schema'

const pubSub = new PubSub()

@Resolver(ROUTES.posts.root)
export class PostsResolvers {
  constructor(private readonly postService: PostsService) {}

  @Query(ROUTES.posts.posts)
  async posts(): Promise<Post[]> {
    return this.postService.findAll()
  }

  @Query(ROUTES.posts.post)
  async post(@Args('id') args: string): Promise<Post> {
    return this.postService.findOne(args)
  }

  @Mutation(ROUTES.posts.createPost)
  async create(@Args('input') args: NewPost): Promise<Post> {
    const createdPost = await this.postService.create(args)
    pubSub.publish('postCreated', { postCreated: createdPost })
    return createdPost
  }

  @Mutation(ROUTES.posts.updatePost)
  async update(@Args('input') args: UpdatePost): Promise<Post> {
    return this.postService.update(args)
  }

  @Mutation(ROUTES.posts.deletePost)
  async delete(@Args('id') args: string): Promise<Post> {
    return this.postService.delete(args)
  }

  @Subscription(ROUTES.posts.postCreated)
  postCreated() {
    return pubSub.asyncIterator(ROUTES.posts.postCreated)
  }
}
