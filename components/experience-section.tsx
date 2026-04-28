export function ExperienceSection() {
  const experiences = [
    {
      role: 'Web Developer & Chatbot Integrator',
      company: 'CoverFirst.in',
      year: '2025',
      description: 'Designed and developed the full website for an insurance services platform. Integrated an AI-powered chatbot to assist users with queries and site navigation. Focused on user-friendly UI/UX and seamless chatbot-to-website communication.',
      highlights: ['Full Website Design', 'AI Chatbot Integration', 'UI/UX Development'],
    },
    {
      role: 'Intern – Arduino & Sensor Systems',
      company: 'IFIHomes',
      year: '2024',
      description: 'Worked with Arduino microcontrollers and sensor-based systems in a professional setting. Gained hands-on experience integrating sensors for real-time data acquisition and automation. Collaborated on embedded systems projects relevant to smart home technology.',
      highlights: ['Arduino Development', 'Sensor Integration', 'Smart Home Tech'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Work Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {exp.year}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {item}
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
