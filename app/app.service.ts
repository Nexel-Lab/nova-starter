import { Injectable, Res } from '@nestjs/common'
import type { Response } from 'express'

@Injectable()
export class AppService {
  hello(): string {
    return 'Hello from TheIceJi Server (NOVA APP)'
  }
}
