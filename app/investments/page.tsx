"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, TrendingUp, PieChart, BookOpen, Calendar, Info } from "lucide-react"
import { motion } from "framer-motion"

const investmentOptions = [
  {
    id: "savings",
    name: "High-Yield Savings",
    description: "Safe and secure savings with guaranteed returns",
    minAmount: 10000,
    expectedReturn: "8-12%",
    risk: "Low",
    duration: "Flexible",
    color: "from-green-500 to-emerald-600",
    icon: "🏦",
  },
  {
    id: "bonds",
    name: "Government Bonds",
    description: "Invest in Sierra Leone government securities",
    minAmount: 50000,
    expectedReturn: "12-15%",
    risk: "Low",
    duration: "6-12 months",
    color: "from-blue-500 to-cyan-600",
    icon: "🏛️",
  },
  {
    id: "agriculture",
    name: "Agriculture Fund",
    description: "Support local farmers and earn returns",
    minAmount: 25000,
    expectedReturn: "15-20%",
    risk: "Medium",
    duration: "3-6 months",
    color: "from-amber-500 to-orange-600",
    icon: "🌾",
  },
  {
    id: "tech",
    name: "Tech Startups",
    description: "Invest in emerging Sierra Leone tech companies",
    minAmount: 100000,
    expectedReturn: "20-35%",
    risk: "High",
    duration: "12-24 months",
    color: "from-purple-500 to-pink-600",
    icon: "💻",
  },
]

const myInvestments = [
  {
    id: 1,
    name: "High-Yield Savings",
    amount: 150000,
    currentValue: 165000,
    return: 10,
    status: "active",
    startDate: "2024-01-01",
    maturityDate: "Flexible",
  },
  {
    id: 2,
    name: "Agriculture Fund",
    amount: 75000,
    currentValue: 82500,
    return: 10,
    status: "active",
    startDate: "2023-12-15",
    maturityDate: "2024-06-15",
  },
  {
    id: 3,
    name: "Government Bonds",
    amount: 200000,
    currentValue: 220000,
    return: 10,
    status: "matured",
    startDate: "2023-07-01",
    maturityDate: "2024-01-01",
  },
]

const educationalContent = [
  {
    title: "Investment Basics for Beginners",
    description: "Learn the fundamentals of investing and building wealth",
    duration: "5 min read",
    category: "Basics",
  },
  {
    title: "Understanding Risk and Return",
    description: "How to balance risk and potential returns in your portfolio",
    duration: "7 min read",
    category: "Strategy",
  },
  {
    title: "Sierra Leone Economic Outlook",
    description: "Current economic trends and investment opportunities",
    duration: "10 min read",
    category: "Market",
  },
  {
    title: "Diversification Strategies",
    description: "How to spread your investments to minimize risk",
    duration: "6 min read",
    category: "Strategy",
  },
]

