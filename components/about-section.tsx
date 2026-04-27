export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Aspiring Developer & Tech Enthusiast
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Education</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg border border-border bg-card/50">
                <p className="font-medium text-foreground">B.Tech in Computer Science & Engineering</p>
                <p className="text-sm text-muted-foreground">Cochin University of Science and Technology</p>
                <p className="text-sm text-muted-foreground pt-1">CGPA: 8.02 | Expected Graduation: 2028</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card/50">
                <p className="font-medium text-foreground">Class XII - 94%</p>
                <p className="text-sm text-muted-foreground">CBSE | Distinction in all subjects</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">About Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a Computer Science student passionate about exploring cutting-edge technologies. My journey spans from embedded systems and IoT to artificial intelligence and web development. I thrive in collaborative environments and am always eager to tackle challenging problems with creative solutions.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Languages</p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Malayalam', 'French'].map((lang) => (
                  <span key={lang} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
