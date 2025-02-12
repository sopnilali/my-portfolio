export interface Blog {
  _id: string
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
  total_likes: string;
}

export type Tproject = {
  _id: string;
  title: string;
  description: string;
  tools: string;
  image: string;
  githubfrontend: string;
  liveurl: string;
  githubbackend: string;
  duration: string;
  status: string;
}
