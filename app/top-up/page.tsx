"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Smartphone, Zap, Phone, CreditCard, Fingerprint } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const providers = [
  {
    id: "africell",
    name: "Africell",
    logo: "🔵",
    color: "from-blue-500 to-blue-600",
    plans: [
      { amount: 5000, data: "500MB", validity: "1 day" },
      { amount: 10000, data: "1GB", validity: "3 days" },
      { amount: 25000, data: "3GB", validity: "7 days" },
      { amount: 50000, data: "7GB", validity: "30 days" },
    ],
  },
  {
    id: "orange",
    name: "Orange",
    logo: "🟠",
    color: "from-orange-500 to-orange-600",
    plans: [
      { amount: 5000, data: "400MB", validity: "1 day" },
      { amount: 12000, data: "1.2GB", validity: "3 days" },
      { amount: 30000, data: "4GB", validity: "7 days" },
      { amount: 60000, data: "8GB", validity: "30 days" },
    ],
  },
]

const utilities = [
  { id: "edsa", name: "EDSA Electricity", icon: "⚡", color: "from-yellow-500 to-orange-500" },
  { id: "guma", name: "Guma Valley Water", icon: "💧", color: "from-blue-500 to-cyan-500" },
  { id: "dstv", name: "DSTV", icon: "📺", color: "from-purple-500 to-pink-500" },
  { id: "startimes", name: "StarTimes", icon: "🎬", color: "from-red-500 to-pink-500" },
]

