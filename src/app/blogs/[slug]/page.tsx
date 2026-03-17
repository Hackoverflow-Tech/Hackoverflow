import Image from "next/image";
import Link from "next/link";
import { blogs } from "../data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> | { slug: string } }) {
    const params = await Promise.resolve(props.params);
    const blog = blogs.find((b) => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white px-6 py-32 relative">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/blogs"
                    className="mb-10 text-orange-400 hover:text-orange-500 inline-flex items-center gap-2 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Knowledge Hub
                </Link>

                <div className="mb-12">
                    <span className="px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold rounded-full uppercase tracking-widest mb-6 inline-block">
                        {blog.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                        {blog.title}
                    </h1>

                    <div className="flex items-center gap-4 py-8 border-y border-white/10 mb-12 relative overflow-hidden">
                        <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center border-2 border-orange-400 p-2 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                            <Image
                                src="/images/Sponsors/imfsWhite.png"
                                alt="IMFS Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-xl text-white">By {blog.author}</p>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">{blog.authorTitle}</p>
                        </div>
                        <div className="ml-auto text-right hidden md:block">
                            <p className="text-sm text-gray-500">{blog.date}</p>
                        </div>
                    </div>

                    <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-[0_30px_60px_-15px_rgba(249,115,22,0.2)]">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </div>

                    {blog.content}
                </div>
            </div>
        </main>
    );
}
