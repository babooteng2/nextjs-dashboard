## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## chapter6. setting database

- create a github repository
- create a vercel account
- connect and deploy your project
- create a Postgres database(neon on vercel)
- connect project with database. once connected, move to storage tab and find your db to copy secret .env.local secret code
- change your local .env.example to .env and paste secret code from your neon storage dashboard

```cmd
pnpm dev
```

- hit http://localhost:3000/seed
- you will see a message "Database seeded successfully" in the browser.

## chapter7. Fetching Data

- Learn about some approaches to fetching data: APIs, ORMs, SQL, etc.
- How Server Components can help you access back-end resources more securely.
- What network waterfalls are.
- How to implement parallel data fetching using a JavaScript Pattern.

## chapter8. Static and Dynamic Rendering

- What static rendering is and how it can improve your application's performance.
- What dynamic rendering is and when to use it.
- Different approaches to make your dashboard dynamic.
- Simulate a slow data fetch to see what happens.

## chapter9. Streaming

- What streaming is and when you might use it.
- How to implement streaming with loading.tsx and Suspense.
- What loading skeletons are.
- What Next.js Route Groups are, and when you might use them.
- Where to place React Suspense boundaries in your application.
