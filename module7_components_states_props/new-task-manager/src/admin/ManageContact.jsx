import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import Swal from "sweetalert2";

export default function ManageContact() {
  const [contacts, setContacts] = useState([]);

  // Fetch contact messages
  useEffect(() => {
    axios
      .get("http://localhost:8000/contact-us")
      .then((res) => setContacts(res.data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  // Delete a contact
  const deleteContact = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This contact message will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:8000/contact-us/${id}`);
          setContacts(contacts.filter((contact) => contact.id !== id));
          Swal.fire("Deleted!", "The contact message has been deleted.", "success");
        } catch (err) {
          console.error(err);
          Swal.fire("Error!", "Failed to delete the message.", "error");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex pt-24">
        <Sidebar />

        <main className="flex-1 p-8 ml-64">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Messages</h1>

          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg">
              <thead className="bg-gray-100 rounded-t-lg">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium uppercase text-sm">#</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium uppercase text-sm">Name</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium uppercase text-sm">Email</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium uppercase text-sm">Phone</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium uppercase text-sm">Message</th>
                  <th className="py-3 px-4 text-center text-gray-600 font-medium uppercase text-sm">Actions</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {contacts.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-4 px-4 text-center text-gray-400">
                      No Contact Messages Found
                    </td>
                  </tr>
                ) : (
                  contacts.map((contact, index) => (
                    <tr key={contact._id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4 font-medium">{contact.name}</td>
                      <td className="py-3 px-4">{contact.email}</td>
                      <td className="py-3 px-4">{contact.phone || "-"}</td>
                      <td className="py-3 px-4">{contact.message}</td>
                      <td className="py-3 px-4 text-center">
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200 text-sm"
                          onClick={() => deleteContact(contact.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
