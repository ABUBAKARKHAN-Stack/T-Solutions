import { APP_NAME } from '@/constants/app.constants'
import Link from 'next/link'
import React from 'react'

const CopyRight = () => {
  return (
      <div className="border-t border-foreground/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/30">© {new Date().getFullYear()} {" "}
            <span className="font-bold font-playfair text-accent">
              {APP_NAME}
            </span>. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
  )
}

export default CopyRight