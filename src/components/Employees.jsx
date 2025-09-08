import DashTable from "./DashTable";
import { employeeFields as popUpFields } from "../popUpFields";
import { employeeFields } from "../fields";

const Employees = () => {
  const employees = [
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
      description:
        "مسؤول عن إدارة قسم تكنولوجيا المعلومات وتطوير البنية التحتية",
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

  return (
    <DashTable
      title={"الموظفون"}
      search={"موظف"}
      fields={employeeFields}
      data={employees}
      popUpFields={popUpFields}
    />
  );
};

export default Employees;
