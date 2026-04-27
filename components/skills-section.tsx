export function SkillsSection() {
  const skillGroups = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C/C++', 'JavaScript', 'HTML/CSS'],
    },
    {
      category: 'Web Development',
      skills: ['React', 'Next.js', 'UI/UX Design', 'Responsive Design'],
    },
    {
      category: 'AI & Automation',
      skills: ['Agentic AI', 'Chatbot Integration', 'Machine Learning'],
    },
    {
      category: 'Hardware & Embedded',
      skills: ['Arduino', 'Sensor Integration', 'Electronics', 'IoT'],
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Technical Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
