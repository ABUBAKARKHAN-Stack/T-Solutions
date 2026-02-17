import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const Logo = ({
    className = ""
}) => {
    return (
        <Image
            src={'/assets/ts-logo-2.svg'}
            height={50}
            className={cn(
                className,
                "w-auto "
            )}
            width={50}
            alt='T-l'
        />
    )
}

export default Logo