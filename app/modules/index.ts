import { UploadModule } from './upload/upload.module'
import { PostsModule } from './posts/posts.module'
import { StatusModule } from './status/status.module'
import { DebugModule } from './debug/debug.module'

const Modules = [StatusModule, DebugModule, UploadModule, PostsModule]
export { Modules }
