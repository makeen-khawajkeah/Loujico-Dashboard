import DashTable from "./DashTable";
import { clientFields as popUpFields } from "../popUpFields";
import { clientFields } from "../fields";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();
  const clients = [
    {
      id: 1,
      name: "أحمد السعدي",
      phone: "+966512345678",
      email: "ahmed.alsadi@example.com",
      address: "الرياض، حي الصحافة، شارع الملك فهد",
      company_description: "شركة متخصصة في التقنية والحلول البرمجية",
      industry: "التقنية",
      service_provided: "تطوير مواقع إلكترونية",
      inquiry: "أرغب في تطوير موقع إلكتروني لشركتي",
      created_at: "2024-01-15T08:30:00Z",
      updated_at: "2024-09-01T14:20:00Z",
      last_visit: "2024-09-05T10:45:00Z",
      is_deleted: false,
      created_by: 101,
      updated_by: 101,
    },
    {
      id: 2,
      name: "فاطمة العتيبي",
      phone: "+966511234567",
      email: "fatima.alotaibi@example.com",
      address: "جدة، حي الصفا، شارع الأمير محمد",
      company_description: "متجر إلكتروني للملابس والأزياء",
      industry: "التجارة الإلكترونية",
      service_provided: "تصميم متجر إلكتروني",
      inquiry: "أحتاج إلى متجر إلكتروني لعرض منتجاتي",
      created_at: "2024-02-20T10:15:00Z",
      updated_at: "2024-08-25T11:30:00Z",
      last_visit: "2024-09-03T16:20:00Z",
      is_deleted: false,
      created_by: 102,
      updated_by: 101,
    },
    {
      id: 3,
      name: "خالد الربيعة",
      phone: "+966544567890",
      email: "khalid.alrabiah@example.com",
      address: "الدمام، حي النخيل، شارع الملك عبدالله",
      company_description: "مطعم يقدم وجبات سريعة ومشروبات",
      industry: "المطاعم",
      service_provided: "تطبيق طلبات عبر الهاتف",
      inquiry: "أرغب في تطبيق لاستقبال طلبات الزبائن",
      created_at: "2024-03-10T09:45:00Z",
      updated_at: "2024-08-30T13:15:00Z",
      last_visit: "2024-09-06T09:30:00Z",
      is_deleted: false,
      created_by: 101,
      updated_by: 102,
    },
    {
      id: 4,
      name: "سارة الغامدي",
      phone: "+966587654321",
      email: "sara.alghamdi@example.com",
      address: "الرياض، حي العليا، شارع العروبة",
      company_description: "صالون تجميل وخدمات التجميل النسائية",
      industry: "التجميل",
      service_provided: "موقع تعريفي للصالون",
      inquiry: "أحتاج موقع يعرض خدمات الصالون وأسعارها",
      created_at: "2024-04-05T11:20:00Z",
      updated_at: "2024-08-28T15:40:00Z",
      last_visit: "2024-09-04T14:10:00Z",
      is_deleted: false,
      created_by: 102,
      updated_by: 102,
    },
    {
      id: 5,
      name: "محمد الشمري",
      phone: "+966566543210",
      email: "mohammad.alshammari@example.com",
      address: "الخبر، حي الجسر، شارع البحيرة",
      company_description: "شركة مقاولات وتشييد المباني",
      industry: "المقاولات",
      service_provided: "تصميم موقع لعرض المشاريع",
      inquiry: "أرغب في موقع يعرض مشاريع الشركة السابقة",
      created_at: "2024-05-12T08:50:00Z",
      updated_at: "2024-08-22T12:25:00Z",
      last_visit: "2024-09-02T11:15:00Z",
      is_deleted: false,
      created_by: 101,
      updated_by: 101,
    },
  ];

  return (
    <DashTable
      title={t("customer.title")}
      search={t("customer.search")}
      fields={clientFields}
      data={clients}
      popUpFields={popUpFields}
    />
  );
};

export default Clients;
