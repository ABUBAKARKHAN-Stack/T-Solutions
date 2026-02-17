import { cn } from '@/lib/utils'

const CardsTopBadge = ({ label, className }: { label: string, className?: string }) => {
    return (
        <span className={cn(
            " w-fit  text-[10px] font-semibold text-accent uppercase tracking-[0.25em] px-2.5 py-1 rounded-full border border-accent/20 bg-accent-foreground/70 backdrop-blur-md",
            className
        )}>
            {label}
        </span>
    )
}

export default CardsTopBadge