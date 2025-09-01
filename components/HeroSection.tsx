import { Button } from "./ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-red-950/20 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm border border-red-500/20">
                Featured Article
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Advanced Cybersecurity Tools & Scripts
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore cutting-edge cybersecurity tools, penetration testing scripts, and security analysis utilities. 
              Learn about the latest techniques for network reconnaissance, vulnerability assessment, and threat hunting.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>MITM Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Aug 27, 2025</span>
              </div>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Explore Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border/50 bg-gradient-to-br from-red-950/40 to-background">
              <div className="w-full h-full bg-gradient-to-br from-red-500/20 via-transparent to-background flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="text-red-400 font-mono text-sm">
                    ./cybersec-tools
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}