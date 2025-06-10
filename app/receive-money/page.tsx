"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, QrCode, Copy, Share, Phone, Wallet, Check } from "lucide-react"
import { motion } from "framer-motion"

export default function ReceiveMoneyScreen() {
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  const walletId = "FT-2024-JD-789456"
  const phoneNumber = "+232 76 123 456"

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Send me money on FinTech",
          text: `Send money to my FinTech wallet: ${walletId}`,
          url: `fintech://pay/${walletId}${amount ? `?amount=${amount}` : ""}`,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      handleCopy(`Send money to my FinTech wallet: ${walletId}`)
    }
  }

  const generateQRData = () => {
    const baseData = {
      type: "fintech_payment",
      wallet_id: walletId,
      phone: phoneNumber,
      name: "John Doe",
    }

    if (amount) {
      return JSON.stringify({ ...baseData, amount: Number.parseFloat(amount), note })
    }

    return JSON.stringify(baseData)
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
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Receive Money</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">Share your payment details</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="qr" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="qr" className="flex items-center gap-2">
              <QrCode className="w-4 h-4" />
              QR Code
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Details
            </TabsTrigger>
          </TabsList>

          {/* Amount and Note (Common for both tabs) */}
          <Card className="p-6 border-0 bg-white dark:bg-slate-800">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Request Specific Amount (Optional)
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Amount</Label>
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
              </div>

              <div className="space-y-2">
                <Label>Note (Optional)</Label>
                <Input
                  placeholder="What's this for?"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="h-12"
                />
              </div>
            </div>
          </Card>

          <TabsContent value="qr" className="space-y-6">
            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 border-0 bg-white dark:bg-slate-800 text-center">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Scan to Pay</h3>

                {/* QR Code Placeholder */}
                <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 ${Math.random() > 0.5 ? "bg-slate-900 dark:bg-white" : "bg-transparent"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {amount
                    ? `Request for Le ${Number.parseFloat(amount).toLocaleString()}`
                    : "Open amount payment request"}
                </p>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => handleCopy(generateQRData())} className="flex-1 h-12">
                    {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                  <Button onClick={handleShare} className="flex-1 h-12 bg-blue-600 hover:bg-blue-700">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            {/* Payment Details */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="space-y-4">
                {/* Wallet ID */}
                <Card className="p-4 border-0 bg-white dark:bg-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">Wallet ID</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{walletId}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => handleCopy(walletId)} className="p-2">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </Card>

                {/* Phone Number */}
                <Card className="p-4 border-0 bg-white dark:bg-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">Phone Number</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{phoneNumber}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => handleCopy(phoneNumber)} className="p-2">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </Card>

                {/* Share Instructions */}
                <Card className="p-4 border-0 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">How to receive money</h4>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Share your Wallet ID or phone number</li>
                    <li>• Ask sender to use FinTech app</li>
                    <li>• Money will appear in your wallet instantly</li>
                  </ul>
                </Card>

                <Button onClick={handleShare} className="w-full h-12 bg-blue-600 hover:bg-blue-700">
                  <Share className="w-4 h-4 mr-2" />
                  Share Payment Details
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
