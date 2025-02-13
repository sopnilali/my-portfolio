export interface Blog {
  _id: string
  title: string;
  description: string;
  publish_date: string;
  category: string;
  blog_image: string;
  total_likes: string;
}

export type Tproject = {
  _id: string;
  title: string;
  descriptions: string;
  tools: string;
  image: string;
  githubfrontend: string;
  livelink: string;
  githubbackend: string;
  projectduration: string;
  projectstatus: string;
}

export type TMessage = {
  _id: string;
  name: string;
  email: string;
  message: string;
}
