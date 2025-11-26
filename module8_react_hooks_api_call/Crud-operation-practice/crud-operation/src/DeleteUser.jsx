import React, { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5001/users/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "The user has been removed.", "success");
            navigate("/");
          })
          .catch((err) => {
            Swal.fire("Error", err.message, "error");
            navigate("/");
          });
      } else {
        navigate("/");
      }
    });
  }, [id, navigate]);

    return <div></div>;
}
