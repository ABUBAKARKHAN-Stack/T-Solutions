import { contactInfo } from '@/constants/navigation.constants'
import { ArrowUpRight } from 'lucide-react'

const ContactLinks = () => {
    return (
        <div className="lg:col-span-3 space-y-6">
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Contact</h4>
            <ul className="space-y-4">
                {contactInfo.map((item) => (
                    <li key={item.link} >
                        <a
                            href={item.link}
                            className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-3 group"
                        > <div className="w-8 h-8 rounded-full bg-foreground/10 group-hover:bg-accent/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                                <item.icon className="h-3.5 w-3.5" />
                            </div>
                            {item.value}
                            <ArrowUpRight className="h-3 w-3 -translate-x-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactLinks