import DashTable from "./DashTable";
import { recordFields as popUpFields } from "../popUpFields";
import { recordFields } from "../fields";

const Records = () => {
  const records = [
    {
      id: 1,
      action_type: "إنشاء",
      action_description: "تم إنشاء عميل جديد",
      target_table: "customers",
      target_id: 15,
      user_id: 101,
      timestamp: "2024-09-07T08:30:15Z",
    },
    {
      id: 2,
      action_type: "تحديث",
      action_description: "تم تحديث معلومات المشروع",
      target_table: "projects",
      target_id: 7,
      user_id: 102,
      timestamp: "2024-09-07T09:45:22Z",
    },
    {
      id: 3,
      action_type: "حذف",
      action_description: "تم حذف سجل الموظف",
      target_table: "employees",
      target_id: 23,
      user_id: 103,
      timestamp: "2024-09-07T10:20:37Z",
    },
    {
      id: 4,
      action_type: "تسجيل دخول",
      action_description: "تم تسجيل الدخول إلى النظام",
      target_table: "users",
      target_id: 101,
      user_id: 101,
      timestamp: "2024-09-07T11:05:49Z",
    },
    {
      id: 5,
      action_type: "إنشاء",
      action_description: "تم إنشاء مشروع جديد",
      target_table: "projects",
      target_id: 8,
      user_id: 102,
      timestamp: "2024-09-07T13:40:18Z",
    },
    {
      id: 6,
      action_type: "تحديث",
      action_description: "تم تحديث حالة المشروع",
      target_table: "projects",
      target_id: 5,
      user_id: 101,
      timestamp: "2024-09-07T14:25:03Z",
    },
    {
      id: 7,
      action_type: "رفع ملف",
      action_description: "تم رفع ملف جديد للمشروع",
      target_table: "project_files",
      target_id: 12,
      user_id: 103,
      timestamp: "2024-09-07T15:10:27Z",
    },
    {
      id: 8,
      action_type: "تسجيل خروج",
      action_description: "تم تسجيل الخروج من النظام",
      target_table: "users",
      target_id: 102,
      user_id: 102,
      timestamp: "2024-09-07T16:45:55Z",
    },
  ];

  return (
    <DashTable
      title={"السجلات"}
      search={"سجل"}
      fields={recordFields}
      data={records}
      popUpFields={popUpFields}
    />
  );
};

export default Records;
