import React from 'react';
import { BlogCard } from './BlogCard';

const recentPosts = [
  {
    title: 'Advanced SQL Injection Techniques in 2025',
    excerpt:
      'Discover the latest SQL injection methods that bypass modern WAFs and security measures. Learn about time-based blind injections, second-order attacks, and polyglot payloads.',
    author: 'Sarah Johnson',
    date: 'Aug 22, 2025',
    category: 'Web Security',
    image:
      'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBjb2RlfGVufDF8fHx8MTc1NjIwMDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '8 min read',
  },
  {
    title: 'Building Undetectable C2 Infrastructure',
    excerpt:
      'Step-by-step guide to setting up command and control infrastructure that evades detection. Covers domain fronting, CDN abuse, and traffic obfuscation techniques.',
    author: 'Alex Rodriguez',
    date: 'Aug 20, 2025',
    category: 'Infrastructure',
    image:
      'https://images.unsplash.com/photo-1690547228166-d7202e7a40b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5ldHJhdGlvbiUyMHRlc3RpbmclMjBzZWN1cml0eXxlbnwxfHx8fDE3NTYyMDAyODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '12 min read',
  },
  {
    title: 'Exploiting Active Directory Weaknesses',
    excerpt:
      'Comprehensive analysis of common AD misconfigurations and how to exploit them. Includes Kerberoasting, ASREPRoasting, and DCSync attack vectors.',
    author: 'David Kim',
    date: 'Aug 18, 2025',
    category: 'Active Directory',
    image:
      'https://images.unsplash.com/photo-1727974290663-48ca35264028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYnJlYWNoJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzU2MjAwMjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '15 min read',
  },
  {
    title: 'Mobile App Penetration Testing Methodology',
    excerpt:
      'Complete framework for testing mobile applications. Covers static analysis, dynamic testing, runtime manipulation, and network traffic interception.',
    author: 'Emma Chen',
    date: 'Aug 16, 2025',
    category: 'Mobile Security',
    image:
      'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBjb2RlfGVufDF8fHx8MTc1NjIwMDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '10 min read',
  },
  {
    title: 'Social Engineering in the Remote Work Era',
    excerpt:
      'How remote work has changed the social engineering landscape. New attack vectors, phishing techniques, and psychological manipulation methods targeting remote workers.',
    author: 'Michael Torres',
    date: 'Aug 14, 2025',
    category: 'Social Engineering',
    image:
      'https://images.unsplash.com/photo-1690547228166-d7202e7a40b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5ldHJhdGlvbiUyMHRlc3RpbmclMjBzZWN1cml0eXxlbnwxfHx8fDE3NTYyMDAyODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '6 min read',
  },
  {
    title: 'Cloud Infrastructure Attack Patterns',
    excerpt:
      'Identifying and exploiting common cloud misconfigurations. Focus on AWS, Azure, and GCP security flaws that lead to data breaches and privilege escalation.',
    author: 'Lisa Wang',
    date: 'Aug 12, 2025',
    category: 'Cloud Security',
    image:
      'https://images.unsplash.com/photo-1727974290663-48ca35264028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYnJlYWNoJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzU2MjAwMjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '11 min read',
  },
];

export const RecentPosts: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Latest Articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest red team techniques, tools, and
            methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
