import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import axios from "axios";

const ToDoEmp = (formData, setFormData) => {
  const { t } = useTranslation();
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState({});
  const [employees, setEmployees] = useState([]);
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
          .get("http://192.168.43.85:7176/api/Emp/GetAllId", {
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
          value={data.employeeId + " " + data.name || ""}
          onChange={(e) => {
            const [id, firstName, lastName] = e.target.value.split(" ");
            setData({ ...data, id, name: `${firstName} ${lastName}` });
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

            if (c === 3) {
              setTodos([...todos, data]);
              setData({});
            }
          }}
          className="px-4 py-2 text-white bg-[var(--main-color)] rounded-md hover:bg-[var(--main-color-darker)] cursor-pointer transition-colors"
        >
          {t("todoEmp.addButton")}
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-gray-200 p-2 rounded-md"
            >
              <span>
                {todo.name} / {todo.roleOnProject}
              </span>
              <FaTrash
                className="cursor-pointer"
                onClick={() => {
                  setTodos(todos.filter((e) => e.id !== todo.id));
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