export default function TopUpScreen() {
  const [activeTab, setActiveTab] = useState("airtime")
  const [selectedProvider, setSelectedProvider] = useState<any>(null)
  const [selectedUtility, setSelectedUtility] = useState<any>(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [accountNumber, setAccountNumber] = useState("")
  const [pin, setPin] = useState("")
  const [step, setStep] = useState(1) // 1: select, 2: details, 3: confirm
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const handleProviderSelect = (provider: any) => {
    setSelectedProvider(provider)
    setStep(2)
  }

  const handleUtilitySelect = (utility: any) => {
    setSelectedUtility(utility)
    setStep(2)
  }

  const handleDetailsSubmit = () => {
    if (activeTab === "airtime" && phoneNumber && (amount || selectedPlan)) {
      setStep(3)
    } else if (activeTab === "bills" && accountNumber && amount) {
      setStep(3)
    }
  }

  const handleConfirmTransaction = async () => {
    if (pin.length === 4) {
      setIsProcessing(true)
      setTimeout(() => {
        setIsProcessing(false)
        router.push("/dashboard")
      }, 3000)
    }
  }

  const quickAmounts = [5000, 10000, 25000, 50000]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              if (step > 1) {
                setStep(step - 1)
              } else {
                router.back()
              }
            }}
            className="p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              {activeTab === "airtime" ? "Mobile Top-Up" : "Pay Bills"}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {step === 1 ? "Choose provider" : step === 2 ? "Enter details" : "Confirm payment"}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="airtime" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Airtime & Data
            </TabsTrigger>
            <TabsTrigger value="bills" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Utility Bills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="airtime">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="airtime-step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Select Network Provider</h3>
                  {providers.map((provider) => (
                    <Card
                      key={provider.id}
                      className="p-4 cursor-pointer hover:shadow-md transition-all duration-200 border-0 bg-white dark:bg-slate-800"
                      onClick={() => handleProviderSelect(provider)}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${provider.color} flex items-center justify-center text-2xl`}
                        >
                          {provider.logo}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 dark:text-white">{provider.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">Airtime & Data bundles</p>
                        </div>
                        <Smartphone className="w-5 h-5 text-slate-400" />
                      </div>
                    </Card>
                  ))}
                </motion.div>
              )}

              {step === 2 && selectedProvider && (
                <motion.div
                  key="airtime-step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* Provider Info */}
                  <Card className="p-4 border-0 bg-white dark:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${selectedProvider.color} flex items-center justify-center text-2xl`}
                      >
                        {selectedProvider.logo}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{selectedProvider.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Top-up & Data bundles</p>
                      </div>
                    </div>
                  </Card>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        placeholder="+232 XX XXX XXXX"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  {/* Data Plans */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Data Plans</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProvider.plans.map((plan: any, index: number) => (
                        <Card
                          key={index}
                          className={`p-4 cursor-pointer transition-all duration-200 border-2 ${
                            selectedPlan === plan
                              ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                              : "border-transparent bg-white dark:bg-slate-800"
                          }`}
                          onClick={() => {
                            setSelectedPlan(plan)
                            setAmount(plan.amount.toString())
                          }}
                        >
                          <div className="text-center">
                            <h4 className="font-bold text-slate-900 dark:text-white">
                              Le {plan.amount.toLocaleString()}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{plan.data}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{plan.validity}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="space-y-4">
                    <Label>Or Enter Custom Amount</Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg font-bold text-slate-600 dark:text-slate-300">
                        Le
                      </span>
                      <Input
                        type="number"
                        placeholder="0"
                        value={amount}
                        onChange={(e) => {
                          setAmount(e.target.value)
                          setSelectedPlan(null)
                        }}
                        className="pl-12 h-12 text-lg"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {quickAmounts.map((quickAmount) => (
                        <Button
                          key={quickAmount}
                          variant="outline"
                          onClick={() => {
                            setAmount(quickAmount.toString())
                            setSelectedPlan(null)
                          }}
                          className="h-10"
                        >
                          Le {quickAmount.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleDetailsSubmit}
                    disabled={!phoneNumber || (!amount && !selectedPlan)}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                  >
                    Continue
                  </Button>
                </motion.div>
              )}

              {step === 3 && selectedProvider && (
                <motion.div
                  key="airtime-step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* Transaction Summary */}
                  <Card className="p-6 border-0 bg-white dark:bg-slate-800">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Transaction Summary</h3>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Provider</span>
                        <span className="font-medium text-slate-900 dark:text-white">{selectedProvider.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Phone Number</span>
                        <span className="font-medium text-slate-900 dark:text-white">{phoneNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Amount</span>
                        <span className="font-bold text-xl text-slate-900 dark:text-white">
                          Le {Number.parseFloat(amount).toLocaleString()}
                        </span>
                      </div>
                      {selectedPlan && (
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">Data Bundle</span>
                          <span className="font-medium text-slate-900 dark:text-white">
                            {selectedPlan.data} - {selectedPlan.validity}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Fee</span>
                        <span className="font-medium text-slate-900 dark:text-white">Le 0</span>
                      </div>
                      <hr className="border-slate-200 dark:border-slate-700" />
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Total</span>
                        <span className="font-bold text-xl text-slate-900 dark:text-white">
                          Le {Number.parseFloat(amount).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </Card>

                  {/* PIN Input */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-slate-900 dark:text-white">Enter PIN to Confirm</Label>
                    <Input
                      type="password"
                      placeholder="Enter your 4-digit PIN"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      maxLength={4}
                      className="h-12 text-center text-2xl tracking-widest"
                    />

                    <Button variant="outline" className="w-full h-12 border-dashed" onClick={() => setPin("1234")}>
                      <Fingerprint className="w-5 h-5 mr-2" />
                      Use Biometric Authentication
                    </Button>
                  </div>

                  <Button
                    onClick={handleConfirmTransaction}
                    disabled={pin.length !== 4 || isProcessing}
                    className="w-full h-12 bg-green-600 hover:bg-green-700"
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      "Confirm Top-Up"
                    )}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="bills">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="bills-step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Select Utility Provider</h3>
                  {utilities.map((utility) => (
                    <Card
                      key={utility.id}
                      className="p-4 cursor-pointer hover:shadow-md transition-all duration-200 border-0 bg-white dark:bg-slate-800"
                      onClick={() => handleUtilitySelect(utility)}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${utility.color} flex items-center justify-center text-2xl`}
                        >
                          {utility.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 dark:text-white">{utility.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">Pay your bills instantly</p>
                        </div>
                        <CreditCard className="w-5 h-5 text-slate-400" />
                      </div>
                    </Card>
                  ))}
                </motion.div>
              )}

              {step === 2 && selectedUtility && (
                <motion.div
                  key="bills-step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* Utility Info */}
                  <Card className="p-4 border-0 bg-white dark:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${selectedUtility.color} flex items-center justify-center text-2xl`}
                      >
                        {selectedUtility.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{selectedUtility.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Bill payment</p>
                      </div>
                    </div>
                  </Card>

                  {/* Account Number */}
                  <div className="space-y-2">
                    <Label>Account Number / Customer ID</Label>
                    <Input
                      placeholder="Enter your account number"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="h-12"
                    />
                  </div>

                  {/* Amount */}
                  <div className="space-y-4">
                    <Label>Amount to Pay</Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg font-bold text-slate-600 dark:text-slate-300">
                        Le
                      </span>
                      <Input
                        type="number"
                        placeholder="0"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="pl-12 h-12 text-lg"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[25000, 50000, 100000, 200000].map((quickAmount) => (
                        <Button
                          key={quickAmount}
                          variant="outline"
                          onClick={() => setAmount(quickAmount.toString())}
                          className="h-10"
                        >
                          Le {quickAmount.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleDetailsSubmit}
                    disabled={!accountNumber || !amount}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                  >
                    Continue
                  </Button>
                </motion.div>
              )}

              {step === 3 && selectedUtility && (
                <motion.div
                  key="bills-step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* Transaction Summary */}
                  <Card className="p-6 border-0 bg-white dark:bg-slate-800">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Bill Payment Summary</h3>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Service Provider</span>
                        <span className="font-medium text-slate-900 dark:text-white">{selectedUtility.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Account Number</span>
                        <span className="font-medium text-slate-900 dark:text-white">{accountNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Amount</span>
                        <span className="font-bold text-xl text-slate-900 dark:text-white">
                          Le {Number.parseFloat(amount).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Service Fee</span>
                        <span className="font-medium text-slate-900 dark:text-white">Le 1,000</span>
                      </div>
                      <hr className="border-slate-200 dark:border-slate-700" />
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Total</span>
                        <span className="font-bold text-xl text-slate-900 dark:text-white">
                          Le {(Number.parseFloat(amount) + 1000).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </Card>

                  {/* PIN Input */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-slate-900 dark:text-white">Enter PIN to Confirm</Label>
                    <Input
                      type="password"
                      placeholder="Enter your 4-digit PIN"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      maxLength={4}
                      className="h-12 text-center text-2xl tracking-widest"
                    />

                    <Button variant="outline" className="w-full h-12 border-dashed" onClick={() => setPin("1234")}>
                      <Fingerprint className="w-5 h-5 mr-2" />
                      Use Biometric Authentication
                    </Button>
                  </div>

                  <Button
                    onClick={handleConfirmTransaction}
                    disabled={pin.length !== 4 || isProcessing}
                    className="w-full h-12 bg-green-600 hover:bg-green-700"
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      "Pay Bill"
                    )}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
