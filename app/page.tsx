"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SplashScreen() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center animate-in fade-in duration-1000">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-6 shadow-2xl animate-in zoom-in duration-500">
            <Zap className="w-16 h-16 text-green-600" />
          </div>
        </div>

        {/* App Name */}
        <div className="space-y-2 animate-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl font-bold text-white tracking-tight">FinTech</h1>
          <p className="text-xl text-green-50">Banking Made Simple</p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 py-8 animate-in slide-in-from-bottom-5 duration-1000">
          <div className="flex flex-col items-center space-y-2">
            <Shield className="w-8 h-8 text-white" />
            <span className="text-sm text-green-50">Secure</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Zap className="w-8 h-8 text-white" />
            <span className="text-sm text-green-50">Fast</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <TrendingUp className="w-8 h-8 text-white" />
            <span className="text-sm text-green-50">Grow</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-in slide-in-from-bottom-6 duration-1200">
          <Button
            onClick={() => router.push("/onboarding")}
            className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold py-6 text-lg shadow-xl"
            size="lg"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Footer */}
        <p className="text-sm text-green-100 animate-in fade-in duration-1500">
          Designed for Sierra Leone 🇸🇱
          <br />
          <span className="text-xs">By Eager Beaver</span>
        </p>
      </div>
    </div>
  )
}
