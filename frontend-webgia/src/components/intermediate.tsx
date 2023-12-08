import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "../interfaces/user";

const Intermediate: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userData = urlParams.get("user");
    if (userData) {
      const user: User = JSON.parse(decodeURIComponent(userData));
      localStorage.setItem("user", JSON.stringify(user));
    }
    navigate("/community");
  }, [navigate]);

  return null;
};

export default Intermediate;
