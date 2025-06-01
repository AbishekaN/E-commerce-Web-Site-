import { useState } from 'react';
import { Search, Eye, Phone, Calendar, User } from 'lucide-react';

const RepairManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockRepairs = [
    { 
      id: '#REP-001', 
      customer: 'Alice Brown',
      phone: '+1234567890',
      device: 'iPhone 13 Pro',
      issue: 'Screen Replacement',
      priority: 'High',
      status: 'In Progress',
      estimatedCompletion: '2024-01-16',
      price: 199.99,
      assignedTech: 'John Tech'
    },
    { 
      id: '#REP-002', 
      customer: 'Bob Wilson',
      phone: '+1234567891',
      device: 'Samsung Galaxy S22',
      issue: 'Battery Replacement',
      priority: 'Medium',
      status: 'Completed',
      estimatedCompletion: '2024-01-15',
      price: 89.99,
      assignedTech: 'Sarah Tech'
    },
    { 
      id: '#REP-003', 
      customer: 'Carol Davis',
      phone: '+1234567892',
      device: 'iPhone 12',
      issue: 'Camera Repair',
      priority: 'Low',
      status: 'Pending',
      estimatedCompletion: '2024-01-18',
      price: 149.99,
      assignedTech: 'Mike Tech'
    },
    { 
      id: '#REP-004', 
      customer: 'David Lee',
      phone: '+1234567893',
      device: 'OnePlus 10T',
      issue: 'Charging Port Fix',
      priority: 'Medium',
      status: 'Waiting for Parts',
      estimatedCompletion: '2024-01-20',
      price: 79.99,
      assignedTech: 'John Tech'
    },
  ];

  const filteredRepairs = mockRepairs.filter(repair =>
    repair.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repair.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repair.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repair.issue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Progress':
        return 'bg-orange-100 text-orange-800';
      case 'Waiting for Parts':
        return 'bg-purple-100 text-purple-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Repair Management</h2>
        <div className="text-sm text-gray-600">
          Active Repairs: {mockRepairs.filter(r => r.status !== 'Completed' && r.status !== 'Cancelled').length}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search repairs by ID, customer, device, or issue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
            <option>All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Waiting for Parts</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <select className="px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>

      {/* Repairs Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Repair ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Device & Issue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-orange-100">
              {filteredRepairs.map((repair) => (
                <tr key={repair.id} className="hover:bg-orange-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{repair.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{repair.customer}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {repair.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{repair.device}</div>
                    <div className="text-sm text-gray-500">{repair.issue}</div>
                    <div className="text-xs text-gray-400">Tech: {repair.assignedTech}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(repair.priority)}`}>
                      {repair.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(repair.status)}`}>
                      {repair.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {repair.estimatedCompletion}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${repair.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-orange-600 hover:text-orange-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <select className="text-xs border border-orange-200 rounded px-2 py-1 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                        <option value={repair.status}>{repair.status}</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Waiting for Parts">Waiting for Parts</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RepairManagement;
