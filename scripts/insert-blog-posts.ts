import "dotenv/config";
import { db, blogPosts } from "@/lib/db";

const blogPostsData = [
  {
    title: "Getting Started with Machine Learning in 2025",
    slug: "getting-started-machine-learning",
    excerpt: "A comprehensive guide to beginning your machine learning journey with practical tips and resources.",
    content: "Machine learning is revolutionizing the way we solve problems. In this guide, we explore the fundamentals of ML, key algorithms, and how to start your journey as a machine learning engineer. From supervised learning to neural networks, discover the essential concepts you need to know.",
    coverImage: "/digital-watchtower.png",
    author: "Jan Xandrei Padua",
    readTime: "8 min read",
  },
  {
    title: "AI-Powered Data Analysis: Tools and Best Practices",
    slug: "ai-powered-data-analysis",
    excerpt: "Learn how to leverage AI and machine learning for advanced data analysis and insights.",
    content: "Data is the new oil, and AI is the refinery. Discover how to use machine learning algorithms to extract meaningful patterns from large datasets. We cover data preprocessing, feature engineering, model selection, and evaluation techniques for effective data analysis.",
    coverImage: "/digital-fortress.png",
    author: "Jan Xandrei Padua",
    readTime: "10 min read",
  },
  {
    title: "Building Scalable Backend Systems with Modern Technology",
    slug: "building-scalable-backend-systems",
    excerpt: "Master the architecture and design patterns for creating robust, scalable backend systems.",
    content: "Building systems that can handle millions of requests requires careful planning. Explore microservices architecture, containerization with Docker, orchestration with Kubernetes, and best practices for creating resilient backend systems that scale.",
    coverImage: "/cyber-guardian.png",
    author: "Jan Xandrei Padua",
    readTime: "12 min read",
  },
  {
    title: "Cloud Infrastructure: AWS vs Azure vs GCP",
    slug: "cloud-infrastructure-comparison",
    excerpt: "A detailed comparison of major cloud platforms and how to choose the right one for your needs.",
    content: "Choosing the right cloud platform can significantly impact your project's success. We compare AWS, Azure, and GCP across pricing, services, scalability, and performance. Learn the strengths and weaknesses of each platform and make an informed decision.",
    coverImage: "/modern-soc-overview.png",
    author: "Jan Xandrei Padua",
    readTime: "11 min read",
  },
  {
    title: "Deep Dive into Neural Networks and Deep Learning",
    slug: "neural-networks-deep-learning",
    excerpt: "Understanding the architecture and applications of neural networks in modern AI systems.",
    content: "Neural networks are the backbone of modern AI. Explore how artificial neurons work, different network architectures (CNNs, RNNs, Transformers), and their applications in computer vision, NLP, and more. Includes practical examples and implementation tips.",
    coverImage: "/digital-security-breach.png",
    author: "Jan Xandrei Padua",
    readTime: "15 min read",
  },
  {
    title: "Natural Language Processing: From Basics to Advanced",
    slug: "nlp-basics-advanced",
    excerpt: "A complete guide to NLP techniques for building intelligent language understanding systems.",
    content: "Natural Language Processing enables computers to understand human language. Learn about tokenization, word embeddings, sentiment analysis, and transformer models like BERT and GPT. Discover how to build chatbots, text classifiers, and language translation systems.",
    coverImage: "/interconnected-threat-analysis.png",
    author: "Jan Xandrei Padua",
    readTime: "13 min read",
  },
  {
    title: "DevOps Best Practices for Continuous Integration and Deployment",
    slug: "devops-ci-cd-best-practices",
    excerpt: "Streamline your development workflow with CI/CD pipelines and DevOps practices.",
    content: "DevOps bridges the gap between development and operations. Learn about continuous integration, continuous deployment, automated testing, and monitoring. Implement tools like Jenkins, GitLab CI, and Docker to create efficient development pipelines.",
    coverImage: "/digital-watchtower.png",
    author: "Jan Xandrei Padua",
    readTime: "9 min read",
  },
  {
    title: "Web Development Trends: Frontend Technologies in 2025",
    slug: "frontend-trends-2025",
    excerpt: "Exploring the latest frontend technologies and frameworks shaping modern web development.",
    content: "Frontend development is rapidly evolving. Discover the latest trends including React 19, Vue 3, Svelte, and emerging frameworks. Learn about server-side rendering, static generation, and component-driven architecture. Master CSS innovations and performance optimization techniques.",
    coverImage: "/digital-fortress.png",
    author: "Jan Xandrei Padua",
    readTime: "10 min read",
  },
  {
    title: "Computer Vision: Applications and Implementation Guide",
    slug: "computer-vision-guide",
    excerpt: "Learn how to build computer vision applications for image recognition and analysis.",
    content: "Computer vision brings AI to images and videos. Understand convolutional neural networks, object detection, face recognition, and image segmentation. Build applications using OpenCV, TensorFlow, and PyTorch. Explore real-world applications in autonomous vehicles, medical imaging, and more.",
    coverImage: "/cyber-guardian.png",
    author: "Jan Xandrei Padua",
    readTime: "14 min read",
  },
  {
    title: "Optimizing Database Performance for High-Traffic Applications",
    slug: "database-performance-optimization",
    excerpt: "Advanced techniques for optimizing database queries and improving application performance.",
    content: "Database performance is critical for application success. Learn about indexing strategies, query optimization, caching mechanisms, and database sharding. Explore different databases (PostgreSQL, MongoDB, Redis) and their use cases. Implement monitoring and profiling tools.",
    coverImage: "/modern-soc-overview.png",
    author: "Jan Xandrei Padua",
    readTime: "11 min read",
  },
];

async function insertBlogPosts() {
  try {
    console.log("Starting to insert blog posts...");
    
    for (const post of blogPostsData) {
      await db.insert(blogPosts).values({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.coverImage,
        author: post.author,
        readTime: post.readTime,
      });
      console.log(`✓ Inserted: ${post.title}`);
    }
    
    console.log("\n✓ All blog posts inserted successfully!");
  } catch (error) {
    console.error("Error inserting blog posts:", error);
  }
}

insertBlogPosts();
