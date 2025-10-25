"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, ExternalLink, Eye, Calendar } from "lucide-react"
import { experiences } from "@/data/experience"
import { education } from "@/data/education"
import { personalInfo } from "@/data/personal"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"

export function Resume() {
  const timeline = [
    ...experiences.map((exp) => ({ ...exp, type: "experience" as const })),
    ...education.map((edu) => ({ ...edu, type: "education" as const })),
  ].sort((a, b) => {
    // Sort by start year (extract from period string)
    const getYear = (period: string) => Number.parseInt(period.split(" - ")[0].split(" ")[1])
    return getYear(b.period) - getYear(a.period)
  })

  return (
    <section id="resume" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
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
              My Journey
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience & Education
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 relative before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-linear-to-b before:from-primary before:via-accent before:to-primary">
              {timeline.map((item, index) => {
                const isExperience = item.type === "experience"
                const Icon = isExperience ? Briefcase : GraduationCap

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
                  >
                    <div className={`absolute left-3 ${index % 2 === 0 ? "md:left-auto md:-right-5" : "md:-left-5"} top-6 w-10 h-10 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/50 z-10`}>
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>

                    <Card className="ml-20 md:ml-0 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>

                        {isExperience ? (
                          <>
                            <h4 className="text-xl font-bold">{(item as (typeof experiences)[0]).title}</h4>
                            <h5 className="text-lg font-semibold text-primary flex items-center gap-2">
                              {(item as (typeof experiences)[0]).companyUrl ? (
                                <Link
                                  href={(item as (typeof experiences)[0]).companyUrl || ""}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline flex items-center gap-1 group"
                                >
                                  {(item as (typeof experiences)[0]).company}
                                  <ExternalLink className="h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                              ) : (
                                (item as (typeof experiences)[0]).company
                              )}
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              {(item as (typeof experiences)[0]).location}
                            </p>
                            <ul className="space-y-2 pt-2">
                              {(item as (typeof experiences)[0]).description.map((desc, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                  <span className="text-primary mt-1 font-bold">•</span>
                                  <span>{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <>
                            <h4 className="text-xl font-bold">{(item as (typeof education)[0]).degree}</h4>
                            <h5 className="text-lg font-semibold text-primary">
                              {(item as (typeof education)[0]).institution}
                            </h5>
                            <p className="text-sm text-muted-foreground">{(item as (typeof education)[0]).location}</p>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <Button
              asChild
              size="lg"
              className="group rounded-full px-8 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <Link href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Full CV
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
