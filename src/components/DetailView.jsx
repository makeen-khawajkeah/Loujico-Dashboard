import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { getDetailFields } from "../detailFields";
import { FaTimes } from "react-icons/fa";
import History from "./History";

const DetailView = ({ id, fallBack, name, type, onClose }) => {
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

        const response = await axios
          .get(`http://loujico.somee.com/api/${type}/GetById/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.data);

        setData({ files: response.data.files, ...response.data[name] });
      } catch (err) {
        console.error("Error fetching details:", err);
        setError(t("detailView.fetchError"));
      } finally {
        setLoading(false);
      }
    };

    if (id && type !== "Account" && type !== "Logs") {
      fetchData();
    } else {
      setData(fallBack);
      setLoading(false);
    }
  }, [id, type]);

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

    if (field.name === "employees") {
      return value.map((emp) => {
        return (
          <div key={emp.employeeId}>
            {emp.firstName} {emp.lastName} /{" "}
            {emp.roleOnProject || emp.roleOnProduct}
          </div>
        );
      });
    } else if (field.name === "files") {
      return value.map((file) => (
        <a
          key={file.entityId}
          href={`http://loujico.somee.com/upload/${
            type === "Emp" ? "Employee" : type
          }s/${file.fileName}`}
          target="_blank"
        >
          {file.fileName}
        </a>
      ));
    }

    return value.toString();
  };

  return (
    <>
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

          {["Account", "Logs"].includes(type) ? null : (
            <History id={id} url={type} />
          )}

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
    </>
  );
};

export default DetailView;
