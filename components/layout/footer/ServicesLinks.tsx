"use client"
import { useServices } from '@/context/ServiceContext'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const ServicesLinks = () => {
    const { servicesOverview } = useServices()
    return (
        <div className="lg:col-span-3">
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Services</h4>
            <ul className="space-y-3">
                {servicesOverview.map((link) => (
                    <li key={link.slug}>
                        <Link
                            href={`/services${link.slug}`}
                            className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-1 group"
                        >
                            {link.title}
                            <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServicesLinks