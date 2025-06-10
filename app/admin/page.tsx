"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Bell,
  BarChart3,
  Send,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"
import { motion } from "framer-motion"

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginCredentials, setLoginCredentials] = useState({ username: "", password: "" })
  const [notification, setNotification] = useState({ title: "", message: "", type: "info" })
  const router = useRouter()

  const handleAdminLogin = () => {
    // Simple authentication check (in real app, this would be secure)
    if (loginCredentials.username === "eagerbeaverr" && loginCredentials.password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials. Use: eagerbeaverr / admin123")
    }
  }

  const handleSendNotification = () => {
    if (notification.title && notification.message) {
      alert(`Notification sent to all users: ${notification.title}`)
      setNotification({ title: "", message: "", type: "info" })
    }
  }

  const systemStats = [
    { label: "Total Users", value: "12,847", change: "+8.2%", icon: Users, color: "text-blue-600" },
    { label: "Active Users (24h)", value: "3,421", change: "+12.5%", icon: Activity, color: "text-green-600" },
    { label: "Total Transactions", value: "45,892", change: "+15.3%", icon: TrendingUp, color: "text-purple-600" },
    { label: "Transaction Volume", value: "Le 2.8B", change: "+22.1%", icon: DollarSign, color: "text-orange-600" },
  ]

  const recentTransactions = [
    { id: "TXN001234567", user: "John Doe", amount: 50000, type: "transfer", status: "completed", time: "2 min ago" },
    { id: "TXN001234566", user: "Fatima Sesay", amount: 25000, type: "topup", status: "completed", time: "5 min ago" },
    { id: "TXN001234565", user: "Mohamed Kamara", amount: 75000, type: "bill", status: "pending", time: "8 min ago" },
    {
      id: "TXN001234564",
      user: "Aminata Bangura",
      amount: 100000,
      type: "transfer",
      status: "failed",
      time: "12 min ago",
    },
  ]

  const systemAlerts = [
    { id: 1, type: "warning", message: "High transaction volume detected", time: "10 min ago" },
    { id: 2, type: "info", message: "System maintenance scheduled for tonight", time: "1 hour ago" },
    { id: 3, type: "error", message: "Payment gateway timeout reported", time: "2 hours ago" },
    { id: 4, type: "success", message: "Security update deployed successfully", time: "4 hours ago" },
  ]

  const userGrowthData = [
    { month: "Jan", users: 8500 },
    { month: "Feb", users: 9200 },
    { month: "Mar", users: 10100 },
    { month: "Apr", users: 11300 },
    { month: "May", users: 12100 },
    { month: "Jun", users: 12847 },
  ]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <Card className="p-8 border-0 bg-white/10 backdrop-blur-sm text-white">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Admin Access</h1>
              <p className="text-slate-300">Restricted to authorized personnel only</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200">Username</label>
                <Input
                  placeholder="Enter admin username"
                  value={loginCredentials.username}
                  onChange={(e) => setLoginCredentials((prev) => ({ ...prev, username: e.target.value }))}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200">Password</label>
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={loginCredentials.password}
                  onChange={(e) => setLoginCredentials((prev) => ({ ...prev, password: e.target.value }))}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  onKeyPress={(e) => e.key === "Enter" && handleAdminLogin()}
                />
              </div>
              <Button onClick={handleAdminLogin} className="w-full bg-red-600 hover:bg-red-700 text-white">
                Access Admin Panel
              </Button>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
              <p className="text-xs text-yellow-200">Demo credentials: eagerbeaverr / admin123</p>
            </div>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              className="p-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-red-100">FinTech System Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-white/20 text-white">
              Eager Beaver
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAuthenticated(false)}
              className="text-white hover:bg-white/20"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* System Stats */}
            <div className="grid grid-cols-2 gap-4">
              {systemStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 border-0 bg-white dark:bg-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* User Growth Chart */}
            <Card className="p-6 border-0 bg-white dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                User Growth (Last 6 Months)
              </h3>
              <div className="h-48 flex items-end justify-between gap-2">
                {userGrowthData.map((data, index) => (
                  <div key={data.month} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-blue-600 rounded-t-lg transition-all duration-1000 ease-out"
                      style={{ height: `${(data.users / 15000) * 100}%` }}
                    />
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">{data.month}</p>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">
                      {data.users.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 border-0 bg-white dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Recent Transactions</h3>
              <div className="space-y-3">
                {recentTransactions.slice(0, 5).map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">{transaction.user}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {transaction.id} • {transaction.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Le {transaction.amount.toLocaleString()}
                      </p>
                      <Badge
                        variant={
                          transaction.status === "completed"
                            ? "default"
                            : transaction.status === "pending"
                              ? "secondary"
                              : "destructive"
                        }
                        className="text-xs"
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="p-6 border-0 bg-white dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">User Management</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">Total Users</h4>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">12,847</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">+8.2% this month</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-100">Active Users</h4>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">3,421</p>
                  <p className="text-sm text-green-700 dark:text-green-300">Last 24 hours</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-slate-900 dark:text-white">Recent Registrations</h4>
                {[
                  { name: "John Doe", email: "john@example.com", joined: "2 hours ago", status: "verified" },
                  { name: "Fatima Sesay", email: "fatima@example.com", joined: "4 hours ago", status: "pending" },
                  { name: "Mohamed Kamara", email: "mohamed@example.com", joined: "6 hours ago", status: "verified" },
                ].map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <div>
                      <h5 className="font-medium text-slate-900 dark:text-white">{user.name}</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{user.email}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={user.status === "verified" ? "default" : "secondary"}>{user.status}</Badge>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{user.joined}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="p-6 border-0 bg-white dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Transaction Monitoring</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100">Today's Volume</h4>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">Le 45.2M</p>
                  <p className="text-sm text-purple-700 dark:text-purple-300">1,247 transactions</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100">Success Rate</h4>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">98.7%</p>
                  <p className="text-sm text-orange-700 dark:text-orange-300">16 failed transactions</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-slate-900 dark:text-white">Recent Transactions</h4>
                {recentTransactions.map((transaction, index) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <div>
                      <h5 className="font-medium text-slate-900 dark:text-white">{transaction.id}</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {transaction.user} • {transaction.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Le {transaction.amount.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            transaction.status === "completed"
                              ? "default"
                              : transaction.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                          className="text-xs"
                        >
                          {transaction.status}
                        </Badge>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{transaction.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            {/* System Alerts */}
            <Card className="p-6 border-0 bg-white dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">System Alerts</h3>
              <div className="space-y-3">
                {systemAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    {alert.type === "error" && <AlertTriangle className="w-5 h-5 text-red-500" />}
                    {alert.type === "warning" && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                    {alert.type === "success" && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {alert.type === "info" && <Clock className="w-5 h-5 text-blue-500" />}
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 dark:text-white">{alert.message}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Send Notification */}
            <Card className="p-6 border-0 bg-white dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Send System Notification
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white">Notification Title</label>
                  <Input
                    placeholder="Enter notification title"
                    value={notification.title}
                    onChange={(e) => setNotification((prev) => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white">Message</label>
                  <Input
                    placeholder="Enter notification message"
                    value={notification.message}
                    onChange={(e) => setNotification((prev) => ({ ...prev, message: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white">Type</label>
                  <div className="flex gap-2">
                    {["info", "warning", "success", "error"].map((type) => (
                      <Button
                        key={type}
                        variant={notification.type === type ? "default" : "outline"}
                        size="sm"
                        onClick={() => setNotification((prev) => ({ ...prev, type }))}
                        className="capitalize"
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={handleSendNotification}
                  disabled={!notification.title || !notification.message}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send to All Users
                </Button>
              </div>
            </Card>

            {/* System Status */}
            <Card className="p-6 border-0 bg-white dark:bg-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">System Status</h3>
              <div className="space-y-4">
                {[
                  { service: "API Gateway", status: "operational", uptime: "99.9%" },
                  { service: "Database", status: "operational", uptime: "99.8%" },
                  { service: "Payment Processing", status: "operational", uptime: "99.7%" },
                  { service: "SMS Service", status: "degraded", uptime: "97.2%" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          service.status === "operational" ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      />
                      <span className="font-medium text-slate-900 dark:text-white">{service.service}</span>
                    </div>
                    <div className="text-right">
                      <Badge variant={service.status === "operational" ? "default" : "secondary"}>
                        {service.status}
                      </Badge>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{service.uptime} uptime</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
