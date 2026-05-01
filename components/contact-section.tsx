'use client'

import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'johaanliju@gmail.com',
      href: 'mailto:johaanliju@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9611709663',
      href: 'tel:+919611709663',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'johaan-liju',
      href: 'https://www.linkedin.com/in/johaan-liju/',
    },
    {
      icon: Github,
      label: 'Github',
      value: 'johaan-liju',
      href: 'https://github.com/johaan-liju',
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground pt-4">
            Feel free to reach out for collaborations or just a friendly hello. I&apos;m always interested in interesting projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon
            return (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors group"
              >
                <Icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-foreground font-medium break-all">{item.value}</p>
              </a>
            )
          })}
        </div>

        <div className="p-8 rounded-lg border border-border bg-card/50 text-center space-y-4">
          <p className="text-foreground font-medium">
            Open to internships and freelance opportunities
          </p>
          <p className="text-muted-foreground">
            Especially interested in AI, web development, and innovative tech projects.
          </p>
          <a
            href="mailto:johaanliju@gmail.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  )
}
