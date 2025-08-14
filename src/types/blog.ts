type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  excerpt: string;
  industries: string;
  slug: string;
  image: string;

  // Card props your UI uses:
  paragraph: string; // (mapped from excerpt)
  author: Author;
  tags: string[];

  // Dates:
  publishDate: string; // pretty (e.g., "13 Aug 2025")
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  
};
