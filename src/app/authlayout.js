'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import { useAuth } from '@/context/AuthContext'

export default function AuthLayout({ children }) {
  const { userData, loading } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  const isAuthPage = pathname === '/login' || pathname === '/register'

  useEffect(() => {
    if (!loading && userData && isAuthPage) {
      if (userData.role === 'admin') {
        router.push('/admin/dashboard')
      } else {
        router.push('/')
      }
    }
  }, [userData, loading, pathname, isAuthPage, router])

  if (loading) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>
  }

  return (
    <>
      {!isAuthPage && <Header />}
      <main className={`bg-white ${!isAuthPage ? 'mt-24' : ''}`}>
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </>
  )
}
