import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, AlertCircle } from "lucide-react";
import { BlogPost } from "@/lib/types";
import { getBlogPostBySlug } from "@/lib/blogService";
import { format } from "date-fns";
import 'react-quill/dist/quill.snow.css';

// Blog Post Template Components
const Template1 = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
        <img
          src={blog.imageURL}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {blog.title}
      </h1>
      <div className="flex items-center mb-8 text-gray-500">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">
            {format(new Date(blog.createdAt), "MMMM d, yyyy")}
          </span>
        </div>
      </div>
      <div 
        className="prose prose-lg max-w-none prose-headings:text-royal-gold prose-a:text-royal-gold hover:prose-a:text-warm-gold prose-blockquote:border-royal-gold/30 blog-content"
        dangerouslySetInnerHTML={{ __html: blog.fullContent }}
      />
    </div>
  );
};

const Template2 = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-1/2">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={blog.imageURL}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center mb-4 text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">
                {format(new Date(blog.createdAt), "MMMM d, yyyy")}
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-lg mb-4">
            {blog.shortDescription}
          </p>
        </div>
      </div>
      <div 
        className="prose prose-lg max-w-none prose-headings:text-royal-gold prose-a:text-royal-gold hover:prose-a:text-warm-gold prose-blockquote:border-royal-gold/30 blog-content"
        dangerouslySetInnerHTML={{ __html: blog.fullContent }}
      />
    </div>
  );
};

const Template3 = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        {blog.title}
      </h1>
      <div className="flex items-center justify-center mb-8 text-gray-500">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">
            {format(new Date(blog.createdAt), "MMMM d, yyyy")}
          </span>
        </div>
      </div>
      
      <div className="flex gap-6 mb-8">
        <div className="w-1/3">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={blog.imageURL}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-2/3">
          <div className="prose prose-lg mb-4">
            <p className="font-medium text-lg">{blog.shortDescription}</p>
          </div>
        </div>
      </div>
      
      <div 
        className="prose prose-lg max-w-none prose-headings:text-royal-gold prose-a:text-royal-gold hover:prose-a:text-warm-gold prose-blockquote:border-royal-gold/30 blog-content"
        dangerouslySetInnerHTML={{ __html: blog.fullContent }}
      />
    </div>
  );
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlogData(slug);
    }
  }, [slug]);

  const fetchBlogData = async (blogSlug: string) => {
    setLoading(true);
    setError(null);

    try {
      const blogData = await getBlogPostBySlug(blogSlug);

      if (!blogData) {
        setError("Blog post not found");
        return;
      }

      setBlog(blogData);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      setError("Failed to load blog post");
    } finally {
      setLoading(false);
    }
  };

  const renderTemplate = () => {
    if (!blog) return null;

    switch (blog.templateType) {
      case "template1":
        return <Template1 blog={blog} />;
      case "template2":
        return <Template2 blog={blog} />;
      case "template3":
        return <Template3 blog={blog} />;
      default:
        return <Template1 blog={blog} />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
          className="animate-spin h-8 w-8 text-navy"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4 max-w-lg">
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
        <Link
          to="/insights"
          className="mt-4 flex items-center text-navy hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Insights
        </Link>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Blog post not found</p>
        <Link
          to="/insights"
          className="mt-4 flex items-center text-navy hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Apex Executive Partners</title>
        <meta name="description" content={blog.shortDescription} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="pt-32 pb-20 bg-navy text-white">
          <div className="container mx-auto px-4">
            <Link
              to="/insights"
              className="flex items-center text-white hover:text-gold mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Link>
          </div>
        </section>

        <section className="py-16 bg-jet-black">
          <div className="container mx-auto px-4">
            {renderTemplate()}
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default BlogDetail; 