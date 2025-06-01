
import { useState } from 'react';
import AdminNavigation from '../components/admin/AdminNavigation';
import ProductManagement from '../components/admin/ProductManagement';
import OrderManagement from '../components/admin/OrderManagement';
import RepairManagement from '../components/admin/RepairManagement';
import DashboardStats from '../components/admin/DashboardStats';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardStats />;
      case 'products':
        return <ProductManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'repairs':
        return <RepairManagement />;
      default:
        return <DashboardStats />;
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'Dashboard Overview';
      case 'products':
        return 'Product Management';
      case 'orders':
        return 'Order Management';
      case 'repairs':
        return 'Repair Management';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <AdminNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                {getPageTitle()}
              </h1>
              <p className="text-gray-600 text-lg">
                {activeTab === 'dashboard' ? 'Monitor your business performance and recent activities' :
                 activeTab === 'products' ? 'Manage your product inventory and catalog' :
                 activeTab === 'orders' ? 'Track and manage customer orders' :
                 'Handle repair requests and service management'}
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="bg-white rounded-lg shadow-md p-4 border border-orange-200">
                <p className="text-sm text-gray-600">Last Updated</p>
                <p className="font-semibold text-gray-900">{new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
