"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  Download,
  ArrowUpRight,
  ArrowDownLeft,
  Smartphone,
  CreditCard,
  FileText,
} from "lucide-react"
import { motion } from "framer-motion"

const transactions = [
  {
    id: 1,
    type: "received",
    amount: 50000,
    from: "Mohamed Kamara",
    to: null,
    date: "2024-01-15",
    time: "14:30",
    status: "completed",
    reference: "TXN001234567",
    note: "Payment for services",
  },
  {
    id: 2,
    type: "sent",
    amount: 25000,
    from: null,
    to: "Fatima Sesay",
    date: "2024-01-14",
    time: "09:15",
    status: "completed",
    reference: "TXN001234566",
    note: "Lunch money",
  },
  {
    id: 3,
    type: "topup",
    amount: 10000,
    provider: "Africell",
    date: "2024-01-13",
    time: "16:45",
    status: "completed",
    reference: "TXN001234565",
    note: "Airtime top-up",
  },
  {
    id: 4,
    type: "bill",
    amount: 75000,
    service: "EDSA Electricity",
    date: "2024-01-12",
    time: "11:20",
    status: "completed",
    reference: "TXN001234564",
    note: "Monthly electricity bill",
  },
  {
    id: 5,
    type: "sent",
    amount: 15000,
    to: "Ibrahim Conteh",
    date: "2024-01-11",
    time: "19:30",
    status: "pending",
    reference: "TXN001234563",
    note: "Transport fare",
  },
  {
    id: 6,
    type: "received",
    amount: 100000,
    from: "Aminata Bangura",
    date: "2024-01-10",
    time: "08:45",
    status: "completed",
    reference: "TXN001234562",
    note: "Salary advance",
  },
]

export default function TransactionsScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null)
  const router = useRouter()

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.from?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.to?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.provider?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.service?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.reference.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = selectedFilter === "all" || transaction.type === selectedFilter

    return matchesSearch && matchesFilter
  })

  const handleExport = (format: "pdf" | "csv") => {
    // Simulate export functionality
    alert(`Exporting transactions as ${format.toUpperCase()}...`)
  }

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "received":
        return <ArrowDownLeft className="w-5 h-5 text-green-600 dark:text-green-400" />
      case "sent":
        return <ArrowUpRight className="w-5 h-5 text-red-600 dark:text-red-400" />
      case "topup":
        return <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      case "bill":
        return <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      default:
        return <ArrowUpRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
    }
  }

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "received":
        return "bg-green-100 dark:bg-green-900"
      case "sent":
        return "bg-red-100 dark:bg-red-900"
      case "topup":
        return "bg-blue-100 dark:bg-blue-900"
      case "bill":
        return "bg-purple-100 dark:bg-purple-900"
      default:
        return "bg-slate-100 dark:bg-slate-800"
    }
  }

  if (selectedTransaction) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setSelectedTransaction(null)} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">Transaction Details</h1>
              <p className="text-sm text-slate-600 dark:text-slate-300">{selectedTransaction.reference}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            {/* Status Card */}
            <Card className="p-6 border-0 bg-white dark:bg-slate-800 text-center">
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full ${getTransactionColor(selectedTransaction.type)} flex items-center justify-center`}
              >
                {getTransactionIcon(selectedTransaction.type)}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {selectedTransaction.type === "received" ? "+" : "-"}Le {selectedTransaction.amount.toLocaleString()}
              </h2>

              <Badge variant={selectedTransaction.status === "completed" ? "default" : "secondary"} className="mb-4">
                {selectedTransaction.status}
              </Badge>

              <p className="text-slate-600 dark:text-slate-300">
                {selectedTransaction.date} at {selectedTransaction.time}
              </p>
            </Card>

            {/* Transaction Details */}
            <Card className="p-6 border-0 bg-white dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Details</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Reference</span>
                  <span className="font-medium text-slate-900 dark:text-white">{selectedTransaction.reference}</span>
                </div>

                {selectedTransaction.from && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">From</span>
                    <span className="font-medium text-slate-900 dark:text-white">{selectedTransaction.from}</span>
                  </div>
                )}

                {selectedTransaction.to && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">To</span>
                    <span className="font-medium text-slate-900 dark:text-white">{selectedTransaction.to}</span>
                  </div>
                )}

                {selectedTransaction.provider && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Provider</span>
                    <span className="font-medium text-slate-900 dark:text-white">{selectedTransaction.provider}</span>
                  </div>
                )}

                {selectedTransaction.service && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Service</span>
                    <span className="font-medium text-slate-900 dark:text-white">{selectedTransaction.service}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Type</span>
                  <span className="font-medium text-slate-900 dark:text-white capitalize">
                    {selectedTransaction.type}
                  </span>
                </div>

                {selectedTransaction.note && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Note</span>
                    <span className="font-medium text-slate-900 dark:text-white">{selectedTransaction.note}</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12">
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
              <Button variant="outline" className="h-12">
                <FileText className="w-4 h-4 mr-2" />
                Report Issue
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Transaction History</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">View all your transactions</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { key: "all", label: "All" },
              { key: "received", label: "Received" },
              { key: "sent", label: "Sent" },
              { key: "topup", label: "Top-up" },
              { key: "bill", label: "Bills" },
            ].map((filter) => (
              <Button
                key={filter.key}
                variant={selectedFilter === filter.key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.key)}
                className="whitespace-nowrap"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Export Options */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {filteredTransactions.length} transactions
          </h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => handleExport("pdf")}>
              <Download className="w-4 h-4 mr-1" />
              PDF
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleExport("csv")}>
              <Download className="w-4 h-4 mr-1" />
              CSV
            </Button>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-3">
          {filteredTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className="p-4 border-0 bg-white dark:bg-slate-800 cursor-pointer hover:shadow-md transition-all duration-200"
                onClick={() => setSelectedTransaction(transaction)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full ${getTransactionColor(transaction.type)} flex items-center justify-center`}
                    >
                      {getTransactionIcon(transaction.type)}
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
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {transaction.date} • {transaction.time}
                        </p>
                        <Badge
                          variant={transaction.status === "completed" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {transaction.status}
                        </Badge>
                      </div>
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
                    <p className="text-xs text-slate-500 dark:text-slate-400">{transaction.reference}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No transactions found</h3>
            <p className="text-slate-600 dark:text-slate-300">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
