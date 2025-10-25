"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Facebook, MessageCircle, Heart, ArrowUp } from "lucide-react"
import { personalInfo, socialLinks } from "@/data/personal"
import { Button } from "./ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Connect With Me</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-4 rounded-xl bg-card border border-border hover:border-primary transition-all shadow-lg hover:shadow-primary/30"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> by{" "}
              <strong className="text-foreground">{personalInfo.name}</strong>
            </p>
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          <Button
            onClick={scrollToTop}
            size="icon"
            variant="outline"
            className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group bg-transparent"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
