export interface Tool {
  name: string;
  slug: string;
  description: string;
  category: string;
  categorySlug: string;
  icon: string;
  priority: 'high' | 'medium' | 'low';
  tags?: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  tools: Tool[];
}
