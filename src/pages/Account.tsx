import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AccountSidebar } from "@/components/account/AccountSidebar";
import { ProfileSettings } from "@/components/account/ProfileSettings";
import { AddressBook } from "@/components/account/AddressBook";
import { PaymentMethods } from "@/components/account/PaymentMethods";
import { OrderHistory } from "@/components/account/OrderHistory";
import { useState } from "react";

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'addresses':
        return <AddressBook />;
      case 'payments':
        return <PaymentMethods />;
      case 'orders':
        return <OrderHistory />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container px-4 py-8 mt-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Account</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AccountSidebar activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;