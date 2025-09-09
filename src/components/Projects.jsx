import DashTable from "./DashTable";
import { projectFields as popUpFields } from "../popUpFields";
import { projectFields } from "../fields";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "تطوير موقع إلكتروني لشركة التقنية",
      description:
        "تصميم وتطوير موقع إلكتروني متكامل لشركة التقنية مع نظام إدارة المحتوى",
      client_id: 1,
      start_date: "2024-06-01",
      end_date: "2024-09-30",
      status: "قيد التنفيذ",
      created_at: "2024-05-15T08:30:00Z",
      updated_at: "2024-08-20T14:25:00Z",
      last_visit: "2024-08-25T11:15:00Z",
      is_deleted: false,
      created_by: 101,
      updated_by: 102,
      files: [
        {
          file_name: "التصميم المبدئي.pdf",
          file_path: "/files/project1/design.pdf",
          file_type: "PDF",
          uploaded_at: "2024-06-10T10:30:00Z",
          uploaded_by: 101,
        },
      ],
    },
    {
      id: 2,
      title: "تطبيق جوال للمطعم",
      description: "تطبيق طلبات طعام للمطعم مع نظام دفع إلكتروني",
      client_id: 3,
      start_date: "2024-07-15",
      end_date: "2024-10-31",
      status: "مكتمل",
      created_at: "2024-07-01T09:15:00Z",
      updated_at: "2024-10-25T16:40:00Z",
      last_visit: "2024-10-30T09:45:00Z",
      is_deleted: false,
      created_by: 102,
      updated_by: 101,
      files: [
        {
          file_name: "متطلبات المشروع.docx",
          file_path: "/files/project2/requirements.docx",
          file_type: "DOCX",
          uploaded_at: "2024-07-05T11:20:00Z",
          uploaded_by: 102,
        },
        {
          file_name: "التصميم النهائي.fig",
          file_path: "/files/project2/design.fig",
          file_type: "FIG",
          uploaded_at: "2024-07-20T14:15:00Z",
          uploaded_by: 101,
        },
      ],
    },
    {
      id: 3,
      title: "متجر إلكتروني للملابس",
      description:
        "إنشاء متجر إلكتروني متكامل لبيع الملابس مع نظام إدارة المخزون",
      client_id: 2,
      start_date: "2024-08-01",
      end_date: "2024-11-15",
      status: "قيد الانتظار",
      created_at: "2024-07-20T10:45:00Z",
      updated_at: "2024-08-10T13:30:00Z",
      last_visit: "2024-08-15T15:20:00Z",
      is_deleted: false,
      created_by: 101,
      updated_by: 101,
      files: [
        {
          file_name: "العقد.pdf",
          file_path: "/files/project3/contract.pdf",
          file_type: "PDF",
          uploaded_at: "2024-07-25T12:10:00Z",
          uploaded_by: 101,
        },
      ],
    },
    {
      id: 4,
      title: "موقع تعريفي لصالون التجميل",
      description: "تصميم موقع تعريفي يعرض خدمات الصالون وأسعارها وصور الأعمال",
      client_id: 4,
      start_date: "2024-09-01",
      end_date: "2024-10-15",
      status: "ملغي",
      created_at: "2024-08-15T11:30:00Z",
      updated_at: "2024-09-05T10:15:00Z",
      last_visit: "2024-09-10T14:40:00Z",
      is_deleted: false,
      created_by: 102,
      updated_by: 102,
      files: [],
    },
    {
      id: 5,
      title: "معرض مشاريع المقاولات",
      description: "إنشاء موقع لعرض مشاريع الشركة السابقة وصور للأعمال المنفذة",
      client_id: 5,
      start_date: "2024-08-20",
      end_date: "2024-12-10",
      status: "قيد التنفيذ",
      created_at: "2024-08-10T14:20:00Z",
      updated_at: "2024-09-01T16:50:00Z",
      last_visit: "2024-09-05T09:30:00Z",
      is_deleted: false,
      created_by: 101,
      updated_by: 102,
      files: [
        {
          file_name: "صور المشاريع.zip",
          file_path: "/files/project5/images.zip",
          file_type: "ZIP",
          uploaded_at: "2024-08-25T15:45:00Z",
          uploaded_by: 102,
        },
        {
          file_name: "قائمة المشاريع.xlsx",
          file_path: "/files/project5/projects.xlsx",
          file_type: "XLSX",
          uploaded_at: "2024-08-28T10:20:00Z",
          uploaded_by: 101,
        },
      ],
    },
  ];

  return (
    <DashTable
      title={t("project.title")}
      search={t("project.search")}
      fields={projectFields}
      data={projects}
      popUpFields={popUpFields}
    />
  );
};

export default Projects;
