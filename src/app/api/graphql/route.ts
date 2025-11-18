//Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
// import { createYoga } from 'graphql-yoga'
 
// // interface NextContext {
// //   params: Promise<Record<string, string>>
// // }

// import { schema } from '@/graphql/schema';

// // const { handleRequest } = createYoga<NextContext>({
// const { handleRequest } = createYoga({
//   schema,

//   // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
//   graphqlEndpoint: '/api/graphql',
 
//   // Yoga needs to know how to create a valid Next response
//   fetchAPI: { Response }
// })
 
// export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }


// import { createYoga } from 'graphql-yoga'
// // import { schema } from '@/graphql/schema'
// import { schema } from '../../../graphql/schema'

// export default createYoga({
//   schema,
//   graphqlEndpoint: '/api/graphql',
// })

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }


import { NextRequest } from 'next/server'
import { createYoga } from 'graphql-yoga'
import { schema } from '@/graphql/schema'

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Request, Response }
})

// Create an empty context object that satisfies ServerAdapterInitialContext
const emptyContext = {}

export async function GET(
  request: NextRequest,
  context: { params: Record<never, never> }
) {
  return yoga.handleRequest(request, emptyContext)
}

export async function POST(
  request: NextRequest,
  context: { params: Record<never, never> }
) {
  return yoga.handleRequest(request, emptyContext)
}