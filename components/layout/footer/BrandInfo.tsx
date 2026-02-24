import { Logo, MagneticButton } from '@/components/shared'
import { socials } from '@/constants/navigation.constants'
import { cn } from '@/lib/utils'
import React from 'react'

const BrandInfo = () => {
    return (
        <div className="lg:col-span-4">
            <Logo className="lg:h-15 xsm:h-13 h-11" />
            <p className="text-foreground/50 mt-4 leading-relaxed max-w-sm text-sm">
                Building high-performance digital products with full stack development, cloud solutions, DevOps, and AI. We turn your ideas into scalable reality.
            </p>

            <div className="mt-6 flex gap-2.5">
                {socials?.map((platform) => (
                    <MagneticButton key={platform.url} strength={0.2}>
                        <a
                            href={platform.url}
                            aria-label={platform.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "group relative rounded-full size-9 flex items-center justify-center overflow-hidden",
                                "border border-border text-xs font-medium transition-colors",
                                "hover:text-accent-foreground"
                            )}
                        >
                            <platform.icon className="size-4 z-10" />

                            <span
                                className={cn(
                                    "absolute inset-0 z-0 bg-accent",
                                    "translate-y-full group-hover:translate-y-0",
                                    "transition-transform duration-300 ease-out"
                                )}
                            />
                        </a>
                    </MagneticButton>
                )
                )}
            </div>
        </div>
    )
}

export default BrandInfo