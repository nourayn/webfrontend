import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BloodBankDashboard.css";

const BloodBankDashboard = () => {
  const [bloodStock, setBloodStock] = useState([]);

  useEffect(() => {
    fetchBloodStock();
  }, []);

  const fetchBloodStock = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/bloodstock");
      setBloodStock(response.data);
    } catch (error) {
      console.error("Error fetching blood stock:", error);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2 className="sidebar-title">Blood Bank</h2>
        <ul className="sidebar-menu">
          <li>
            <Link to="/dashboard/bloodbank/reports" className="sidebar-link">
              Donation Reports
            </Link>
          </li>
          <li>
            <Link to="/dashboard/bloodbank/hospital-request" className="sidebar-link">
              Hospital Requests
            </Link>
          </li>
          <li>
            <Link to="/dashboard/bloodbank/blood-stock" className="sidebar-link">
              Blood Stock
            </Link>
          </li>
          <li>
            <Link to="/dashboard/bloodbank/settings" className="sidebar-link">
              Settings
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Section */}
      <main className="dashboard-main">
        <h1>Welcome to the Blood Bank Dashboard</h1>
        <p>This is your control center for managing donations, hospital requests, and blood inventory.</p>

        {/* Blood Stock Table */}
        <div className="blood-stock-section mt-6">
          <h2 className="text-xl font-bold mb-2">🩸 Blood Stock</h2>
          <table className="w-full border border-gray-300">
            <thead className="bg-red-100 text-red-800 font-semibold">
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Blood Type</th>
                <th className="border px-4 py-2">Units Available</th>
              </tr>
            </thead>
            <tbody>
              {bloodStock.map((stock, index) => (
                <tr key={stock.id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{stock.bloodType}</td>
                  <td className="border px-4 py-2">{stock.unitsAvailable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default BloodBankDashboard;
