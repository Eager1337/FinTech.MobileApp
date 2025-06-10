"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, User, CreditCard, Wallet, Check, Fingerprint } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const recentContacts = [
  { id: 1, name: "Mohamed Kamara", phone: "+232 76 123 456", avatar: "MK" },
  { id: 2, name: "Fatima Sesay", phone: "+232 77 234 567", avatar: "FS" },
  { id: 3, name: "Ibrahim Conteh", phone: "+232 78 345 678", avatar: "IC" },
  { id: 4, name: "Aminata Bangura", phone: "+232 79 456 789", avatar: "AB" },
]

const paymentMethods = [
  { id: "wallet", name: "FinTech Wallet", balance: "Le 125,750", icon: Wallet, primary: true },
  { id: "card", name: "Bank Card ****1234", balance: "Le 450,000", icon: CreditCard, primary: false },
]

export default function SendMoneyScreen() {
  const [step, setStep] = useState(1) // 1: recipient, 2: amount, 3: confirm
  const [selectedContact, setSelectedContact] = useState<any>(null)
  const [customRecipient, setCustomRecipient] = useState("")
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("wallet")
  const [pin, setPin] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const handleSelectContact = (contact: any) => {
    setSelectedContact(contact)
    setStep(2)
  }

  const handleCustomRecipient = () => {
    if (customRecipient) {
      setSelectedContact({ name: "Custom", phone: customRecipient })
      setStep(2)
    }
  }

  const handleAmountSubmit = () => {
    if (amount && Number.parseFloat(amount) > 0) {
      setStep(3)
    }
  }

  const handleConfirmTransaction = async () => {
    if (pin.length === 4) {
      setIsProcessing(true)
      // Simulate transaction processing
      setTimeout(() => {
        setIsProcessing(false)
        router.push("/dashboard")
      }, 3000)
    }
  }

  const quickAmounts = [10000, 25000, 50000, 100000]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => (step > 1 ? setStep(step - 1) : router.back())}
            className="p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Send Money</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {step === 1 ? "Choose recipient" : step === 2 ? "Enter amount" : "Confirm transaction"}
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center mt-6 space-x-2">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  stepNumber <= step
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                }`}
              >
                {stepNumber < step ? <Check className="w-4 h-4" /> : stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`w-12 h-1 mx-2 ${stepNumber < step ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {/* Step 1: Choose Recipient */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Enter phone number or search contacts"
                  value={customRecipient}
                  onChange={(e) => setCustomRecipient(e.target.value)}
                  className="pl-10 h-12"
                  onKeyPress={(e) => e.key === "Enter" && handleCustomRecipient()}
                />
              </div>

              {customRecipient && (
                <Button onClick={handleCustomRecipient} className="w-full h-12 bg-blue-600 hover:bg-blue-700">
                  Continue with {customRecipient}
                </Button>
              )}

              {/* Recent Contacts */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Recent Contacts</h3>
                <div className="space-y-3">
                  {recentContacts.map((contact) => (
                    <Card
                      key={contact.id}
                      className="p-4 cursor-pointer hover:shadow-md transition-all duration-200 border-0 bg-white dark:bg-slate-800"
                      onClick={() => handleSelectContact(contact)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                          {contact.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900 dark:text-white">{contact.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{contact.phone}</p>
                        </div>
                        <User className="w-5 h-5 text-slate-400" />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Enter Amount */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Recipient Info */}
              <Card className="p-4 border-0 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {selectedContact?.avatar || selectedContact?.name?.charAt(0) || "U"}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">{selectedContact?.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{selectedContact?.phone}</p>
                  </div>
                </div>
              </Card>

              {/* Amount Input */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-slate-900 dark:text-white">Amount to Send</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-slate-600 dark:text-slate-300">
                    Le
                  </span>
                  <Input
                    type="number"
                    placeholder="0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-12 h-16 text-2xl font-bold text-center"
                  />
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  {quickAmounts.map((quickAmount) => (
                    <Button
                      key={quickAmount}
                      variant="outline"
                      onClick={() => setAmount(quickAmount.toString())}
                      className="h-12"
                    >
                      Le {quickAmount.toLocaleString()}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="space-y-2">
                <Label>Note (Optional)</Label>
                <Input
                  placeholder="Add a note..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="h-12"
                />
              </div>

              <Button
                onClick={handleAmountSubmit}
                disabled={!amount || Number.parseFloat(amount) <= 0}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700"
              >
                Continue
              </Button>
            </motion.div>
          )}

          {/* Step 3: Confirm Transaction */}
          {step === 3 && (
            <motion.div
              key="step3"
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
                    <span className="text-slate-600 dark:text-slate-300">Recipient</span>
                    <span className="font-medium text-slate-900 dark:text-white">{selectedContact?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Phone</span>
                    <span className="font-medium text-slate-900 dark:text-white">{selectedContact?.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Amount</span>
                    <span className="font-bold text-xl text-slate-900 dark:text-white">
                      Le {Number.parseFloat(amount).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Fee</span>
                    <span className="font-medium text-slate-900 dark:text-white">Le 0</span>
                  </div>
                  {note && (
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-300">Note</span>
                      <span className="font-medium text-slate-900 dark:text-white">{note}</span>
                    </div>
                  )}
                  <hr className="border-slate-200 dark:border-slate-700" />
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Total</span>
                    <span className="font-bold text-xl text-slate-900 dark:text-white">
                      Le {Number.parseFloat(amount).toLocaleString()}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Payment Method */}
              <div>
                <Label className="text-lg font-semibold text-slate-900 dark:text-white mb-4 block">
                  Payment Method
                </Label>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <Card
                      key={method.id}
                      className={`p-4 cursor-pointer transition-all duration-200 border-2 ${
                        selectedPaymentMethod === method.id
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                          : "border-transparent bg-white dark:bg-slate-800"
                      }`}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                    >
                      <div className="flex items-center gap-3">
                        <method.icon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900 dark:text-white">{method.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{method.balance}</p>
                        </div>
                        {method.primary && <Badge>Primary</Badge>}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

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

                <Button
                  variant="outline"
                  className="w-full h-12 border-dashed"
                  onClick={() => setPin("1234")} // Simulate biometric
                >
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
                  "Confirm & Send"
                )}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
