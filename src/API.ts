/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  blog?: Blog | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  blogPostsId?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  post?: Post | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  postCommentsId?: string | null,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  blogPostsId?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  blogPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  postCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  apiaries?: ModelApiaryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelApiaryConnection = {
  __typename: "ModelApiaryConnection",
  items:  Array<Apiary | null >,
  nextToken?: string | null,
};

export type Apiary = {
  __typename: "Apiary",
  id: string,
  userID: string,
  user?: User | null,
  name: string,
  location?: string | null,
  notes?: string | null,
  image?: string | null,
  hives?: ModelHiveConnection | null,
  createdAt: string,
  updatedAt: string,
  userApiariesId?: string | null,
};

export type ModelHiveConnection = {
  __typename: "ModelHiveConnection",
  items:  Array<Hive | null >,
  nextToken?: string | null,
};

export type Hive = {
  __typename: "Hive",
  id: string,
  apiary?: Apiary | null,
  name: string,
  notes?: string | null,
  image?: string | null,
  inspections?: ModelInspectionConnection | null,
  createdAt: string,
  updatedAt: string,
  apiaryHivesId?: string | null,
};

export type ModelInspectionConnection = {
  __typename: "ModelInspectionConnection",
  items:  Array<Inspection | null >,
  nextToken?: string | null,
};

export type Inspection = {
  __typename: "Inspection",
  id: string,
  hive?: Hive | null,
  date: string,
  notes?: string | null,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  hiveInspectionsId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateApiaryInput = {
  id?: string | null,
  userID: string,
  name: string,
  location?: string | null,
  notes?: string | null,
  image?: string | null,
  userApiariesId?: string | null,
};

export type ModelApiaryConditionInput = {
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelApiaryConditionInput | null > | null,
  or?: Array< ModelApiaryConditionInput | null > | null,
  not?: ModelApiaryConditionInput | null,
  userApiariesId?: ModelIDInput | null,
};

export type UpdateApiaryInput = {
  id: string,
  userID?: string | null,
  name?: string | null,
  location?: string | null,
  notes?: string | null,
  image?: string | null,
  userApiariesId?: string | null,
};

export type DeleteApiaryInput = {
  id: string,
};

export type CreateHiveInput = {
  id?: string | null,
  name: string,
  notes?: string | null,
  image?: string | null,
  apiaryHivesId?: string | null,
};

export type ModelHiveConditionInput = {
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelHiveConditionInput | null > | null,
  or?: Array< ModelHiveConditionInput | null > | null,
  not?: ModelHiveConditionInput | null,
  apiaryHivesId?: ModelIDInput | null,
};

export type UpdateHiveInput = {
  id: string,
  name?: string | null,
  notes?: string | null,
  image?: string | null,
  apiaryHivesId?: string | null,
};

export type DeleteHiveInput = {
  id: string,
};

export type CreateInspectionInput = {
  id?: string | null,
  date: string,
  notes?: string | null,
  image?: string | null,
  hiveInspectionsId?: string | null,
};

export type ModelInspectionConditionInput = {
  date?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelInspectionConditionInput | null > | null,
  or?: Array< ModelInspectionConditionInput | null > | null,
  not?: ModelInspectionConditionInput | null,
  hiveInspectionsId?: ModelIDInput | null,
};

export type UpdateInspectionInput = {
  id: string,
  date?: string | null,
  notes?: string | null,
  image?: string | null,
  hiveInspectionsId?: string | null,
};

export type DeleteInspectionInput = {
  id: string,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelApiaryFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelApiaryFilterInput | null > | null,
  or?: Array< ModelApiaryFilterInput | null > | null,
  not?: ModelApiaryFilterInput | null,
  userApiariesId?: ModelIDInput | null,
};

export type ModelHiveFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelHiveFilterInput | null > | null,
  or?: Array< ModelHiveFilterInput | null > | null,
  not?: ModelHiveFilterInput | null,
  apiaryHivesId?: ModelIDInput | null,
};

