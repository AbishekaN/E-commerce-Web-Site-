
import { Package, ShoppingBag, Wrench, DollarSign, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    { title: 'Total Products', value: '156', icon: Package, color: 'from-orange-500 to-orange-600', change: '+12%' },
    { title: 'Pending Orders', value: '23', icon: ShoppingBag, color: 'from-yellow-500 to-yellow-600', change: '+8%' },
    { title: 'Active Repairs', value: '12', icon: Wrench, color: 'from-orange-600 to-red-500', change: '+5%' },
    { title: 'Monthly Revenue', value: '$12,450', icon: DollarSign, color: 'from-green-500 to-green-600', change: '+15%' },
    { title: 'Growth Rate', value: '+15%', icon: TrendingUp, color: 'from-blue-500 to-blue-600', change: '+3%' },
    { title: 'Total Customers', value: '348', icon: Users, color: 'from-purple-500 to-purple-600', change: '+25%' },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', product: 'iPhone 14 Case', status: 'Pending', amount: '$25.99', time: '2 mins ago' },
    { id: '#ORD-002', customer: 'Jane Smith', product: 'Samsung Charger', status: 'Processing', amount: '$19.99', time: '15 mins ago' },
    { id: '#ORD-003', customer: 'Mike Johnson', product: 'AirPods Case', status: 'Shipped', amount: '$15.99', time: '1 hour ago' },
    { id: '#ORD-004', customer: 'Sarah Wilson', product: 'Phone Stand', status: 'Delivered', amount: '$12.99', time: '2 hours ago' },
  ];

  const recentRepairs = [
    { id: '#REP-001', customer: 'Alice Brown', device: 'iPhone 13 Pro', issue: 'Screen Replacement', status: 'In Progress', priority: 'High' },
    { id: '#REP-002', customer: 'Bob Wilson', device: 'Samsung Galaxy S22', issue: 'Battery Replacement', status: 'Completed', priority: 'Medium' },
    { id: '#REP-003', customer: 'Carol Davis', device: 'iPhone 12', issue: 'Camera Fix', status: 'Pending', priority: 'Low' },
    { id: '#REP-004', customer: 'David Lee', device: 'OnePlus 10T', issue: 'Charging Port', status: 'Waiting for Parts', priority: 'Medium' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back, Admin!</h2>
            <p className="text-orange-100 text-lg">Here's what's happening with your business today.</p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-orange-100 text-sm">Today's Date</p>
            <p className="text-xl font-semibold">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-600 text-sm font-medium mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                    <span className="text-gray-500 text-sm">vs last month</span>
                  </div>
                </div>
                <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
            <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-100 hover:shadow-md transition-all duration-200">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <p className="font-bold text-gray-900 text-base">{order.id}</p>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'Processing' ? 'bg-orange-100 text-orange-800' :
                      order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{order.customer}</p>
                  <p className="text-gray-500 text-sm">{order.product}</p>
                  <p className="text-gray-400 text-xs flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    {order.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-lg">{order.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Repairs */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Recent Repairs</h3>
            <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {recentRepairs.map((repair, index) => (
              <div key={repair.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-100 hover:shadow-md transition-all duration-200">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <p className="font-bold text-gray-900 text-base">{repair.id}</p>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      repair.priority === 'High' ? 'bg-red-100 text-red-800' :
                      repair.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {repair.priority}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{repair.customer}</p>
                  <p className="text-gray-600 text-sm">{repair.device}</p>
                  <p className="text-gray-500 text-sm">{repair.issue}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    repair.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    repair.status === 'In Progress' ? 'bg-orange-100 text-orange-800' :
                    repair.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {repair.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
