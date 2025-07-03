import React, { useState } from "react";
import "./DonationReports.css";

const DonationReports = () => {
  const [donations, setDonations] = useState([
    {
      id: 1,
      name: "Fatma Said",
      age: 25,
      weight: 58,
      bloodType: "O+",
    },
    {
      id: 2,
      name: "Ali Juma",
      age: 32,
      weight: 67,
      bloodType: "A-",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    age: "",
    weight: "",
    bloodType: "",
  });

  const openAddForm = () => {
    setIsEditing(false);
    setFormData({ id: null, name: "", age: "", weight: "", bloodType: "" });
    setShowForm(true);
  };

  const openEditForm = (donation) => {
    setIsEditing(true);
    setFormData(donation);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
      setDonations(donations.filter((d) => d.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setDonations(
        donations.map((d) =>
          d.id === formData.id ? { ...formData } : d
        )
      );
    } else {
      setDonations([
        ...donations,
        { ...formData, id: Date.now() },
      ]);
    }
    setShowForm(false);
  };

  return (
    <div className="donation-page">
      <h2>Donation Reports</h2>
      <button className="add-btn" onClick={openAddForm}>
        + Add Donation
      </button>
      <table className="donation-table">
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Age</th>
            <th>Weight (kg)</th>
            <th>Blood Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td>{donation.name}</td>
              <td>{donation.age}</td>
              <td>{donation.weight}</td>
              <td>{donation.bloodType}</td>
              <td>
                <button className="edit" onClick={() => openEditForm(donation)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(donation.id)}>Delete</button>
                <button className="view" onClick={() => alert(JSON.stringify(donation, null, 2))}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="modal">
          <form className="donation-form" onSubmit={handleSubmit}>
            <h3>{isEditing ? "Edit Donation" : "Add Donation"}</h3>
            <input
              type="text"
              placeholder="Donor Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              required
            />
            <select
              value={formData.bloodType}
              onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
              required
            >
              <option value="">Select Blood Type</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <div className="form-actions">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DonationReports;
