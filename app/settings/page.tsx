"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  Bell,
  Shield,
  Globe,
  Moon,
  Smartphone,
  Lock,
  Eye,
  Fingerprint,
  Languages,
  Volume2,
  Vibrate,
} from "lucide-react"
import { motion } from "framer-motion"

export default function SettingsScreen() {
  const [settings, setSettings] = useState({
    notifications: {
      push: true,
      email: false,
      sms: true,
      transactions: true,
      promotions: false,
      security: true,
    },
    security: {
      biometric: true,
      twoFactor: false,
      autoLock: true,
      loginAlerts: true,
    },
    preferences: {
      darkMode: false,
      language: "english",
      currency: "SLL",
      sound: true,
      vibration: true,
      largeText: false,
    },
  })
  const router = useRouter()

  const handleToggle = (category: string, setting: string) => {
    setSettings((prev) => {
      const newSettings = { ...prev }

      if (category === "notifications") {
        newSettings.notifications = {
          ...newSettings.notifications,
          [setting]: !newSettings.notifications[setting as keyof typeof newSettings.notifications],
        }
      } else if (category === "security") {
        newSettings.security = {
          ...newSettings.security,
          [setting]: !newSettings.security[setting as keyof typeof newSettings.security],
        }
      } else if (category === "preferences") {
        newSettings.preferences = {
          ...newSettings.preferences,
          [setting]: !newSettings.preferences[setting as keyof typeof newSettings.preferences],
        }
      }

      return newSettings
    })
  }

  const settingSections = [
    {
      title: "Notifications",
      icon: Bell,
      items: [
        {
          key: "push",
          label: "Push Notifications",
          description: "Receive notifications on your device",
          icon: Smartphone,
        },
        { key: "email", label: "Email Notifications", description: "Get updates via email", icon: Bell },
        { key: "sms", label: "SMS Alerts", description: "Receive SMS for important updates", icon: Smartphone },
        { key: "transactions", label: "Transaction Alerts", description: "Notify me of all transactions", icon: Bell },
        { key: "promotions", label: "Promotional Offers", description: "Receive offers and promotions", icon: Bell },
        { key: "security", label: "Security Alerts", description: "Important security notifications", icon: Shield },
      ],
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      items: [
        { key: "biometric", label: "Biometric Login", description: "Use fingerprint or face ID", icon: Fingerprint },
        {
          key: "twoFactor",
          label: "Two-Factor Authentication",
          description: "Extra security for your account",
          icon: Lock,
        },
        { key: "autoLock", label: "Auto-Lock", description: "Lock app when inactive", icon: Lock },
        { key: "loginAlerts", label: "Login Alerts", description: "Notify me of new logins", icon: Eye },
      ],
    },
    {
      title: "Preferences",
      icon: Globe,
      items: [
        { key: "darkMode", label: "Dark Mode", description: "Use dark theme", icon: Moon },
        { key: "sound", label: "Sound Effects", description: "Play sounds for actions", icon: Volume2 },
        { key: "vibration", label: "Vibration", description: "Vibrate for notifications", icon: Vibrate },
        { key: "largeText", label: "Large Text", description: "Increase text size for accessibility", icon: Eye },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Settings</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">Customize your FinTech experience</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {settingSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
          >
            <Card className="p-6 border-0 bg-white dark:bg-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h3>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                      </div>
                      <div>
                        <Label htmlFor={item.key} className="font-medium text-slate-900 dark:text-white cursor-pointer">
                          {item.label}
                        </Label>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                      </div>
                    </div>
                    <Switch
                      id={item.key}
                      checked={(() => {
                        const categoryKey = section.title.toLowerCase().replace(" & privacy", "").replace(" ", "")
                        if (categoryKey === "notifications") {
                          return settings.notifications[item.key as keyof typeof settings.notifications]
                        } else if (categoryKey === "security") {
                          return settings.security[item.key as keyof typeof settings.security]
                        } else if (categoryKey === "preferences") {
                          return settings.preferences[item.key as keyof typeof settings.preferences]
                        }
                        return false
                      })()}
                      onCheckedChange={() => {
                        const categoryKey = section.title.toLowerCase().replace(" & privacy", "").replace(" ", "")
                        handleToggle(categoryKey, item.key)
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Language Selection */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="p-6 border-0 bg-white dark:bg-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Languages className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Language & Region</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div>
                  <Label className="font-medium text-slate-900 dark:text-white">Language</Label>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Choose your preferred language</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={settings.preferences.language === "english" ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      setSettings((prev) => ({
                        ...prev,
                        preferences: { ...prev.preferences, language: "english" },
                      }))
                    }
                  >
                    English
                  </Button>
                  <Button
                    variant={settings.preferences.language === "krio" ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      setSettings((prev) => ({
                        ...prev,
                        preferences: { ...prev.preferences, language: "krio" },
                      }))
                    }
                  >
                    Krio
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div>
                  <Label className="font-medium text-slate-900 dark:text-white">Currency</Label>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Display currency preference</p>
                </div>
                <Button variant="outline" size="sm">
                  SLL (Leone)
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Account Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card className="p-6 border-0 bg-white dark:bg-slate-800">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Account Actions</h3>

            <div className="space-y-3">
              <Button variant="outline" className="w-full h-12 justify-start">
                <Lock className="w-4 h-4 mr-3" />
                Change PIN
              </Button>
              <Button variant="outline" className="w-full h-12 justify-start">
                <Shield className="w-4 h-4 mr-3" />
                Security Settings
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <Lock className="w-4 h-4 mr-3" />
                Deactivate Account
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* App Information */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Card className="p-6 border-0 bg-slate-100 dark:bg-slate-700">
            <div className="text-center space-y-2">
              <h4 className="font-semibold text-slate-900 dark:text-white">FinTech v1.0.0</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Created by Eager Beaver — Limkokwing University, FICT
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">© 2024 FinTech. All rights reserved.</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
