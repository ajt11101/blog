"use client";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: "about", label: "About Me" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {/* <button
              onClick={() => setActiveSection("blog")}
              className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors cursor-pointer"
            >
              Ajeet
            </button> */}
          </div>
          <div className="hidden sm:flex sms:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-[var(--primary)] bg-[var(--secondary)]/20"
                    : "text-[var(--muted-dark)] hover:text-[var(--foreground)] hover:underline"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="sm:hidden">
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="block w-full px-3 py-2 text-sm border border-[var(--border)] rounded-md bg-[var(--card)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] cursor-pointer"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
