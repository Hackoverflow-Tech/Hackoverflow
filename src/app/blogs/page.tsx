import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { blogs } from "./data";

export default function Blogs() {
    return (
        <main className="min-h-screen bg-black py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    badge="Knowledge Hub"
                    title="Our"
                    gradientText="Blogs"
                    subtitle="Insights and advice from world-class education experts."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 mt-20">
                    {blogs.map((blog) => (
                        <Link
                            href={`/blogs/${blog.slug}`}
                            key={blog.id}
                            className="group relative bg-[#111] border border-white/5 rounded-[2.5rem] overflow-hidden cursor-pointer hover:border-orange-500/30 transition-all hover:-translate-y-4 block"
                        >
                            <div className="relative h-[280px] w-full overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80"></div>
                                <div className="absolute top-6 left-6">
                                    <span className="px-3 py-1 bg-orange-500 text-black text-xs font-bold rounded-full uppercase tracking-tighter">
                                        {blog.category}
                                    </span>
                                </div>
                                <div className="absolute top-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-md rounded-xl p-2 border border-white/10 flex items-center justify-center">
                                    <Image
                                        src="/images/Sponsors/imfsWhite.png"
                                        alt="IMFS"
                                        width={30}
                                        height={30}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="p-10 -mt-20 relative z-10">
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                    <span>{blog.date}</span>
                                    <span>•</span>
                                    <span className="text-orange-400">By {blog.author}</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors leading-tight">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-400 line-clamp-2 text-sm leading-relaxed mb-8">
                                    {blog.excerpt}
                                </p>
                                <div className="flex items-center text-orange-500 font-bold gap-2 group-hover:gap-4 transition-all">
                                    READ ARTICLE <span className="text-2xl">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* COMING SOON CARD */}
                    <div className="border-2 border-dashed border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center text-gray-600 bg-white/[0.02]">
                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 animate-pulse">
                            <span className="text-4xl text-gray-500">✍️</span>
                        </div>
                        <h4 className="text-xl font-bold text-white/40 italic">More articles in the works...</h4>
                        <p className="text-sm mt-2 max-w-[200px]">Our mentors are crafting more guides for your global journey.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
