export module News {
  export interface Source {
    id: string;
    name: string;
  }

  export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
  }

  export interface HeadlinesResponse {
    status: string;
    totalResults: number;
    articles: Article[];
  }
}

export interface ParseResult {
  title: string | null;
  content: string | null;
  author: string | null;
  date_published: string | null;
  lead_image_url: string | null;
  dek: string | null;
  next_page_url: string | null;
  url: string;
  domain: string;
  excerpt: string | null;
  word_count: number;
  direction: 'ltr' | 'rtl';
  total_pages: number;
  rendered_pages: number;
}
