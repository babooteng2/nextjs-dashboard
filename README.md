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

## chapter10. Adding Search and Pagination

- Learn how to use the Next.js APIs: useSearchParams, usePathname, and useRouter.
- Implement search and pagination using URL search params.

1. Capture the user's input.
2. Update the URL with the search params.
3. Keep the URL in sync with the input field.
4. Update the table to reflect the search query.

```terminal
pnpm i use-debounce
```

How Debouncing Works:

1. Trigger Event: When an event that should be debounced (like a keystroke in the search box) occurs, a timer starts.
2. Wait: If a new event occurs before the timer expires, the timer is reset.
3. Execution: If the timer reaches the end of its countdown, the debounced function is executed.

## chapter11. Mutating Data

- What React Server Actions are and how to use them to mutate data.
- How to work with forms and Server Components.
- Best practices for working with the native FormData object, including type validation.
- How to revalidate the client cache using the revalidatePath API.
- How to create dynamic route segments with specific IDs.

Creating an invoice

- Here are the steps you'll take to create a new invoice:

1. Create a form to capture the user's input.
2. Create a Server Action and invoke it from the form.
3. Inside your Server Action, extract the data from the formData object.
4. Validate and prepare the data to be inserted into your database.
5. Insert the data and handle any errors.
6. Revalidate the cache and redirect the user back to invoices page.

Updating an invoice

- The updating invoice form is similar to the create an invoice form, except you'll need to pass the invoice id to update the record in your database. Let's see how you can get and pass the invoice id.

These are the steps you'll take to update an invoice:

1. Create a new dynamic route segment with the invoice id.
2. Read the invoice id from the page params.
3. Fetch the specific invoice from your database.
4. Pre-populate the form with the invoice data.
5. Update the invoice data in your database.

## Chapter12. Handling Errors

- How to use the special error.tsx file to catch errors in your route segments, and show a fallback UI to the user.
- How to use the notFound function and not-found file to handle 404 errors (for resources that don’t exist).

## Chapter13. Improving Accessibility

- How to use eslint-plugin-jsx-a11y with Next.js to implement accessibility best practices.
- How to implement server-side form validation.
- How to use the React useActionState hook to handle form errors, and display them to the user.

```terminal
pnpm add -D eslint eslint-config-next
```
