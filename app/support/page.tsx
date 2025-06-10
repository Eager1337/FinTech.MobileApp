"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Phone, Mail, Search, ChevronRight, Send, Bot, User, Clock, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"

const faqData = [
  {
    category: "Account",
    questions: [
      {
        question: "How do I reset my PIN?",
        answer:
          "You can reset your PIN by going to Settings > Security > Change PIN. You'll need to verify your identity first.",
      },
      {
        question: "How do I update my profile information?",
        answer: "Go to Profile > Edit to update your personal information, phone number, and address.",
      },
      {
        question: "Can I have multiple accounts?",
        answer: "Currently, each user can have one FinTech account per phone number.",
      },
    ],
  },
  {
    category: "Transactions",
    questions: [
      {
        question: "What are the transaction limits?",
        answer:
          "Daily limit is Le 1,000,000. Monthly limit is Le 10,000,000. You can request higher limits by contacting support.",
      },
      {
        question: "How long do transfers take?",
        answer: "FinTech to FinTech transfers are instant. Bank transfers take 1-3 business days.",
      },
      {
        question: "Are there any fees?",
        answer:
          "FinTech to FinTech transfers are free. Bank transfers have a small fee of Le 1,000-5,000 depending on amount.",
      },
    ],
  },
  {
    category: "Security",
    questions: [
      {
        question: "How secure is my money?",
        answer: "Your funds are protected by bank-level security, encryption, and are insured up to Le 50,000,000.",
      },
      {
        question: "What if I lose my phone?",
        answer:
          "Contact support immediately to freeze your account. You can reactivate it on a new device with proper verification.",
      },
      {
        question: "How do I enable two-factor authentication?",
        answer: "Go to Settings > Security > Two-Factor Authentication and follow the setup instructions.",
      },
    ],
  },
]

const chatMessages = [
  {
    id: 1,
    type: "bot",
    message: "Hello! I'm your FinTech assistant. How can I help you today?",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    type: "user",
    message: "I need help with a failed transaction",
    timestamp: "10:31 AM",
  },
  {
    id: 3,
    type: "bot",
    message: "I'd be happy to help you with that. Can you please provide the transaction reference number?",
    timestamp: "10:31 AM",
  },
]

export default function SupportScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFaq, setSelectedFaq] = useState<any>(null)
  const [chatInput, setChatInput] = useState("")
  const [messages, setMessages] = useState(chatMessages)
  const [supportTicket, setSupportTicket] = useState({
    subject: "",
    description: "",
    priority: "medium",
  })
  const router = useRouter()

  const filteredFaqs = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user" as const,
        message: chatInput,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMessage])
      setChatInput("")

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: "bot" as const,
          message: "Thank you for your message. I'm processing your request and will get back to you shortly.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, botResponse])
      }, 1000)
    }
  }

  const handleSubmitTicket = () => {
    if (supportTicket.subject && supportTicket.description) {
      alert("Support ticket submitted successfully! We'll get back to you within 24 hours.")
      setSupportTicket({ subject: "", description: "", priority: "medium" })
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
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Help & Support</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">Get help when you need it</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="faq" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="chat">Live Chat</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* FAQ Categories */}
            {!selectedFaq ? (
              <div className="space-y-6">
                {filteredFaqs.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 border-0 bg-white dark:bg-slate-800">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{category.category}</h3>
                      <div className="space-y-3">
                        {category.questions.map((faq, faqIndex) => (
                          <div
                            key={faqIndex}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                            onClick={() => setSelectedFaq(faq)}
                          >
                            <div className="flex items-center gap-3">
                              <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              <span className="font-medium text-slate-900 dark:text-white">{faq.question}</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* FAQ Detail */
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="p-6 border-0 bg-white dark:bg-slate-800">
                  <div className="flex items-center gap-4 mb-6">
                    <Button variant="ghost" size="sm" onClick={() => setSelectedFaq(null)} className="p-2">
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{selectedFaq.question}</h3>
                  </div>
                  <div className="prose dark:prose-invert">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{selectedFaq.answer}</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Was this helpful?</p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        👍 Yes
                      </Button>
                      <Button variant="outline" size="sm">
                        👎 No
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <Card className="border-0 bg-white dark:bg-slate-800 h-96 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">FinTech Assistant</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-slate-600 dark:text-slate-300">Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                    )}
                    <div className={`max-w-xs ${message.type === "user" ? "order-1" : ""}`}>
                      <div
                        className={`p-3 rounded-lg ${
                          message.type === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{message.timestamp}</p>
                    </div>
                    {message.type === "user" && (
                      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex gap-3">
                  <Input
                    placeholder="Type your message..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="sm" className="px-3">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="p-4 border-0 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Call Us</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">+232 76 FINTECH (346-8324)</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Available 24/7</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Call Now
                  </Button>
                </div>
              </Card>

              <Card className="p-4 border-0 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Email Support</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">support@fintech.sl</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Response within 24 hours</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Email Us
                  </Button>
                </div>
              </Card>
            </div>

            {/* Support Ticket Form */}
            <Card className="p-6 border-0 bg-white dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Submit a Support Ticket</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white">Subject</label>
                  <Input
                    placeholder="Brief description of your issue"
                    value={supportTicket.subject}
                    onChange={(e) => setSupportTicket((prev) => ({ ...prev, subject: e.target.value }))}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white">Priority</label>
                  <div className="flex gap-2">
                    {["low", "medium", "high"].map((priority) => (
                      <Button
                        key={priority}
                        variant={supportTicket.priority === priority ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSupportTicket((prev) => ({ ...prev, priority }))}
                        className="capitalize"
                      >
                        {priority}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white">Description</label>
                  <Textarea
                    placeholder="Please provide detailed information about your issue..."
                    value={supportTicket.description}
                    onChange={(e) => setSupportTicket((prev) => ({ ...prev, description: e.target.value }))}
                    className="min-h-32"
                  />
                </div>

                <Button
                  onClick={handleSubmitTicket}
                  disabled={!supportTicket.subject || !supportTicket.description}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                >
                  Submit Ticket
                </Button>
              </div>
            </Card>

            {/* Office Hours */}
            <Card className="p-4 border-0 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">Support Hours</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Monday - Friday: 8:00 AM - 8:00 PM
                    <br />
                    Saturday - Sunday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
