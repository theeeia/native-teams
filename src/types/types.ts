export interface Article {
  title: string;
  url: string;
  source: {
    id: string | null;
    name: string;
  };
  description?: string;
  urlToImage?: string;
  author?: string;
  publishedAt?: string;
  content?: string;
  message?: string;
}

export interface FetchArticlesReturn {
  loading: boolean;
  error: string;
  articles: Article[];
  totalResults: number;
}

export type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";
