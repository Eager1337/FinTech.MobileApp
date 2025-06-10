"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Smartphone, Shield, TrendingUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const onboardingData = [
  {
    icon: Smartphone,
    title: "Welcome to FinTech",
    description: "Your digital wallet for Sierra Leone. Send money, pay bills, and manage your finances with ease.",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Bank-level security with PIN protection and biometric authentication to keep your money safe.",
    color: "from-green-500 to-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Money",
    description: "Invest in micro-investments and track your returns in real-time. Build wealth for your future.",
    color: "from-purple-500 to-pink-500",
  },
]

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const nextStep = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push("/auth/login")
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const skipToLogin = () => {
    router.push("/auth/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="text-slate-600 dark:text-slate-400"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>

        <Button variant="ghost" size="sm" onClick={skipToLogin} className="text-slate-600 dark:text-slate-400">
          Skip
        </Button>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center space-x-2 mb-8">
        {onboardingData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentStep ? "bg-blue-600 w-8" : "bg-slate-300 dark:bg-slate-600"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="text-center max-w-sm"
          >
            <Card className="p-8 border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${onboardingData[currentStep].color} flex items-center justify-center`}
              >
                {React.createElement(onboardingData[currentStep].icon, { className: "w-10 h-10 text-white" })}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {onboardingData[currentStep].title}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {onboardingData[currentStep].description}
              </p>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="p-6">
        <Button
          onClick={nextStep}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold"
        >
          {currentStep === onboardingData.length - 1 ? "Get Started" : "Continue"}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
