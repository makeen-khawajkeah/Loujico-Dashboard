import { useEffect, useState } from "react";
import axios from "axios";
import DashTable from "./DashTable";
import { employeeFields as popUpFields } from "../popUpFields";
import { employeeFields } from "../fields";
import { useTranslation } from "react-i18next";

// Sample data to use as fallback
const fallbackEmployees = [
  {
    id: 1,
    first_name: "محمد",
    last_name: "الخالد",
    age: 35,
    address: "الرياض، حي العليا، شارع الملك فهد",
    phone: "+966512345678",
    email: "m.alkhaled@company.com",
    position: "مدير تقنية المعلومات",
    service_duration: 7,
    salary: 25000,
    description: "مسؤول عن إدارة قسم تكنولوجيا المعلومات وتطوير البنية التحتية",
    profile_image: "/images/employees/mohammed_alkhaled.jpg",
    is_present: true,
    created_at: "2023-05-10",
    updated_at: "2024-01-15",
    last_visit: "2024-09-05",
    is_deleted: false,
    created_by: 101,
    updated_by: 101,
  },
  {
    id: 2,
    first_name: "سارة",
    last_name: "الغنيم",
    age: 29,
    address: "جدة، حي الصفا، شارع الأمير سلطان",
    phone: "+966511234567",
    email: "s.alghaniem@company.com",
    position: "مصممة جرافيك",
    service_duration: 4,
    salary: 12000,
    description: "تصميم الهوية البصرية والمواد التسويقية للشركة",
    profile_image: "/images/employees/sara_alghaniem.jpg",
    is_present: false,
    created_at: "2020-08-15",
    updated_at: "2024-08-20",
    last_visit: "2024-09-04",
    is_deleted: false,
    created_by: 101,
    updated_by: 102,
  },
  {
    id: 3,
    first_name: "خالد",
    last_name: "السعدي",
    age: 42,
    address: "الدمام، حي النخيل، شارع الملك عبدالله",
    phone: "+966544567890",
    email: "k.alsadi@company.com",
    position: "محاسب رئيسي",
    service_duration: 12,
    salary: 18000,
    description: "إدارة الحسابات المالية والمراجعة الداخلية",
    profile_image: "/images/employees/khaled_alsadi.jpg",
    is_present: true,
    created_at: "2012-03-22",
    updated_at: "2024-07-10",
    last_visit: "2024-09-06",
    is_deleted: false,
    created_by: 100,
    updated_by: 102,
  },
];

const Employees = () => {
  const { t } = useTranslation();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get token from where you store it (localStorage, context, etc.)
        const token = localStorage.getItem("authToken"); // Or from your auth context

        if (!token) {
          throw new Error(t("employee.errors.noToken"));
        }

        const response = await axios
          .get("http://192.168.1.10:7176/api/Emp/GetAllEmployees/1", {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.data);

        setEmployees(response.data);
        setUsingFallback(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(t("employee.errors.connectionFailed"));
        setEmployees(fallbackEmployees);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]);

  if (loading) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          {t("employee.loading")}
        </div>
        <div
          style={{ width: "100%", height: "4px", backgroundColor: "#f0f0f0" }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              backgroundColor: "#007acc",
              animation: "loading 1.5s infinite ease-in-out",
            }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div
          style={{
            padding: "1rem",
            margin: "1rem",
            backgroundColor: "#fff3cd",
            border: "1px solid #ffeaa7",
            borderRadius: "4px",
            color: "#856404",
            textAlign: "center",
            direction: "rtl",
          }}
        >
          {error}
        </div>
      )}

      {usingFallback && (
        <div
          style={{
            padding: "0.5rem",
            margin: "0 1rem 1rem 1rem",
            backgroundColor: "#d4edda",
            border: "1px solid #c3e6cb",
            borderRadius: "4px",
            color: "#155724",
            textAlign: "center",
            direction: "rtl",
          }}
        >
          {t("employee.usingDemoData")}
        </div>
      )}

      <DashTable
        title={t("employee.title")}
        search={t("employee.search")}
        fields={employeeFields}
        data={employees}
        popUpFields={popUpFields}
      />
    </div>
  );
};

export default Employees;
