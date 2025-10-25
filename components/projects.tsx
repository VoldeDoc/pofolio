"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Eye } from "lucide-react"
import { projects, projectCategories } from "@/data/projects"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { ProjectModal } from "./project-modal"
import type { Project } from "@/data/projects"
import Link from "next/link"

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.type === activeCategory)

  return (
    <>
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
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
                My Work
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                A showcase of innovative projects I've passionately crafted, utilising cutting-edge technologies and
                best practices.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center mb-16">
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-3xl">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 gap-2 h-auto p-2 bg-card/50 backdrop-blur-sm border border-border">
                  {projectCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all rounded-lg"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group border border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                      <div className="relative h-56 overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-full h-full"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="group-hover:blur-none blur-[2px] transition-all duration-500"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-60" />
                        <div className="absolute top-4 right-4">
                          <Badge
                            variant="secondary"
                            className="capitalize bg-background/90 backdrop-blur-sm border border-border"
                          >
                            {project.type}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs font-medium">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge variant="outline" className="text-xs font-medium">
                              +{project.tech.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button
                            onClick={() => setSelectedProject(project)}
                            size="sm"
                            variant="outline"
                            className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                          >
                            <Eye className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                            Details
                          </Button>
                          <Button asChild size="sm" className="flex-1 group/btn">
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                              Visit
                              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Projects Count */}
            <motion.p
              key={filteredProjects.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground mt-12 text-sm"
            >
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
