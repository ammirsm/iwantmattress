import React from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from '@/components/ui/button';
import { Bed, Menu, X, Github } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <Link href="/" className="flex items-center gap-2 min-w-0">
              <Bed className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="font-bold text-xl truncate">iwantmattress.ca</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/questionnaire" className="text-sm font-medium hover:text-primary transition-colors">
              Questionnaire
            </Link>
            <Link 
              href="https://github.com/ammirsm/iwantmattress" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Github className="h-4 w-4" />
              <span>Open Source</span>
            </Link>
            <ModeToggle />
          </nav>
          
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link 
                href="/" 
                className="flex w-full justify-center rounded-md py-2 text-sm font-medium hover:bg-primary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/questionnaire" 
                className="flex w-full justify-center rounded-md py-2 text-sm font-medium hover:bg-primary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Questionnaire
              </Link>
              <Link 
                href="https://github.com/ammirsm/iwantmattress"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex w-full justify-center items-center gap-1.5 rounded-md py-2 text-sm font-medium hover:bg-primary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="h-4 w-4" />
                Open Source
              </Link>
              <div className="flex justify-center pt-2">
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:h-16">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} iwantmattress.ca. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="https://github.com/ammirsm/iwantmattress" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3.5 w-3.5" />
                <span>Open Source on GitHub</span>
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 