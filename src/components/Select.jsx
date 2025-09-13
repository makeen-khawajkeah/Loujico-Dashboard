import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Select = ({ field, formData, setFormData, errors }) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const fetchDta = async () => {
      try {
        setError(null);
        const token = localStorage.getItem("authToken");

        if (!token) {
          setError("Authentication token not found");
          return;
        }

        const response = await axios
          .get(field.api, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.data);

        setData(response.data);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
        setError(t("home.dashboardError"));
      }
    };

    if (field.api) {
      fetchDta();
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    let newValue;
    if (type === "file") {
      newValue = files[0];
    } else if (type === "checkbox") {
      newValue = checked;
    } else if (type === "number") {
      newValue = value === "" ? "" : Number(value);
    } else {
      newValue = value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Validate immediately if field was touched before
    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }

    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    // Mark field as touched on blur
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate field on blur
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const commonProps = {
    name: field.name,
    value: field.type === "checkbox" ? undefined : formData[field.name] || "",
    onChange: handleInputChange,
    onBlur: handleBlur,
    className: `px-3 py-2 bg-gray-200 rounded-md transition-colors hover:bg-gray-100 focus:bg-white focus-visible:outline-[var(--main-color)] max-lg:w-full ${
      errors[field.name]
        ? "border-2 border-red-500"
        : touched[field.name]
        ? "border border-green-500"
        : ""
    }`,
  };

  return (
    <select {...commonProps}>
      <option value="">
        {t("popup.selectPlaceholder", { field: t(field.title) })}
      </option>
      {data.map((e) => {
        return (
          <option key={e.id} value={e.id}>
            {e.title || e.customerName}
          </option>
        );
      })}
      {field.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {t(option.label)}
        </option>
      ))}
    </select>
  );
};

export default Select;
