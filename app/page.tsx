import Link from "next/link"
import Image from "next/image"
import { Shield, Lock, Server, Database, AlertTriangle, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"
import { db, blogPosts } from "@/lib/db"
import { formatDate } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default async function Home() {
  // Fetch the latest 3 blog posts with error handling
  let latestPosts: { id: string; slug: string; title: string; excerpt: string; coverImage?: string; createdAt: string }[] = []
  let dbError = false

  try {
    latestPosts = (await db.select().from(blogPosts).orderBy(blogPosts.createdAt).limit(3)).map(post => ({
      id: post.id.toString(),
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      coverImage: post.coverImage || undefined,
      createdAt: post.createdAt ? post.createdAt.toISOString() : ""
    }))
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    dbError = true
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 animate-fade-in-up">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient">
                  Xanverse AI Solutions
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl leading-relaxed">
                  Cutting-edge artificial intelligence and innovative technology solutions to transform your business.
                  Specializing in machine learning, data intelligence, and intelligent automation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in-up" style={{animationDelay: "0.2s"}}>
                <Link href="/projects">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50">
                    View My Work
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center animate-slide-in-right">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-full blur-2xl animate-float"></div>
                <div className="relative glass-dark p-6 rounded-2xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 col-span-2">
                      <div className="h-2 w-[80%] bg-primary/20 rounded-full"></div>
                      <div className="h-2 w-[60%] bg-primary/20 rounded-full"></div>
                    </div>
                    <div className="h-20 bg-gradient-to-br from-primary/20 to-emerald-600/20 rounded-lg flex items-center justify-center hover:from-primary/40 hover:to-emerald-600/40 transition-all">
                      <Lock className="h-8 w-8 text-primary animate-glow" />
                    </div>
                    <div className="h-20 bg-gradient-to-br from-primary/20 to-emerald-600/20 rounded-lg flex items-center justify-center hover:from-primary/40 hover:to-emerald-600/40 transition-all">
                      <Shield className="h-8 w-8 text-primary animate-glow" />
                    </div>
                    <div className="h-20 bg-gradient-to-br from-primary/20 to-emerald-600/20 rounded-lg flex items-center justify-center hover:from-primary/40 hover:to-emerald-600/40 transition-all">
                      <Server className="h-8 w-8 text-primary animate-glow" />
                    </div>
                    <div className="h-20 bg-gradient-to-br from-primary/20 to-emerald-600/20 rounded-lg flex items-center justify-center hover:from-primary/40 hover:to-emerald-600/40 transition-all">
                      <Database className="h-8 w-8 text-primary animate-glow" />
                    </div>
                    <div className="space-y-2 col-span-2 mt-2">
                      <div className="h-2 w-[70%] bg-primary/20 rounded-full"></div>
                      <div className="h-2 w-[50%] bg-primary/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Enhanced animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Database Error Alert */}
      {dbError && (
        <div className="container px-4 md:px-6 py-6">
          <Alert variant="destructive">
            <AlertTitle>Database Error</AlertTitle>
            <AlertDescription>
              There was an error connecting to the database. Please try refreshing the page or contact support if the
              issue persists.
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Core Expertise</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient">AI & Technology Solutions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Transforming ideas into intelligent solutions with cutting-edge AI and technology
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="group animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              <div className="tech-border p-6 rounded-xl bg-black/30 hover:glow-border transition-all duration-300 hover:scale-105 h-full">
                <AlertTriangle className="h-10 w-10 text-primary mb-4 group-hover:animate-glow" />
                <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Build intelligent systems with advanced ML algorithms and models
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>Predictive Analytics</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>Neural Networks</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>NLP Solutions</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>Computer Vision</li>
                </ul>
              </div>
            </div>
            <div className="group animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="tech-border p-6 rounded-xl bg-black/30 hover:glow-border transition-all duration-300 hover:scale-105 h-full">
                <Shield className="h-10 w-10 text-primary mb-4 group-hover:animate-glow" />
                <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Extract actionable insights from complex data sets
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>Data Visualization</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>Business Intelligence</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>Statistical Analysis</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>Big Data Processing</li>
                </ul>
              </div>
            </div>
            <div className="group animate-fade-in-up" style={{animationDelay: "0.3s"}}>
              <div className="tech-border p-6 rounded-xl bg-black/30 hover:glow-border transition-all duration-300 hover:scale-105 h-full">
                <FileCode className="h-10 w-10 text-primary mb-4 group-hover:animate-glow" />
                <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  End-to-end development with modern tech stacks
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>Web Applications</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>Cloud Infrastructure</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>API Development</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-primary rounded-full"></span>Automation Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
            <div className="flex flex-col justify-center space-y-4 animate-slide-in-left">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Background</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
                  AI & IT Professional
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Bachelor of Science in Information Technology specializing in Artificial Intelligence. Dedicated to building innovative solutions that leverage modern technology stacks.
                </p>
              </div>
              <ul className="grid gap-3 py-4">
                <li className="flex items-center gap-3 group">
                  <div className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="group-hover:text-primary transition-colors">Machine Learning & AI Development</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="group-hover:text-primary transition-colors">Data Analysis & Visualization</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="group-hover:text-primary transition-colors">Full Stack Development</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="group-hover:text-primary transition-colors">Cloud & Infrastructure Solutions</span>
                </li>
              </ul>
              <div>
                <Link href="/about">
                  <Button className="bg-gradient-to-r from-primary to-emerald-600 hover:shadow-lg hover:shadow-primary/50 transition-all">Learn More About My Experience</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg tech-border bg-gradient-to-br from-primary/20 to-emerald-600/20 p-2 lg:p-4 group hover:glow-border transition-all">
                    <Image
                      src="/digital-watchtower.png"
                      width={300}
                      height={300}
                      alt="AI systems"
                      className="aspect-square rounded-md object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg tech-border bg-gradient-to-br from-primary/20 to-emerald-600/20 p-2 lg:p-4 group hover:glow-border transition-all">
                    <Image
                      src="/digital-fortress.png"
                      width={300}
                      height={300}
                      alt="Data structures"
                      className="aspect-square rounded-md object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg tech-border bg-gradient-to-br from-primary/20 to-emerald-600/20 p-2 lg:p-4 group hover:glow-border transition-all">
                    <Image
                      src="/cyber-guardian.png"
                      width={300}
                      height={300}
                      alt="Technology professional"
                      className="aspect-square rounded-md object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg tech-border bg-gradient-to-br from-primary/20 to-emerald-600/20 p-2 lg:p-4 group hover:glow-border transition-all">
                    <Image
                      src="/modern-soc-overview.png"
                      width={300}
                      height={300}
                      alt="Cloud systems"
                      className="aspect-square rounded-md object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg tech-border bg-gradient-to-br from-primary/20 to-emerald-600/20 p-2 lg:p-4 group hover:glow-border transition-all">
                    <Image
                      src="/digital-security-breach.png"
                      width={300}
                      height={300}
                      alt="Development"
                      className="aspect-square rounded-md object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg tech-border bg-gradient-to-br from-primary/20 to-emerald-600/20 p-2 lg:p-4 group hover:glow-border transition-all">
                    <Image
                      src="/interconnected-threat-analysis.png"
                      width={300}
                      height={300}
                      alt="Analytics"
                      className="aspect-square rounded-md object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Newsletter</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-gradient">
                Stay Updated on AI & Tech Trends
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                Subscribe to get the latest insights on artificial intelligence, machine learning, and innovative technology solutions.
              </p>
            </div>
            <div className="w-full max-w-md mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-emerald-600/10 opacity-20"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </section>

      {/* Recent Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Blog</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient">Latest Insights</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Stay informed with articles on AI trends, technology innovations, and development best practices.
              </p>
            </div>
          </div>

          {dbError ? (
            <div className="mx-auto max-w-5xl py-12 text-center">
              <p className="text-muted-foreground">Unable to load blog posts at this time. Please try again later.</p>
            </div>
          ) : (
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {latestPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="tech-border rounded-lg overflow-hidden bg-black/20 transition-all duration-300 group-hover:glow-border h-full flex flex-col">
                    <div className="aspect-video w-full overflow-hidden relative">
                      <Image
                        src={post.coverImage || "/placeholder.svg?height=400&width=600&query=ai"}
                        width={600}
                        height={400}
                        alt={post.title}
                        className="object-cover transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-muted-foreground my-2 flex-grow">{post.excerpt}</p>
                      <p className="text-xs text-muted-foreground">{formatDate(post.createdAt)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-8">
            <Link href="/blog">
              <Button variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
