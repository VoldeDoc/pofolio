"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { personalInfo } from "@/data/personal"
import { Badge } from "./ui/badge"
import Link from "next/link"

const techHighlights = ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "Docker", "AWS", "MySQL", "PostgreSQL"]

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-primary uppercase tracking-wider"
            >
              Get to know me
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-linear-to-br from-primary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                </h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    A results-driven <strong className="text-foreground">full-stack developer</strong> with over 3 years
                    of experience building user-friendly and interactive web applications.
                  </p>
                  <p>
                    I thrive in collaborative environments and enjoy solving complex problems with efficient, innovative
                    solutions. Always eager to learn and adapt to new technologies.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  Core Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {techHighlights.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <Link
                    href={`mailto:${personalInfo.email}`}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {personalInfo.email}
                  </Link>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{personalInfo.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
