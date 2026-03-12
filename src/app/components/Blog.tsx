"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [postLoading, setPostLoading] = useState(false);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleReadMore = async (slug: string) => {
    setPostLoading(true);
    try {
      const res = await fetch(`/api/posts/${slug}`);
      const post = await res.json();
      setSelectedPost(post);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error loading post:', error);
    }
    setPostLoading(false);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background)] pt-24">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="mb-6 flex items-center gap-2 text-[var(--primary)] hover:font-bold font-medium transition-all cursor-pointer"
          >
            ← Back
          </button>
          <article className="bg-[var(--card)] rounded-xl shadow-lg border border-[var(--border)] overflow-hidden">
            {/* <div className="h-48 bg-gradient-to-br from-[var(--primary)] to-green-700 flex items-center justify-center">
              <span className="text-white text-6xl font-bold opacity-20">
                {selectedPost.category[0]}
              </span>
            </div> */}
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-[var(--muted-dark)] mb-4">
                <span>{formatDate(selectedPost.date)}</span>
                {/* <span>•</span> */}
                {/* <span>{selectedPost.readTime}</span> */}
              </div>
              {/* <span className="inline-block px-3 py-1 bg-[var(--secondary)]/30 text-[var(--primary)] text-xs font-semibold rounded-full mb-4">
                {selectedPost.category}
              </span> */}
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-6">
                {selectedPost.title}
              </h1>
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse text-[var(--muted-dark)]">Loading posts...</div>
          </div>
        </div>
      </section>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-[var(--muted-dark)]">No blog posts found.</div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            My Blog
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[var(--muted-dark)] max-w-2xl mx-auto">
            Here I write about the thoughts that wander through my mind while walking alone on an empty road, gazing at 
            the stars on a quiet night, or lying awake at midnight waiting for sleep to take over.
             Sometimes they come while watching a still river, or while sitting by the window seat of a bus or a train,
              letting the world quietly pass by.
               {/* smoking a cigarette, */}
          </p>
        </div>

        {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-[var(--primary)] text-black shadow-md"
                  : "bg-[var(--card)] text-[var(--muted-dark)] hover:bg-[var(--card-hover)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-[var(--card)] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--border)] overflow-hidden cursor-pointer"
            >
              {/* <div className="h-48 bg-gradient-to-br from-[var(--primary)] to-green-700 flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-20">
                  {post.category[0]}
                </span>
              </div> */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-[var(--muted-dark)] mb-3">
                  <span>{formatDate(post.date)}</span>
                  {/* <span>•</span> */}
                  {/* <span>{post.readTime}</span> */}
                </div>
                {/* <span className="inline-block px-3 py-1 bg-[var(--secondary)]/30 text-[var(--primary)] text-xs font-semibold rounded-full mb-3">
                  {post.category}
                </span> */}
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[var(--muted-dark)] text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => handleReadMore(post.slug)}
                  className="text-[var(--primary)] font-semibold text-sm hover:font-bold transition-all cursor-pointer"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black font-semibold rounded-lg transition-all duration-200 cursor-pointer">
            View All Articles
          </button>
        </div> */}
      </div>
    </section>
  );
}
