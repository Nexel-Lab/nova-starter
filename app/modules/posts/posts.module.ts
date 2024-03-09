import { Module } from '@nestjs/common'
import { PostsResolvers } from './posts.resolvers'
import { PostsService } from './posts.service'
import { PrismaModule } from '@database/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [PostsResolvers, PostsService],
})
export class PostsModule {}
