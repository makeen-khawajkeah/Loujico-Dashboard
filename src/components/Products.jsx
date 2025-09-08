import DashTable from "./DashTable";
import { productFields as popUpFields } from "../popUpFields";
import { productFields } from "../fields";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "باقة الأساسية",
      description: "باقة تشمل خدمات أساسية من الصيانة والدعم",
      price: 199.99,
      monthlysubscription: "نعم",
      is_active: true,
      created_at: "2024-01-15T08:30:00Z",
      updated_at: "2024-06-10T11:45:00Z",
    },
    {
      id: 2,
      name: "باقة المتقدمة",
      description: "باقة تشمل خدمات متقدمة مع دعم فني 24/7",
      price: 399.99,
      monthlysubscription: "نعم",
      is_active: true,
      created_at: "2024-01-20T10:15:00Z",
      updated_at: "2024-07-15T14:20:00Z",
    },
    {
      id: 3,
      name: "باقة المؤسسات",
      description: "باقة مخصصة للمؤسسات الكبيرة مع خصائص متقدمة",
      price: 799.99,
      monthlysubscription: "نعم",
      is_active: true,
      created_at: "2024-02-05T09:45:00Z",
      updated_at: "2024-08-20T16:30:00Z",
    },
    {
      id: 4,
      name: "ترخيص دائم - أساسي",
      description: "ترخيص دائم للباقة الأساسية بدون اشتراك شهري",
      price: 1999.99,
      monthlysubscription: "لا",
      is_active: true,
      created_at: "2024-02-15T11:20:00Z",
      updated_at: "2024-05-22T13:10:00Z",
    },
    {
      id: 5,
      name: "ترخيص دائم - متقدم",
      description: "ترخيص دائم للباقة المتقدمة بدون اشتراك شهري",
      price: 3499.99,
      monthlysubscription: "لا",
      is_active: true,
      created_at: "2024-03-01T14:40:00Z",
      updated_at: "2024-06-18T15:25:00Z",
    },
    {
      id: 6,
      name: "باقة التجريبية",
      description: "باقة تجريبية لمدة 14 يوم مع مميزات محدودة",
      price: 0.0,
      monthlysubscription: "لا",
      is_active: false,
      created_at: "2024-03-10T16:50:00Z",
      updated_at: "2024-09-01T10:15:00Z",
    },
  ];

  return (
    <DashTable
      title={"المنتجات"}
      search={"منتج"}
      fields={productFields}
      data={products}
      popUpFields={popUpFields}
    />
  );
};

export default Products;
