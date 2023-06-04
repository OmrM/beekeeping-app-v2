/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createApiary = /* GraphQL */ `
  mutation CreateApiary(
    $input: CreateApiaryInput!
    $condition: ModelApiaryConditionInput
  ) {
    createApiary(input: $input, condition: $condition) {
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
export const updateApiary = /* GraphQL */ `
  mutation UpdateApiary(
    $input: UpdateApiaryInput!
    $condition: ModelApiaryConditionInput
  ) {
    updateApiary(input: $input, condition: $condition) {
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
export const deleteApiary = /* GraphQL */ `
  mutation DeleteApiary(
    $input: DeleteApiaryInput!
    $condition: ModelApiaryConditionInput
  ) {
    deleteApiary(input: $input, condition: $condition) {
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
export const createHive = /* GraphQL */ `
  mutation CreateHive(
    $input: CreateHiveInput!
    $condition: ModelHiveConditionInput
  ) {
    createHive(input: $input, condition: $condition) {
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
export const updateHive = /* GraphQL */ `
  mutation UpdateHive(
    $input: UpdateHiveInput!
    $condition: ModelHiveConditionInput
  ) {
    updateHive(input: $input, condition: $condition) {
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
export const deleteHive = /* GraphQL */ `
  mutation DeleteHive(
    $input: DeleteHiveInput!
    $condition: ModelHiveConditionInput
  ) {
    deleteHive(input: $input, condition: $condition) {
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
