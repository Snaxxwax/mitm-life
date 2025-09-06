import React from 'react';
import { Badge } from '../ui/badge';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime?: string;
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
    <article className="group cursor-pointer">
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-red-500/20">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/20">
              {category}
            </Badge>
            {readTime && (
              <span className="text-xs text-muted-foreground">{readTime}</span>
            )}
          </div>
          
          <h3 className="font-semibold leading-tight text-card-foreground group-hover:text-red-500 transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{date}</span>
              </div>
            </div>
            <svg className="h-4 w-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};