export default function InvestmentsScreen() {
  const [selectedInvestment, setSelectedInvestment] = useState<any>(null)
  const [investmentAmount, setInvestmentAmount] = useState("")
  const [showInvestForm, setShowInvestForm] = useState(false)
  const router = useRouter()

  const totalInvested = myInvestments.reduce((sum, inv) => sum + inv.amount, 0)
  const totalCurrentValue = myInvestments.reduce((sum, inv) => sum + inv.currentValue, 0)
  const totalReturns = totalCurrentValue - totalInvested

  const handleInvest = () => {
    if (selectedInvestment && investmentAmount) {
      // Simulate investment process
      alert(
        `Investment of Le ${Number.parseFloat(investmentAmount).toLocaleString()} in ${selectedInvestment.name} initiated!`,
      )
      setShowInvestForm(false)
      setSelectedInvestment(null)
      setInvestmentAmount("")
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300"
      case "medium":
        return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300"
      case "high":
        return "text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300"
      default:
        return "text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Investment Portal</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">Grow your wealth with smart investments</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="invest">Invest</TabsTrigger>
            <TabsTrigger value="learn">Learn</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Portfolio Summary */}
            <Card className="p-6 border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="text-lg font-semibold mb-4">Portfolio Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-blue-100 text-sm">Total Invested</p>
                  <p className="text-2xl font-bold">Le {totalInvested.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Current Value</p>
                  <p className="text-2xl font-bold">Le {totalCurrentValue.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Total Returns</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold">Le {totalReturns.toLocaleString()}</p>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Return Rate</p>
                  <p className="text-xl font-bold">+{((totalReturns / totalInvested) * 100).toFixed(1)}%</p>
                </div>
              </div>
            </Card>

            {/* My Investments */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">My Investments</h3>
              <div className="space-y-3">
                {myInvestments.map((investment, index) => (
                  <motion.div
                    key={investment.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-4 border-0 bg-white dark:bg-slate-800">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white">{investment.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">Started: {investment.startDate}</p>
                        </div>
                        <Badge variant={investment.status === "active" ? "default" : "secondary"}>
                          {investment.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-slate-600 dark:text-slate-300">Invested</p>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            Le {investment.amount.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-300">Current Value</p>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            Le {investment.currentValue.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-300">Return</p>
                          <div className="flex items-center gap-1">
                            <p className="font-semibold text-green-600 dark:text-green-400">+{investment.return}%</p>
                            <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 mb-1">
                          <span>Progress</span>
                          <span>Maturity: {investment.maturityDate}</span>
                        </div>
                        <Progress value={investment.return * 10} className="h-2" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="invest" className="space-y-6">
            {!showInvestForm ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Investment Options</h3>
                  <p className="text-slate-600 dark:text-slate-300">Choose an investment that matches your goals</p>
                </div>

                <div className="space-y-4">
                  {investmentOptions.map((option, index) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 border-0 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-200">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center text-2xl`}
                          >
                            {option.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-slate-900 dark:text-white">{option.name}</h4>
                              <Badge className={getRiskColor(option.risk)}>{option.risk} Risk</Badge>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{option.description}</p>

                            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                              <div>
                                <p className="text-slate-600 dark:text-slate-300">Min. Investment</p>
                                <p className="font-semibold text-slate-900 dark:text-white">
                                  Le {option.minAmount.toLocaleString()}
                                </p>
                              </div>
                              <div>
                                <p className="text-slate-600 dark:text-slate-300">Expected Return</p>
                                <p className="font-semibold text-green-600 dark:text-green-400">
                                  {option.expectedReturn} p.a.
                                </p>
                              </div>
                              <div>
                                <p className="text-slate-600 dark:text-slate-300">Duration</p>
                                <p className="font-semibold text-slate-900 dark:text-white">{option.duration}</p>
                              </div>
                              <div>
                                <p className="text-slate-600 dark:text-slate-300">Risk Level</p>
                                <p className="font-semibold text-slate-900 dark:text-white">{option.risk}</p>
                              </div>
                            </div>

                            <Button
                              onClick={() => {
                                setSelectedInvestment(option)
                                setShowInvestForm(true)
                              }}
                              className="w-full bg-blue-600 hover:bg-blue-700"
                            >
                              Invest Now
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                {/* Investment Form */}
                <Card className="p-6 border-0 bg-white dark:bg-slate-800">
                  <div className="flex items-center gap-4 mb-6">
                    <Button variant="ghost" size="sm" onClick={() => setShowInvestForm(false)} className="p-2">
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Invest in {selectedInvestment?.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{selectedInvestment?.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Investment Details */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Expected Return</p>
                        <p className="font-semibold text-green-600 dark:text-green-400">
                          {selectedInvestment?.expectedReturn} annually
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Risk Level</p>
                        <Badge className={getRiskColor(selectedInvestment?.risk || "")}>
                          {selectedInvestment?.risk} Risk
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Duration</p>
                        <p className="font-semibold text-slate-900 dark:text-white">{selectedInvestment?.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Min. Amount</p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          Le {selectedInvestment?.minAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Amount Input */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-white">Investment Amount</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg font-bold text-slate-600 dark:text-slate-300">
                            Le
                          </span>
                          <Input
                            type="number"
                            placeholder={selectedInvestment?.minAmount.toString()}
                            value={investmentAmount}
                            onChange={(e) => setInvestmentAmount(e.target.value)}
                            className="pl-12 h-12 text-lg"
                            min={selectedInvestment?.minAmount}
                          />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          Minimum investment: Le {selectedInvestment?.minAmount.toLocaleString()}
                        </p>
                      </div>

                      {/* Quick Amount Buttons */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          selectedInvestment?.minAmount,
                          selectedInvestment?.minAmount * 2,
                          selectedInvestment?.minAmount * 5,
                        ].map((amount) => (
                          <Button
                            key={amount}
                            variant="outline"
                            onClick={() => setInvestmentAmount(amount?.toString() || "")}
                            className="h-10"
                          >
                            Le {amount?.toLocaleString()}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Projected Returns */}
                    {investmentAmount &&
                      Number.parseFloat(investmentAmount) >= (selectedInvestment?.minAmount || 0) && (
                        <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Projected Returns</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-green-700 dark:text-green-300">Investment</p>
                              <p className="font-bold text-green-900 dark:text-green-100">
                                Le {Number.parseFloat(investmentAmount).toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-green-700 dark:text-green-300">Est. Annual Return</p>
                              <p className="font-bold text-green-900 dark:text-green-100">
                                Le {Math.round(Number.parseFloat(investmentAmount) * 0.12).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </Card>
                      )}

                    {/* Terms and Conditions */}
                    <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Important Information</h4>
                          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                            <li>• Returns are estimates and not guaranteed</li>
                            <li>• Early withdrawal may incur penalties</li>
                            <li>• All investments carry risk of loss</li>
                            <li>• Read full terms before investing</li>
                          </ul>
                        </div>
                      </div>
                    </Card>

                    <Button
                      onClick={handleInvest}
                      disabled={
                        !investmentAmount || Number.parseFloat(investmentAmount) < (selectedInvestment?.minAmount || 0)
                      }
                      className="w-full h-12 bg-green-600 hover:bg-green-700"
                    >
                      Confirm Investment
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </TabsContent>

          <TabsContent value="learn" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Financial Education</h3>
              <p className="text-slate-600 dark:text-slate-300">Learn to make smarter investment decisions</p>
            </div>

            <div className="space-y-4">
              {educationalContent.map((content, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 border-0 bg-white dark:bg-slate-800 hover:shadow-md transition-all duration-200 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-slate-900 dark:text-white">{content.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {content.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{content.description}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3 h-3" />
                          {content.duration}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Investment Calculator */}
            <Card className="p-6 border-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Investment Calculator
              </h3>
              <p className="text-purple-100 mb-4">Calculate potential returns on your investments</p>
              <Button variant="secondary" className="w-full">
                Open Calculator
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
