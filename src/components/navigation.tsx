import { Search } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8">
      <Link href="/" className="text-white">
        <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <span className="font-medium">m</span>
        </div>
      </Link>

      <div className="flex items-center gap-12 text-white/90">
        <Link href="/">Home</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/works">Works</Link>
        <Link href="/pages">Pages</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/shop">Shop</Link>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="text-white/90 hover:text-white">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </nav>
  )
}

