import React from "react";
import { Button } from "../components/ui/button.jsx";
import HeroSection from "@/components/hero.jsx";
import { features } from "@/data/features.js";
import { howItWorks } from "@/data/howItWorks.js";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { testimonial } from "@/data/testimonial.js";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StarIcon } from "lucide-react";
import { faqs } from "@/data/faqs.js";
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion.jsx";
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-background opacity-10"></div>

      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-16 md:py-28 lg:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
              Supercharge Your Career Growth
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to ace your next career move
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="pt-8 pb-6 px-6 text-center flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
                    {React.cloneElement(feature.icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { value: "50+", label: "Industries Covered" },
              { value: "1000+", label: "Interview Questions" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl shadow-sm border border-muted/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-28 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
              Your Path to Success
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to achieve your career goals
            </p>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 to-primary/20 via-primary/0" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 relative group"
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                    {React.cloneElement(item.icon, {
                      className: "w-10 h-10 text-primary",
                    })}
                  </div>
                  <div className="absolute top-28 hidden lg:block w-full h-1 bg-gradient-to-r from-primary/20 to-transparent group-even:from-transparent group-even:to-primary/20" />
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-2xl">{item.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden">
  <div className="absolute w-full h-full top-0 left-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')]"></div>
  <div className="container mx-auto px-4 md:px-6 relative">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Voices of Satisfaction
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonial.map((testimonial, index) => (
        <Card 
          key={index} 
          className="bg-white backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
        >
          <CardContent className="pt-8 pb-6">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col items-center mb-6">
                <div className="relative h-20 w-20 mb-4">
                  <Image
                    width={80}
                    height={80}
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    ⭐ 5.0
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="relative">
                <div className="absolute -top-4 left-0 text-6xl text-blue-100/80 font-serif">“</div>
                <p className="text-gray-600 text-lg leading-relaxed pl-6 pr-4">
                  {testimonial.quote}
                </p>
                <div className="absolute -bottom-4 right-4 text-6xl text-blue-100/80 font-serif">”</div>
              </blockquote>
              <div className="flex justify-center space-x-1 text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
    
    {/* Decorative elements */}
    <div className="absolute -top-20 -left-20 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl"></div>
  </div>
</section>

      {/* FAQ Section */}
<section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f9f9ff] to-white dark:from-[#0f0f1f] dark:to-[#000000]">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-muted-foreground dark:text-gray-300">
        Find answers to common questions about our platform
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="rounded-lg border border-gray-200 dark:border-gray-800 px-6 transition-all hover:border-blue-400 dark:hover:border-purple-400"
          >
            <AccordionTrigger className="text-left py-4 font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400">
              <span className="mr-4 text-blue-600 dark:text-purple-400">▸</span>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-gray-600 dark:text-gray-300 pl-10">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}