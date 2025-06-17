'use client'

import { usePathname } from 'next/navigation'
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

export default function AuthLayout({ children }) {
    const pathname = usePathname()
    const hideLayout = pathname === '/login' || pathname === '/register'

    return (
        <>
            {!hideLayout && <Header />}
            <main className="bg-white pt-[calc(100px+1rem)]">
                {children}
            </main>

            {!hideLayout && <Footer />}
        </>
    )
}
