import { useState } from "react"
import { Button } from "./ui/button"
import { Shield, Menu, Search } from "lucide-react"

export function HeaderReact() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Tools & Scripts", href: "/tools" },
    { label: "Guides & How-Tos", href: "/guides" },
    { label: "Research & Analysis", href: "/research" },
    { label: "Resources", href: "/resources" },
    { label: "About/Newsletter", href: "/about" }
  ]

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 -ml-2">
              <Shield className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl text-foreground">mitm.life</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-foreground hover:text-red-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              className="md:hidden" 
              variant="ghost" 
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 px-4 text-foreground hover:text-red-500 hover:bg-muted/50 transition-colors rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="ghost" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}