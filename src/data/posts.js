import Vapi from 'vuex-rest-api'

const posts = new Vapi({
  baseURL: 'http://localhost:3007',
  state: {
    posts: []
  }
})
  .get({
    action: 'getPosts',
    property: 'posts',
    path: '/posts',
    onSuccess (state, payload, axios, { params, data }) {
      // if you define the onSuccess function you have to set the state by yourself
      state.posts = payload.data
    },
    onError (state, error, axios, { params, data }) {
      // if you define the onSuccess function you have to set the state by yourself
    }
  })
  .get({
    action: 'getPost',
    property: 'post',
    path: ({ id }) => `/posts/${id}`,
    onSuccess (state, payload, axios, { params, data }) {
      // if you define the onSuccess function you have to set the state by yourself
      state.post = payload.data
      console.log(`Post with id ${params.id} successfully fetched.`)
    },
    onError (state, error, axios, { params, data }) {
      // if you define the onSuccess function you have to set the state by yourself
      state.post = null
    }
  })
  .getStore()

export default posts
