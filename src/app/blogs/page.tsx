"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

interface BlogType {
    id: number;
    date: string;
    author: string;
    authorTitle: string;
    category: string;
    title: string;
    excerpt: string;
    image: string;
    content: React.ReactNode;
}

const Info = ({ label, value }: { label: string; value: string }) => (
    <div className="bg-[#111] border border-orange-500/20 rounded-2xl p-6">
        <p className="text-orange-400 text-sm mb-2 uppercase tracking-wide">
            {label}
        </p>
        <p className="text-xl font-semibold text-white">{value}</p>
    </div>
);

export default function Blogs() {
    const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);

    const blogs: BlogType[] = [
        {
            id: 1,
            date: "March 13, 2026",
            author: "K. P. Singh",
            authorTitle: "Mentor | Educationist | Founder – IMFS",
            category: "Global Education",
            title: "Hackathons: Where Future Engineers Begin Building Their Story",
            excerpt: "Why events like HackOverflow 4.0 matter for students planning an MS abroad.",
            image: "/images/Events/studyabroad.jpeg",
            content: (
                <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
                    <section>
                        <p>
                            At <strong>HackOverflow 4.0</strong>, hosted by the Department of Computer Engineering at Pillai HOC College of Engineering and Technology, the atmosphere in the room felt very different from what one normally experiences in a classroom.
                        </p>
                        <p>
                            Students were gathered in small teams around their laptops. One group debated the architecture of their system, while another tested whether their algorithm could process data more efficiently. A whiteboard nearby carried layers of diagrams, each representing a new attempt to refine an idea.
                        </p>
                        <p className="text-xl italic border-l-4 border-orange-500 pl-6 my-8 text-white bg-white/5 py-4 rounded-r-xl">
                            "The energy in the room was unmistakable. Students were no longer simply studying technology. They were using it to build something new."
                        </p>
                        <p>
                            Events like this are increasingly supported through collaborations between institutions. HackOverflow 4.0, for example, benefited from academic engagement from <strong>Binghamton University (SUNY)</strong> and support from <strong>IMFS</strong>, reflecting a growing effort to connect Indian students with the innovation-driven environments that are common in global universities.
                        </p>
                    </section>

                    <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-orange-500 text-4xl">?</span> What Exactly Is a Hackathon?
                        </h2>
                        <p>
                            A hackathon is an intensive innovation event in which students collaborate to develop technological solutions to real-world problems within a limited time frame, typically 24 to 48 hours.
                        </p>
                        <p>
                            Participants work in teams with complementary abilities. A typical team might include:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 list-none p-0">
                            {[
                                { icon: "💻", text: "a programmer or backend developer" },
                                { icon: "🤖", text: "someone comfortable with data science or AI tools" },
                                { icon: "🏗️", text: "a student focusing on system architecture" },
                                { icon: "🎨", text: "a teammate responsible for interface design" }
                            ].map((item, idx) => (
                                <li key={idx} className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-3 text-sm">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Why Hackathons Matter for Students Planning an MS Abroad</h2>
                        <p>
                            Students preparing for graduate study often assume that admissions depend mainly on academic grades, standardized tests, and recommendation letters.
                        </p>
                        <p>
                            While these elements remain important, universities increasingly evaluate applicants through a broader perspective. Admissions committees want to see evidence that a student has initiative, intellectual curiosity, and the ability to apply knowledge to real problems.
                        </p>
                        <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-2xl my-8">
                            <h4 className="text-orange-400 font-bold mb-3 uppercase tracking-wider text-sm">Qualities Universities Value Deeply:</h4>
                            <ul className="space-y-3 list-none p-0 text-sm">
                                <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Intellectual curiosity beyond coursework</li>
                                <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Willingness to take initiative</li>
                                <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> The ability to collaborate with peers</li>
                                <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Practical engagement with technology</li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-white/10 overflow-hidden relative">
                        <h2 className="text-3xl font-bold text-white mb-8">Two Students, Two Applications</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-sm">
                                <h4 className="text-red-400 font-bold mb-2">Student A</h4>
                                <p>Excellent grades and strong test scores. Transcript is impressive, but reflects mostly classroom achievements.</p>
                            </div>
                            <div className="bg-orange-500/20 p-6 rounded-2xl border border-orange-500/30 text-sm">
                                <h4 className="text-orange-400 font-bold mb-2">Student B</h4>
                                <p>Similar academic results + participated in hackathons, built a prototype, and collaborated on real-world problems.</p>
                            </div>
                        </div>
                        <p className="mt-8 font-bold text-white">
                            To an admissions committee, the distinction becomes meaningful.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">How Hackathons Strengthen a Profile</h2>
                        <p>Participation in hackathons strengthens an MS application in several meaningful ways:</p>
                        <ul className="space-y-4 mt-4 list-decimal pl-6">
                            <li><strong>Engagement with real-world problems:</strong> Applying theory outside the classroom.</li>
                            <li><strong>Tangible outcomes:</strong> Prototypes, GitHub repos, and technical presentations.</li>
                            <li><strong>Teamwork and communication:</strong> Essential for graduate research environments.</li>
                            <li><strong>Resilience:</strong> Learning to experiment, fail, and iterate.</li>
                        </ul>
                    </section>

                    <section className="bg-black border border-white/10 p-8 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500"></div>
                        <h2 className="text-3xl font-bold text-white mb-6">Preparing for Your First Hackathon</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                            <div className="flex gap-4 items-start">
                                <span className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                                <div><h5 className="font-bold text-white mb-1">Technical Foundations</h5><p>Strengthen your skills in basic coding.</p></div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                                <div><h5 className="font-bold text-white mb-1">Small Projects</h5><p>Experiment with tiny apps or open source.</p></div>
                            </div>
                        </div>
                    </section>

                    <footer className="pt-10 border-t border-white/10">
                        <p className="text-gray-400 text-sm">Presented by <strong>IMFS</strong>, India’s most trusted study abroad guide since 1997</p>
                        <div className="mt-6">
                           <Link href="https://www.imfs.co.in" className="text-orange-500 font-bold hover:underline italic">Visit www.imfs.co.in for more insights.</Link>
                        </div>
                    </footer>
                </div>
            )
        }
    ];

    /* DETAIL VIEW */
    if (selectedBlog) {
        return (
            <main className="min-h-screen bg-black text-white px-6 py-32 relative">
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => setSelectedBlog(null)}
                        className="mb-10 text-orange-400 hover:text-orange-500 flex items-center gap-2 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Knowledge Hub
                    </button>

                    <div className="mb-12">
                        <span className="px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold rounded-full uppercase tracking-widest mb-6 inline-block">
                            {selectedBlog.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                            {selectedBlog.title}
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
                                <p className="font-bold text-xl text-white">By {selectedBlog.author}</p>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">{selectedBlog.authorTitle}</p>
                            </div>
                            <div className="ml-auto text-right hidden md:block">
                                <p className="text-sm text-gray-500">{selectedBlog.date}</p>
                            </div>
                        </div>

                        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-[0_30px_60px_-15px_rgba(249,115,22,0.2)]">
                            <Image
                                src={selectedBlog.image}
                                alt={selectedBlog.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        </div>

                        {selectedBlog.content}
                    </div>
                </div>
            </main>
        );
    }

    /* CARD VIEW (LISTING) */
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
                        <div
                            key={blog.id}
                            onClick={() => setSelectedBlog(blog)}
                            className="group relative bg-[#111] border border-white/5 rounded-[2.5rem] overflow-hidden cursor-pointer hover:border-orange-500/30 transition-all hover:-translate-y-4"
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
                        </div>
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
