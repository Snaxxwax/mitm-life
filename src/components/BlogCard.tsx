import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  author,
  date,
  category,
  image,
  readTime
}) => {
  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">
            {readTime}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-foreground line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>By {author}</span>
          <time>{date}</time>
        </div>
      </div>
    </article>
  );
};