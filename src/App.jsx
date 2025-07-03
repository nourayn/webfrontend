import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DonorDashboard from "./pages/DonorDashboard";
import HospitalPage from "./pages/HospitalPage";
import BloodBankDashboard from "./pages/BloodBankDashboard";
import DonationReports from "./pages/DonationReports"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard/donor" element={<DonorDashboard />} />
      <Route path="/dashboard/bloodbank" element={<BloodBankDashboard />} />
       <Route path="/dashboard/bloodbank/reports" element={<DonationReports />} />
       <Route path="/dashboard/hospital" element={<HospitalPage />} />

    </Routes>
  );
}

export default App;
