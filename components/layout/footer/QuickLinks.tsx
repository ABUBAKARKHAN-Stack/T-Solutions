import { navLinks } from '@/constants/navigation.constants'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const QuickLinks = () => {
  return (
    <div className="lg:col-span-2">
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default QuickLinks