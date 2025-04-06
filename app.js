import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

// Serve static files from the 'images' directory under the '/images' path
app.use('/images/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>It Just Deploys!</title>
    <style>
        html, body {
            height: 100%;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0; /* Optional: background color */
        }
        img {
            max-width: 90%;
            max-height: 90%;
            display: block; /* Remove extra space below image */
        }
    </style>
</head>
<body>
    <img src="/images/logo.png" alt="It Just Deploys Comic">
</body>
</html>
  `;
  return c.html(htmlContent);
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
