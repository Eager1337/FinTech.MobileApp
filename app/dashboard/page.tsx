"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Send,
  Download,
  Smartphone,
  CreditCard,
  TrendingUp,
  Eye,
  EyeOff,
  Bell,
  User,
  Settings,
  ArrowUpRight,
  ArrowDownLeft,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true)
  const [balance, setBalance] = useState(125750.5)
  const [userName] = useState("John Doe")

  const quickActions = [
    { icon: Send, label: "Send Money", href: "/send-money", color: "from-blue-500 to-blue-600" },
    { icon: Download, label: "Receive", href: "/receive-money", color: "from-green-500 to-green-600" },
    { icon: Smartphone, label: "Top-Up", href: "/top-up", color: "from-orange-500 to-orange-600" },
    { icon: CreditCard, label: "Pay Bills", href: "/top-up", color: "from-purple-500 to-purple-600" },
  ]

  const recentTransactions = [
    { id: 1, type: "received", amount: 50000, from: "Mohamed Kamara", time: "2 hours ago", status: "completed" },
    { id: 2, type: "sent", amount: 25000, to: "Fatima Sesay", time: "1 day ago", status: "completed" },
    { id: 3, type: "topup", amount: 10000, provider: "Africell", time: "2 days ago", status: "completed" },
    { id: 4, type: "bill", amount: 75000, service: "EDSA Electricity", time: "3 days ago", status: "completed" },
  ]

  const featureCards = [
    {
      title: "Investment Portfolio",
      description: "Grow your money with micro-investments",
      value: "+12.5%",
      trend: "up",
      color: "from-emerald-500 to-teal-600",
      href: "/investments",
    },
    {
      title: "Monthly Spending",
      description: "Track your expenses this month",
      value: "Le 450,000",
      trend: "neutral",
      color: "from-violet-500 to-purple-600",
      href: "/transactions",
    },
    {
      title: "Savings Goal",
      description: "Emergency fund progress",
      value: "68%",
      trend: "up",
      color: "from-amber-500 to-orange-600",
      href: "/investments",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-lg font-medium opacity-90">Good morning,</h1>
            <h2 className="text-2xl font-bold">{userName}</h2>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
              <Bell className="w-5 h-5" />
            </Button>
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Settings className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Balance Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/80">Total Balance</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBalance(!showBalance)}
              className="text-white hover:bg-white/20 p-1"
            >
              {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
          <div className="text-3xl font-bold mb-1">{showBalance ? `Le ${balance.toLocaleString()}` : "••••••••"}</div>
          <div className="text-white/80 text-sm">Available balance</div>
        </Card>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={action.href}>
                  <Card className="p-4 hover:shadow-lg transition-all duration-200 cursor-pointer border-0 bg-white dark:bg-slate-800">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-3`}
                    >
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{action.label}</h4>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Financial Overview</h3>
          <div className="space-y-4">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={card.href}>
                  <Card className="p-4 hover:shadow-lg transition-all duration-200 cursor-pointer border-0 bg-white dark:bg-slate-800">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{card.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{card.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-slate-900 dark:text-white">{card.value}</span>
                          {card.trend === "up" && <TrendingUp className="w-4 h-4 text-green-500" />}
                        </div>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center`}
                      >
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Transactions</h3>
            <Link href="/transactions">
              <Button variant="ghost" size="sm" className="text-blue-600">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {recentTransactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 border-0 bg-white dark:bg-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === "received"
                            ? "bg-green-100 dark:bg-green-900"
                            : transaction.type === "sent"
                              ? "bg-red-100 dark:bg-red-900"
                              : "bg-blue-100 dark:bg-blue-900"
                        }`}
                      >
                        {transaction.type === "received" ? (
                          <ArrowDownLeft className="w-5 h-5 text-green-600 dark:text-green-400" />
                        ) : transaction.type === "sent" ? (
                          <ArrowUpRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                        ) : (
                          <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          {transaction.type === "received"
                            ? `From ${transaction.from}`
                            : transaction.type === "sent"
                              ? `To ${transaction.to}`
                              : transaction.type === "topup"
                                ? `${transaction.provider} Top-up`
                                : transaction.service}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{transaction.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-semibold ${
                          transaction.type === "received"
                            ? "text-green-600 dark:text-green-400"
                            : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {transaction.type === "received" ? "+" : "-"}Le {transaction.amount.toLocaleString()}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
