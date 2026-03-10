"use client";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--primary)] to-green-700 flex items-center justify-center text-white text-4xl font-bold">
            JD
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-green-700">Ajeet</span>
        </h1>
        <p className="text-xl sm:text-2xl text-[var(--muted-dark)] mb-8 max-w-2xl mx-auto">
          Full Stack Developer & Tech Enthusiast
        </p>
        <p className="text-lg text-[var(--muted-dark)] mb-10 max-w-xl mx-auto">
          I build beautiful, functional web applications and love sharing my knowledge through writing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-black font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-[var(--border)] hover:border-[var(--primary)] text-[var(--muted-dark)] font-semibold rounded-lg transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
