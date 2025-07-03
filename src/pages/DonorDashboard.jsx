import React from "react";
import "./DonorDashboard.css"; // We'll write styles in this file

const donors = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
    bloodType: "A+",
    donationDate: "2025-06-10",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    bloodType: "O-",
    donationDate: "2025-06-08",
  },
  {
    id: 3,
    name: "Ali Hassan",
    age: 40,
    bloodType: "B+",
    donationDate: "2025-06-01",
  },
];

function DonorDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Donor Dashboard</h2>
      <p className="dashboard-description">Here is your donation history:</p>

      <table className="donor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Blood Type</th>
            <th>Date of Donation</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>{donor.age}</td>
              <td>{donor.bloodType}</td>
              <td>{donor.donationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonorDashboard;
