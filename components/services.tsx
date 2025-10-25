"use client";

import { motion } from "framer-motion";
import {
  LaptopMinimal,
  Code,
  Terminal,
  Database,
  Search,
  Paintbrush,
} from "lucide-react";
import { services } from "@/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BiCheck } from "react-icons/bi";

const iconMap = {
  "laptop-code": LaptopMinimal,
  code: Code,
  terminal: Terminal,
  database: Database,
  search: Search,
  "paint-brush": Paintbrush,
};

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
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
              What I Offer
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive web development solutions tailored to bring your
              vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm group">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-6">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="p-5 rounded-2xl bg-linear-to-br from-primary to-accent shadow-lg group-hover:shadow-primary/50"
                        >
                          <service.icon className="h-8 w-8 text-primary-foreground" />
                        </motion.div>
                      </div>
                      <CardTitle className="text-2xl bg-linear-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center shrink-0 mt-0.5">
                              <BiCheck className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
