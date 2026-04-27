export function ProjectsSection() {
  const projects = [
    {
      title: 'AI Study Planner',
      year: '2026',
      description: 'An agentic AI-powered study scheduler that creates personalized, efficient study plans.',
      details:
        'The system autonomously adapts schedules based on user progress, deadlines, and learning patterns. Demonstrates practical use of AI agents for productivity and academic support.',
      tags: ['Agentic AI', 'Python', 'Education Tech', 'Automation'],
    },
    {
      title: 'ClipCraft',
      year: '2026',
      description: 'A video and content creation tool designed to streamline workflows for creators.',
      details: 'Built with a focus on automation and efficiency for content creators, enabling faster content production and distribution.',
      tags: ['Video Editing', 'Automation', 'Content Creation', 'Web App'],
    },
    {
      title: 'Temperature & Humidity Monitoring System',
      year: '2025',
      description: 'An Arduino-based system using LM35 sensors for real-time environmental monitoring.',
      details: 'Built a complete solution for measuring and displaying ambient temperature with analog-to-digital conversion, designed circuit and firmware code for real-time monitoring.',
      tags: ['Arduino', 'Sensors', 'IoT', 'Electronics', 'C++'],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.year}</p>
                </div>
              </div>

              <p className="text-lg text-foreground font-medium mb-3">{project.description}</p>
              <p className="text-muted-foreground leading-relaxed mb-5">{project.details}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                    {tag}
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
