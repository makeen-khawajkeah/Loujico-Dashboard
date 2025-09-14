import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import axios from "axios";

const ToDoEmp = ({ formData, setFormData }) => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [employees, setEmployees] = useState([]);
  const [empToShow, setEmpToShow] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const commonProps = {
    className: `px-3 py-2 bg-gray-200 rounded-md transition-colors hover:bg-gray-100 focus:bg-white focus-visible:outline-[var(--main-color)] w-full`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const token = localStorage.getItem("authToken");

        if (!token) {
          setError("Authentication token not found");
          return;
        }

        const response = await axios
          .get("http://192.168.1.111:7176/api/Emp/GetAllId", {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.data);

        setEmployees(response.data);
      } catch (err) {
        console.error("Failed to fetch employees data:", err);
        setError(t("home.dashboardError"));
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-sm font-medium">
        {t("todoEmp.associatedEmployees")}
      </h1>
      <div className="flex justify-between items-center gap-4">
        <select
          {...commonProps}
          value={data.employeeId + " " + name || ""}
          onChange={(e) => {
            const [employeeId, firstName, lastName] = e.target.value.split(" ");
            setData({
              ...data,
              employeeId,
            });
            setName(`${firstName} ${lastName}`);
          }}
        >
          <option value="">Choose employee</option>
          {employees.map((emp) => {
            return (
              <option
                key={emp.id}
                value={`${emp.id} ${emp.firstName} ${emp.lastName}`}
              >
                {emp.firstName} {emp.lastName}
              </option>
            );
          })}
        </select>
        <input
          value={data.roleOnProject || ""}
          onChange={(e) => setData({ ...data, roleOnProject: e.target.value })}
          {...commonProps}
          type="text"
          placeholder={t("todoEmp.rolePlaceholder")}
        />
        <button
          type="button"
          onClick={() => {
            let c = 0;
            for (let k in data) {
              if (!data[k]) {
                return;
              }

              c++;
            }

            if (c === 2) {
              setFormData({
                ...formData,
                employees: [...(formData.employees || []), data],
              });
              setEmpToShow([...empToShow, { ...data, name }]);
              setData({});
              setName("");
            }
          }}
          className="px-4 py-2 text-white bg-[var(--main-color)] rounded-md hover:bg-[var(--main-color-darker)] cursor-pointer transition-colors"
        >
          {t("todoEmp.addButton")}
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {empToShow.map((emp) => {
          return (
            <div
              key={emp.employeeId}
              className="flex justify-between items-center bg-gray-200 p-2 rounded-md"
            >
              <span>
                {emp.name} / {emp.roleOnProject}
              </span>
              <FaTrash
                className="cursor-pointer"
                onClick={() => {
                  setFormData({
                    ...formData,
                    employees: formData.employees.filter(
                      (e) => e.employeeId !== emp.employeeId
                    ),
                  });
                  setEmpToShow(
                    empToShow.filter((e) => e.employeeId !== emp.employeeId)
                  );
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDoEmp;
