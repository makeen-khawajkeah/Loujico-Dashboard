import DashTable from "./DashTable";
import { invoiceFields as popUpFields } from "../popUpFields";
import { invoiceFields } from "../fields";
import { useTranslation } from "react-i18next";

const Invoices = () => {
  const { t } = useTranslation();

  const invoices = [
    {
      id: "1",
      client_id: "47",
      project_id: "241",
      amount: 12500,
      issue_date: "2024-08-01",
      due_date: "2024-08-30",
      status: "مدفوعه",
      created_at: "2024-07-28T10:30:00Z",
      updated_at: "2024-08-15T14:20:00Z",
      last_viewed: "2024-08-20T09:15:00Z",
      is_deleted: false,
      created_by: 101,
      updated_by: 101,
    },
    {
      id: "2",
      client_id: "29",
      project_id: "193",
      amount: 8500,
      issue_date: "2024-08-05",
      due_date: "2024-09-04",
      status: "قيد الانتظار",
      created_at: "2024-08-01T11:45:00Z",
      updated_at: "2024-08-10T16:30:00Z",
      last_viewed: "2024-08-25T11:20:00Z",
      is_deleted: false,
      created_by: 102,
      updated_by: 101,
    },
    {
      id: "3",
      client_id: "36",
      project_id: "182",
      amount: 15000,
      issue_date: "2024-08-10",
      due_date: "2024-09-09",
      status: "متأخرة",
      created_at: "2024-08-05T09:15:00Z",
      updated_at: "2024-09-10T10:40:00Z",
      last_viewed: "2024-09-12T14:50:00Z",
      is_deleted: false,
      created_by: 101,
      updated_by: 102,
    },
    {
      id: "4",
      client_id: "18",
      project_id: "35",
      amount: 7000,
      issue_date: "2024-08-15",
      due_date: "2024-09-14",
      status: "مدفوعه",
      created_at: "2024-08-10T14:20:00Z",
      updated_at: "2024-09-05T12:30:00Z",
      last_viewed: "2024-09-08T15:45:00Z",
      is_deleted: false,
      created_by: 102,
      updated_by: 102,
    },
    {
      id: "5",
      client_id: "9",
      project_id: "56",
      amount: 10000,
      issue_date: "2024-08-20",
      due_date: "2024-09-19",
      status: "قيد الانتظار",
      created_at: "2024-08-15T16:40:00Z",
      updated_at: "2024-08-28T13:15:00Z",
      last_viewed: "2024-09-03T10:25:00Z",
      is_deleted: false,
      created_by: 101,
      updated_by: 101,
    },
  ];

  return (
    <DashTable
      title={t("invoice.title")}
      search={t("invoice.search")}
      fields={invoiceFields}
      data={invoices}
      popUpFields={popUpFields}
    />
  );
};

export default Invoices;
