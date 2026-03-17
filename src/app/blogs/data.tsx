import Link from "next/link";
import React from "react";

export interface BlogType {
    id: number;
    slug: string;
    date: string;
    author: string;
    authorTitle: string;
    category: string;
    title: string;
    excerpt: string;
    image: string;
    content: React.ReactNode;
}

export const blogs: BlogType[] = [
    {
        id: 1,
        slug: "hackathons-where-future-engineers-begin",
        date: "March 13, 2026",
        author: "K. P. Singh",
        authorTitle: "Mentor | Educationist | Founder – IMFS",
        category: "Global Education",
        title: "Hackathons: Where Future Engineers Begin Building Their Story",
        excerpt: "Why events like HackOverflow 4.0 matter for students planning an MS abroad.",
        image: "/images/blogs/Sponsor event.PNG",
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
                        &quot;The energy in the room was unmistakable. Students were no longer simply studying technology. They were using it to build something new.&quot;
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
                        <Link href="https://www.imfs.co.in" className="text-orange-500 font-bold hover:underline italic" target="_blank">Visit www.imfs.co.in for more insights.</Link>
                    </div>
                </footer>
            </div>
        )
    }
];
