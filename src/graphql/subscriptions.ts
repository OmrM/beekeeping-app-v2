/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateApiary = /* GraphQL */ `
  subscription OnCreateApiary($filter: ModelSubscriptionApiaryFilterInput) {
    onCreateApiary(filter: $filter) {
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
export const onUpdateApiary = /* GraphQL */ `
  subscription OnUpdateApiary($filter: ModelSubscriptionApiaryFilterInput) {
    onUpdateApiary(filter: $filter) {
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
export const onDeleteApiary = /* GraphQL */ `
  subscription OnDeleteApiary($filter: ModelSubscriptionApiaryFilterInput) {
    onDeleteApiary(filter: $filter) {
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
export const onCreateHive = /* GraphQL */ `
  subscription OnCreateHive($filter: ModelSubscriptionHiveFilterInput) {
    onCreateHive(filter: $filter) {
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
export const onUpdateHive = /* GraphQL */ `
  subscription OnUpdateHive($filter: ModelSubscriptionHiveFilterInput) {
    onUpdateHive(filter: $filter) {
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
export const onDeleteHive = /* GraphQL */ `
  subscription OnDeleteHive($filter: ModelSubscriptionHiveFilterInput) {
    onDeleteHive(filter: $filter) {
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
