"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { skills, skillCategories } from "@/data/skills"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 relative">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-linear-to-r from-primary to-accent rounded-full" />
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across frontend, backend, databases, DevOps, and modern
            development tools.
          </p>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-4xl">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 gap-2 h-auto p-2 bg-card">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Skills Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.02 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card hover:shadow-xl hover:shadow-primary/10 transition-all border border-border/50"
                  >
                    <Icon className="w-12 h-12 text-primary" />
                    <p className="text-sm font-semibold text-center">{skill.name}</p>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {/* Skills Count */}
          <motion.p
            key={filteredSkills.length}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mt-8"
          >
            Showing {filteredSkills.length} {filteredSkills.length === 1 ? "skill" : "skills"}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
