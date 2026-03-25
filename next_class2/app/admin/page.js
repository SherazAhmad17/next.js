import React from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold tracking-wider text-blue-400">Admin Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="block px-4 py-3 bg-gray-800 rounded-lg text-gray-200 hover:bg-gray-700 transition">
            Dashboard
          </Link>
          <Link href="/admin/users" className="block px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition">
            User Management
          </Link>
          <Link href="/admin/about" className="block px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition">
            Edit About Page
          </Link>
          <Link href="/admin/settings" className="block px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition">
            System Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button className="w-full px-4 py-2 bg-red-600/10 text-red-500 rounded-lg border border-red-600/20 hover:bg-red-600 hover:text-white transition">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
            <p className="text-gray-500 mt-1">Welcome back, Sheraz. Here is what's happening today.</p>
          </div>
        </header>

        {/* Dashboard Widgets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Widget 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Users</h3>
            <p className="text-3xl font-bold text-gray-900">1,248</p>
            <span className="text-sm text-green-500 font-medium">+12% from last week</span>
          </div>

          {/* Widget 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Active Socket Connections</h3>
            <p className="text-3xl font-bold text-gray-900">86</p>
            <span className="text-sm text-gray-400 font-medium">Live Chat instances</span>
          </div>

          {/* Widget 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">CVs Generated</h3>
            <p className="text-3xl font-bold text-gray-900">342</p>
            <span className="text-sm text-green-500 font-medium">+54 today</span>
          </div>

          {/* Widget 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-red-500">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Server Load</h3>
            <p className="text-3xl font-bold text-red-600">88%</p>
            <span className="text-sm text-red-500 font-medium">Stress test active</span>
          </div>
          
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Recent System Logs</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center justify-between border-b pb-2">
                <span>User <strong>admin_sheraz</strong> initiated server load test.</span>
                <span className="text-gray-400">10 mins ago</span>
              </li>
              <li className="flex items-center justify-between border-b pb-2">
                <span>Database backup completed successfully (MongoDB).</span>
                <span className="text-gray-400">2 hours ago</span>
              </li>
              <li className="flex items-center justify-between border-b pb-2">
                <span>New CV template pushed to production.</span>
                <span className="text-gray-400">5 hours ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Socket.io connection threshold warning.</span>
                <span className="text-gray-400">1 day ago</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

    </div>
  );
}