"use client";

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              Who I Am
            </h3>
            <p className="text-[var(--muted-dark)] leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building 
              web applications. I love turning complex problems into simple, beautiful, and 
              intuitive solutions.
            </p>
            <p className="text-[var(--muted-dark)] leading-relaxed">
              When I'm not coding, you can find me writing technical blog posts, contributing 
              to open-source projects, or exploring new technologies. I believe in continuous 
              learning and sharing knowledge with the community.
            </p>
            <p className="text-[var(--muted-dark)] leading-relaxed">
              My goal is to create impactful digital experiences that make a difference in 
              people's lives. Let's build something amazing together!
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[var(--card)] text-[var(--muted-dark)] rounded-full text-sm font-medium shadow-sm border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[var(--card)] rounded-xl shadow-sm border border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--primary)] mb-2">5+</div>
            <div className="text-[var(--muted-dark)]">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-[var(--card)] rounded-xl shadow-sm border border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--primary)] mb-2">50+</div>
            <div className="text-[var(--muted-dark)]">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-[var(--card)] rounded-xl shadow-sm border border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--primary)] mb-2">30+</div>
            <div className="text-[var(--muted-dark)]">Blog Articles</div>
          </div>
        </div>
      </div>
    </section>
  );
}
