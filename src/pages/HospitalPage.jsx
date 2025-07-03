import React, { useState } from "react";
import "./HospitalPage.css";

const HospitalPage = () => {
  // Donors from the blood bank system
  const [donors, setDonors] = useState([
    { id: 1, name: "Ali Musa", age: 29, weight: 65, bloodType: "O+", lastDonation: "2025-04-15" },
    { id: 2, name: "Zainab Said", age: 34, weight: 58, bloodType: "A-", lastDonation: "2025-03-27" },
  ]);

  const [editingId, setEditingId] = useState(null); // ID of donor being edited
  const [newDate, setNewDate] = useState("");       // New donation date

  // Start editing a donor's last donation date
  const handleEditDonation = (id) => {
    setEditingId(id);
    const donor = donors.find((d) => d.id === id);
    setNewDate(donor.lastDonation);
  };

  // Save the new date
  const handleSave = () => {
    setDonors((prevDonors) =>
      prevDonors.map((donor) =>
        donor.id === editingId ? { ...donor, lastDonation: newDate } : donor
      )
    );
    setEditingId(null);
  };

  // Cancel the edit
  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="hospital-page">
      <h2>Verified Donors from Blood Bank</h2>
      <table className="donor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Weight (kg)</th>
            <th>Blood Type</th>
            <th>Last Donation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>{donor.age}</td>
              <td>{donor.weight}</td>
              <td>{donor.bloodType}</td>
              <td>
                {editingId === donor.id ? (
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                  />
                ) : (
                  donor.lastDonation
                )}
              </td>
              <td>
                {editingId === donor.id ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEditDonation(donor.id)}>
                    Update Donation
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalPage;
