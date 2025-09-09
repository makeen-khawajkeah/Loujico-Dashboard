import DashTable from "./DashTable";
import { userFields } from "../fields";
import { userFields as popUpFields } from "../popUpFields";
import { useTranslation } from "react-i18next";

const Users = () => {
  const { t } = useTranslation();
  const users = [
    {
      id: 1,
      name: "أحمد العلي",
      email: "ahmed.alali@company.com",
      password_hash:
        "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
      role: "مدير",
      created_at: "2024-01-15T08:30:00Z",
      updated_at: "2024-09-01T14:20:00Z",
      last_visit: "2024-09-07T09:15:00Z",
      is_deleted: false,
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 2,
      name: "فاطمة السعد",
      email: "fatima.alsaud@company.com",
      password_hash:
        "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
      role: "موظف",
      created_at: "2024-02-20T10:15:00Z",
      updated_at: "2024-08-25T11:30:00Z",
      last_visit: "2024-09-06T16:20:00Z",
      is_deleted: false,
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 3,
      name: "خالد الناصر",
      email: "khalid.alnasser@company.com",
      password_hash:
        "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
      role: "موظف",
      created_at: "2024-03-10T09:45:00Z",
      updated_at: "2024-08-30T13:15:00Z",
      last_visit: "2024-09-07T08:30:00Z",
      is_deleted: false,
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 4,
      name: "سارة القحطاني",
      email: "sara.alqahtani@company.com",
      password_hash:
        "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
      role: "HR",
      created_at: "2024-04-05T11:20:00Z",
      updated_at: "2024-08-28T15:40:00Z",
      last_visit: "2024-09-06T14:10:00Z",
      is_deleted: false,
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 5,
      name: "محمد الشمري",
      email: "mohammad.alshammari@company.com",
      password_hash:
        "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
      role: "موظف",
      created_at: "2024-05-12T08:50:00Z",
      updated_at: "2024-08-22T12:25:00Z",
      last_visit: "2024-09-05T11:15:00Z",
      is_deleted: false,
      created_by: 1,
      updated_by: 4,
    },
  ];
  return (
    <DashTable
      title={t("user.title")}
      search={t("user.search")}
      fields={userFields}
      data={users}
      popUpFields={popUpFields}
    />
  );
};
export default Users;