export type ModelInspectionFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelInspectionFilterInput | null > | null,
  or?: Array< ModelInspectionFilterInput | null > | null,
  not?: ModelInspectionFilterInput | null,
  hiveInspectionsId?: ModelIDInput | null,
};

export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionApiaryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApiaryFilterInput | null > | null,
  or?: Array< ModelSubscriptionApiaryFilterInput | null > | null,
};

export type ModelSubscriptionHiveFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHiveFilterInput | null > | null,
  or?: Array< ModelSubscriptionHiveFilterInput | null > | null,
};

export type ModelSubscriptionInspectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInspectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionInspectionFilterInput | null > | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    apiaries?:  {
      __typename: "ModelApiaryConnection",
      items:  Array< {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    apiaries?:  {
      __typename: "ModelApiaryConnection",
      items:  Array< {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    apiaries?:  {
      __typename: "ModelApiaryConnection",
      items:  Array< {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApiaryMutationVariables = {
  input: CreateApiaryInput,
  condition?: ModelApiaryConditionInput | null,
};

export type CreateApiaryMutation = {
  createApiary?:  {
    __typename: "Apiary",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      apiaries?:  {
        __typename: "ModelApiaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    location?: string | null,
    notes?: string | null,
    image?: string | null,
    hives?:  {
      __typename: "ModelHiveConnection",
      items:  Array< {
        __typename: "Hive",
        id: string,
        name: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        apiaryHivesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userApiariesId?: string | null,
  } | null,
};

export type UpdateApiaryMutationVariables = {
  input: UpdateApiaryInput,
  condition?: ModelApiaryConditionInput | null,
};

export type UpdateApiaryMutation = {
  updateApiary?:  {
    __typename: "Apiary",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      apiaries?:  {
        __typename: "ModelApiaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    location?: string | null,
    notes?: string | null,
    image?: string | null,
    hives?:  {
      __typename: "ModelHiveConnection",
      items:  Array< {
        __typename: "Hive",
        id: string,
        name: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        apiaryHivesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userApiariesId?: string | null,
  } | null,
};

export type DeleteApiaryMutationVariables = {
  input: DeleteApiaryInput,
  condition?: ModelApiaryConditionInput | null,
};

export type DeleteApiaryMutation = {
  deleteApiary?:  {
    __typename: "Apiary",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      apiaries?:  {
        __typename: "ModelApiaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    location?: string | null,
    notes?: string | null,
    image?: string | null,
    hives?:  {
      __typename: "ModelHiveConnection",
      items:  Array< {
        __typename: "Hive",
        id: string,
        name: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        apiaryHivesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userApiariesId?: string | null,
  } | null,
};

export type CreateHiveMutationVariables = {
  input: CreateHiveInput,
  condition?: ModelHiveConditionInput | null,
};

export type CreateHiveMutation = {
  createHive?:  {
    __typename: "Hive",
    id: string,
    apiary?:  {
      __typename: "Apiary",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      location?: string | null,
      notes?: string | null,
      image?: string | null,
      hives?:  {
        __typename: "ModelHiveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userApiariesId?: string | null,
    } | null,
    name: string,
    notes?: string | null,
    image?: string | null,
    inspections?:  {
      __typename: "ModelInspectionConnection",
      items:  Array< {
        __typename: "Inspection",
        id: string,
        date: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        hiveInspectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiaryHivesId?: string | null,
  } | null,
};

export type UpdateHiveMutationVariables = {
  input: UpdateHiveInput,
  condition?: ModelHiveConditionInput | null,
};

export type UpdateHiveMutation = {
  updateHive?:  {
    __typename: "Hive",
    id: string,
    apiary?:  {
      __typename: "Apiary",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      location?: string | null,
      notes?: string | null,
      image?: string | null,
      hives?:  {
        __typename: "ModelHiveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userApiariesId?: string | null,
    } | null,
    name: string,
    notes?: string | null,
    image?: string | null,
    inspections?:  {
      __typename: "ModelInspectionConnection",
      items:  Array< {
        __typename: "Inspection",
        id: string,
        date: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        hiveInspectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiaryHivesId?: string | null,
  } | null,
};

export type DeleteHiveMutationVariables = {
  input: DeleteHiveInput,
  condition?: ModelHiveConditionInput | null,
};

export type DeleteHiveMutation = {
  deleteHive?:  {
    __typename: "Hive",
    id: string,
    apiary?:  {
      __typename: "Apiary",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      location?: string | null,
      notes?: string | null,
      image?: string | null,
      hives?:  {
        __typename: "ModelHiveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userApiariesId?: string | null,
    } | null,
    name: string,
    notes?: string | null,
    image?: string | null,
    inspections?:  {
      __typename: "ModelInspectionConnection",
      items:  Array< {
        __typename: "Inspection",
        id: string,
        date: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        hiveInspectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiaryHivesId?: string | null,
  } | null,
};

export type CreateInspectionMutationVariables = {
  input: CreateInspectionInput,
  condition?: ModelInspectionConditionInput | null,
};

export type CreateInspectionMutation = {
  createInspection?:  {
    __typename: "Inspection",
    id: string,
    hive?:  {
      __typename: "Hive",
      id: string,
      apiary?:  {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null,
      name: string,
      notes?: string | null,
      image?: string | null,
      inspections?:  {
        __typename: "ModelInspectionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      apiaryHivesId?: string | null,
    } | null,
    date: string,
    notes?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    hiveInspectionsId?: string | null,
  } | null,
};

export type UpdateInspectionMutationVariables = {
  input: UpdateInspectionInput,
  condition?: ModelInspectionConditionInput | null,
};

export type UpdateInspectionMutation = {
  updateInspection?:  {
    __typename: "Inspection",
    id: string,
    hive?:  {
      __typename: "Hive",
      id: string,
      apiary?:  {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null,
      name: string,
      notes?: string | null,
      image?: string | null,
      inspections?:  {
        __typename: "ModelInspectionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      apiaryHivesId?: string | null,
    } | null,
    date: string,
    notes?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    hiveInspectionsId?: string | null,
  } | null,
};

export type DeleteInspectionMutationVariables = {
  input: DeleteInspectionInput,
  condition?: ModelInspectionConditionInput | null,
};

export type DeleteInspectionMutation = {
  deleteInspection?:  {
    __typename: "Inspection",
    id: string,
    hive?:  {
      __typename: "Hive",
      id: string,
      apiary?:  {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null,
      name: string,
      notes?: string | null,
      image?: string | null,
      inspections?:  {
        __typename: "ModelInspectionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      apiaryHivesId?: string | null,
    } | null,
    date: string,
    notes?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    hiveInspectionsId?: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    apiaries?:  {
      __typename: "ModelApiaryConnection",
      items:  Array< {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      apiaries?:  {
        __typename: "ModelApiaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApiaryQueryVariables = {
  id: string,
};

export type GetApiaryQuery = {
  getApiary?:  {
    __typename: "Apiary",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      apiaries?:  {
        __typename: "ModelApiaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    location?: string | null,
    notes?: string | null,
    image?: string | null,
    hives?:  {
      __typename: "ModelHiveConnection",
      items:  Array< {
        __typename: "Hive",
        id: string,
        name: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        apiaryHivesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userApiariesId?: string | null,
  } | null,
};

export type ListApiariesQueryVariables = {
  filter?: ModelApiaryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApiariesQuery = {
  listApiaries?:  {
    __typename: "ModelApiaryConnection",
    items:  Array< {
      __typename: "Apiary",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      location?: string | null,
      notes?: string | null,
      image?: string | null,
      hives?:  {
        __typename: "ModelHiveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userApiariesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHiveQueryVariables = {
  id: string,
};

export type GetHiveQuery = {
  getHive?:  {
    __typename: "Hive",
    id: string,
    apiary?:  {
      __typename: "Apiary",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      location?: string | null,
      notes?: string | null,
      image?: string | null,
      hives?:  {
        __typename: "ModelHiveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userApiariesId?: string | null,
    } | null,
    name: string,
    notes?: string | null,
    image?: string | null,
    inspections?:  {
      __typename: "ModelInspectionConnection",
      items:  Array< {
        __typename: "Inspection",
        id: string,
        date: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        hiveInspectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiaryHivesId?: string | null,
  } | null,
};

export type ListHivesQueryVariables = {
  filter?: ModelHiveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHivesQuery = {
  listHives?:  {
    __typename: "ModelHiveConnection",
    items:  Array< {
      __typename: "Hive",
      id: string,
      apiary?:  {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null,
      name: string,
      notes?: string | null,
      image?: string | null,
      inspections?:  {
        __typename: "ModelInspectionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      apiaryHivesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInspectionQueryVariables = {
  id: string,
};

export type GetInspectionQuery = {
  getInspection?:  {
    __typename: "Inspection",
    id: string,
    hive?:  {
      __typename: "Hive",
      id: string,
      apiary?:  {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null,
      name: string,
      notes?: string | null,
      image?: string | null,
      inspections?:  {
        __typename: "ModelInspectionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      apiaryHivesId?: string | null,
    } | null,
    date: string,
    notes?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    hiveInspectionsId?: string | null,
  } | null,
};

export type ListInspectionsQueryVariables = {
  filter?: ModelInspectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInspectionsQuery = {
  listInspections?:  {
    __typename: "ModelInspectionConnection",
    items:  Array< {
      __typename: "Inspection",
      id: string,
      hive?:  {
        __typename: "Hive",
        id: string,
        name: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        apiaryHivesId?: string | null,
      } | null,
      date: string,
      notes?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      hiveInspectionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    apiaries?:  {
      __typename: "ModelApiaryConnection",
      items:  Array< {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    apiaries?:  {
      __typename: "ModelApiaryConnection",
      items:  Array< {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    apiaries?:  {
      __typename: "ModelApiaryConnection",
      items:  Array< {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApiarySubscriptionVariables = {
  filter?: ModelSubscriptionApiaryFilterInput | null,
};

export type OnCreateApiarySubscription = {
  onCreateApiary?:  {
    __typename: "Apiary",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      apiaries?:  {
        __typename: "ModelApiaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    location?: string | null,
    notes?: string | null,
    image?: string | null,
    hives?:  {
      __typename: "ModelHiveConnection",
      items:  Array< {
        __typename: "Hive",
        id: string,
        name: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        apiaryHivesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userApiariesId?: string | null,
  } | null,
};

export type OnUpdateApiarySubscriptionVariables = {
  filter?: ModelSubscriptionApiaryFilterInput | null,
};

export type OnUpdateApiarySubscription = {
  onUpdateApiary?:  {
    __typename: "Apiary",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      apiaries?:  {
        __typename: "ModelApiaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    location?: string | null,
    notes?: string | null,
    image?: string | null,
    hives?:  {
      __typename: "ModelHiveConnection",
      items:  Array< {
        __typename: "Hive",
        id: string,
        name: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        apiaryHivesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userApiariesId?: string | null,
  } | null,
};

export type OnDeleteApiarySubscriptionVariables = {
  filter?: ModelSubscriptionApiaryFilterInput | null,
};

export type OnDeleteApiarySubscription = {
  onDeleteApiary?:  {
    __typename: "Apiary",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      apiaries?:  {
        __typename: "ModelApiaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    location?: string | null,
    notes?: string | null,
    image?: string | null,
    hives?:  {
      __typename: "ModelHiveConnection",
      items:  Array< {
        __typename: "Hive",
        id: string,
        name: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        apiaryHivesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userApiariesId?: string | null,
  } | null,
};

export type OnCreateHiveSubscriptionVariables = {
  filter?: ModelSubscriptionHiveFilterInput | null,
};

export type OnCreateHiveSubscription = {
  onCreateHive?:  {
    __typename: "Hive",
    id: string,
    apiary?:  {
      __typename: "Apiary",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      location?: string | null,
      notes?: string | null,
      image?: string | null,
      hives?:  {
        __typename: "ModelHiveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userApiariesId?: string | null,
    } | null,
    name: string,
    notes?: string | null,
    image?: string | null,
    inspections?:  {
      __typename: "ModelInspectionConnection",
      items:  Array< {
        __typename: "Inspection",
        id: string,
        date: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        hiveInspectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiaryHivesId?: string | null,
  } | null,
};

export type OnUpdateHiveSubscriptionVariables = {
  filter?: ModelSubscriptionHiveFilterInput | null,
};

export type OnUpdateHiveSubscription = {
  onUpdateHive?:  {
    __typename: "Hive",
    id: string,
    apiary?:  {
      __typename: "Apiary",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      location?: string | null,
      notes?: string | null,
      image?: string | null,
      hives?:  {
        __typename: "ModelHiveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userApiariesId?: string | null,
    } | null,
    name: string,
    notes?: string | null,
    image?: string | null,
    inspections?:  {
      __typename: "ModelInspectionConnection",
      items:  Array< {
        __typename: "Inspection",
        id: string,
        date: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        hiveInspectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiaryHivesId?: string | null,
  } | null,
};

export type OnDeleteHiveSubscriptionVariables = {
  filter?: ModelSubscriptionHiveFilterInput | null,
};

export type OnDeleteHiveSubscription = {
  onDeleteHive?:  {
    __typename: "Hive",
    id: string,
    apiary?:  {
      __typename: "Apiary",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      location?: string | null,
      notes?: string | null,
      image?: string | null,
      hives?:  {
        __typename: "ModelHiveConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userApiariesId?: string | null,
    } | null,
    name: string,
    notes?: string | null,
    image?: string | null,
    inspections?:  {
      __typename: "ModelInspectionConnection",
      items:  Array< {
        __typename: "Inspection",
        id: string,
        date: string,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        hiveInspectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    apiaryHivesId?: string | null,
  } | null,
};

export type OnCreateInspectionSubscriptionVariables = {
  filter?: ModelSubscriptionInspectionFilterInput | null,
};

export type OnCreateInspectionSubscription = {
  onCreateInspection?:  {
    __typename: "Inspection",
    id: string,
    hive?:  {
      __typename: "Hive",
      id: string,
      apiary?:  {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null,
      name: string,
      notes?: string | null,
      image?: string | null,
      inspections?:  {
        __typename: "ModelInspectionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      apiaryHivesId?: string | null,
    } | null,
    date: string,
    notes?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    hiveInspectionsId?: string | null,
  } | null,
};

export type OnUpdateInspectionSubscriptionVariables = {
  filter?: ModelSubscriptionInspectionFilterInput | null,
};

export type OnUpdateInspectionSubscription = {
  onUpdateInspection?:  {
    __typename: "Inspection",
    id: string,
    hive?:  {
      __typename: "Hive",
      id: string,
      apiary?:  {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null,
      name: string,
      notes?: string | null,
      image?: string | null,
      inspections?:  {
        __typename: "ModelInspectionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      apiaryHivesId?: string | null,
    } | null,
    date: string,
    notes?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    hiveInspectionsId?: string | null,
  } | null,
};

export type OnDeleteInspectionSubscriptionVariables = {
  filter?: ModelSubscriptionInspectionFilterInput | null,
};

export type OnDeleteInspectionSubscription = {
  onDeleteInspection?:  {
    __typename: "Inspection",
    id: string,
    hive?:  {
      __typename: "Hive",
      id: string,
      apiary?:  {
        __typename: "Apiary",
        id: string,
        userID: string,
        name: string,
        location?: string | null,
        notes?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userApiariesId?: string | null,
      } | null,
      name: string,
      notes?: string | null,
      image?: string | null,
      inspections?:  {
        __typename: "ModelInspectionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      apiaryHivesId?: string | null,
    } | null,
    date: string,
    notes?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    hiveInspectionsId?: string | null,
  } | null,
};
