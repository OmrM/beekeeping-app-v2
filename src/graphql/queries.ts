/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        content
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      apiaries {
        items {
          id
          userID
          name
          location
          notes
          createdAt
          updatedAt
          userApiariesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        apiaries {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getApiary = /* GraphQL */ `
  query GetApiary($id: ID!) {
    getApiary(id: $id) {
      id
      userID
      user {
        id
        username
        apiaries {
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      location
      notes
      image {
        bucket
        region
        key
      }
      hives {
        items {
          id
          apiaryID
          name
          notes
          createdAt
          updatedAt
          apiaryHivesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userApiariesId
    }
  }
`;
export const listApiaries = /* GraphQL */ `
  query ListApiaries(
    $filter: ModelApiaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApiaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          username
          createdAt
          updatedAt
        }
        name
        location
        notes
        image {
          bucket
          region
          key
        }
        hives {
          nextToken
        }
        createdAt
        updatedAt
        userApiariesId
      }
      nextToken
    }
  }
`;
export const getHive = /* GraphQL */ `
  query GetHive($id: ID!) {
    getHive(id: $id) {
      id
      apiaryID
      apiary {
        id
        userID
        user {
          id
          username
          createdAt
          updatedAt
        }
        name
        location
        notes
        image {
          bucket
          region
          key
        }
        hives {
          nextToken
        }
        createdAt
        updatedAt
        userApiariesId
      }
      name
      notes
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      apiaryHivesId
    }
  }
`;
export const listHives = /* GraphQL */ `
  query ListHives(
    $filter: ModelHiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        apiaryID
        apiary {
          id
          userID
          name
          location
          notes
          createdAt
          updatedAt
          userApiariesId
        }
        name
        notes
        image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        apiaryHivesId
      }
      nextToken
    }
  }
`;
