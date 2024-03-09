<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://server.theiceji.com/logo_white.svg">
        <img width="140" alt="Logo for A1" src="https://server.theiceji.com/logo_black.svg">
    </picture>
</p>

<h1 align="center">
  Built with <a href="https://server.theiceji.com">NOVA App</a>
</h1>

<h2 id="about">About this boilerplate</h2>

This boilerplate is made up from NOVA App with GraphQL, TypeORM, and deploy-ready for you next Server.


<h2 id="overview">The NOVA App</h2>

The _"NOVA App"_ is a modern web development stack made by [TheIceJi](https://theiceji.com) focused on **Flexibility**, **Scalability**, and **Seamless**. It consists of:

- [TypeScript](https://typescriptlang.org)
- [Express](https://nextjs.org)
- [Prisma](https://prisma.io)
- [MongoDB](https://www.mongodb.com/)
- [NextAuth.js](https://next-auth.js.org)
- [AWS-S3](https://aws.amazon.com/s3/)
- [Sentry](https://sentry.io/)

optionals
- [Redis](https://redis.io/)

<h2 id="note">Note!</h2>

- This boilerplate was tested on Node v20
- S3 was turned off by default for preventing errors while creating s3 client without env variables. You can turn on by going to `/nova/libs/s3/index.ts` and remove the 2 line comments (`export`)
- You can sneak on `nova` folder for what are we provide.

<h2 id="note">Get start</h2>

- Git clone this repo
- Rename `.env-example` to `.env`
- Add required env `MONGODB_URI` (other env variables are optionals)
- Run `yarn db`
- Start dev server with `yarn dev` (running on http://localhost:3000)
- Deploy production with `yarn build`