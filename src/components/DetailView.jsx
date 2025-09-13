import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { getDetailFields } from "../detailFields";
import { FaTimes } from "react-icons/fa";

const DetailView = ({ id, fallBack, type, onClose }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const fields = getDetailFields(type);
  const dataToShow = data;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");

        if (!token) {
          setError("No authentication token found");
          return;
        }

        const response = await axios.get(
          `http://192.168.1.107:7176/api/${type}/GetById/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("📦 API Response:", response.data);

        let responseData = null;

        // Handle response based on type
        if (
          type === "Customer" &&
          response.data &&
          response.data.data &&
          response.data.data.customer
        ) {
          responseData = response.data.data.customer;
          console.log("✅ Found customer data in response.data.data.customer");
        } else if (
          type === "Emp" &&
          response.data &&
          response.data.data &&
          response.data.data.employee
        ) {
          responseData = response.data.data.employee;
          console.log("✅ Found employee data in response.data.data.employee");
        } else if (response.data && response.data.employee) {
          responseData = response.data.employee;
          console.log("✅ Found data in response.data.employee");
        } else if (response.data && response.data.data) {
          responseData = response.data.data;
          console.log("✅ Found data in response.data.data");
        } else if (response.data && typeof response.data === "object") {
          responseData = response.data;
          console.log("✅ Found data in response.data");
        } else {
          console.log("❌ No data found in expected locations");
        }

        setData(responseData);
      } catch (err) {
        console.error("Error fetching details:", err);
        setError(t("detailView.fetchError"));
      } finally {
        setLoading(false);
      }
    };

    if (id && type !== "Account") {
      fetchData();
    } else {
      setData(fallBack);
      setLoading(false);
    }
  }, [id, type, t]);

  if (loading) {
    return (
      <div className="p-6 bg-gray-300 min-h-screen">
        <div className="p-8 rounded-md bg-white">
          <h1 className="text-3xl font-bold text-[var(--main-color)] mb-6">
            {t(`detailView.title.${type}`)}
          </h1>
          <div className="flex justify-center items-center h-64">
            <div className="flex space-x-2">
              <div className="w-4 h-4 rounded-xs bg-[var(--main-color)] animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-4 h-4 rounded-xs bg-[var(--main-color)] animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-4 h-4 rounded-xs bg-[var(--main-color)] animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderFieldValue = (field, value) => {
    if (value === null || value === undefined || value === "") {
      return "-";
    }

    switch (field.type) {
      case "boolean":
        return value ? (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
            {t("detailView.yes")}
          </span>
        ) : (
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
            {t("detailView.no")}
          </span>
        );

      case "image":
        return (
          <img
            src={value}
            alt={t(field.title)}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        );

      case "date":
        return (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
            {new Date(value).toLocaleDateString()}
          </span>
        );

      case "textarea":
        return (
          <div className="whitespace-pre-wrap break-words bg-gray-100 p-3 rounded-md">
            {value.toString()}
          </div>
        );

      default:
        return value.toString();
    }
  };

  return (
    <div className="p-6 bg-gray-300 min-h-screen">
      <div className="p-8 rounded-md bg-white">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-[var(--main-color)]">
            {t(`detailView.title.${type}`)}
          </h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {fields.map((field) => {
            const value = dataToShow[field.name];

            return (
              <div
                key={field.name}
                className="bg-gray-100 p-4 rounded-md shadow-sm"
              >
                <div className="font-semibold text-[var(--main-color)] mb-2">
                  {t(field.title)}
                </div>
                <div className="text-gray-800 break-words">
                  {renderFieldValue(field, value)}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end pt-6 border-t border-gray-200 mt-10">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[var(--main-color)] text-white rounded-md hover:bg-[var(--main-color-darker)] transition-colors"
          >
            {t("detailView.close")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
