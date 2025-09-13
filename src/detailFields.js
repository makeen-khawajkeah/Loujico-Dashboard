// src/detailFields.js

// حقول تفاصيل الموظف - بناءً على الـ API Response
export const employeeDetailFields = [
  { name: "id", title: "fields.employee.id", type: "text" },
  { name: "firstName", title: "fields.employee.firstName", type: "text" },
  { name: "lastName", title: "fields.employee.lastName", type: "text" },
  { name: "phone", title: "fields.employee.phone", type: "tel" },
  { name: "email", title: "fields.employee.email", type: "email" },
  { name: "employeesAddress", title: "fields.employee.address", type: "textarea" },
  { name: "position", title: "fields.employee.position", type: "text" },
  { name: "age", title: "fields.employee.age", type: "number" },
  { name: "profileImage", title: "fields.employee.profileImage", type: "image" },
  { name: "isPresent", title: "fields.employee.isPresent", type: "boolean" },
  { name: "employeesDescription", title: "fields.employee.description", type: "textarea" },
  { name: "serviceDuration", title: "fields.employee.serviceDuration", type: "number" },
  { name: "salary", title: "fields.employee.salary", type: "number" },
  { name: "createdAt", title: "fields.common.createdAt", type: "date" },
  { name: "updatedAt", title: "fields.common.updatedAt", type: "date" }
];

// حقول تفاصيل العملاء - بناءً على الـ API Response الجديد
export const clientDetailFields = [
  { name: "id", title: "fields.client.id", type: "text" },
  { name: "customerName", title: "fields.client.name", type: "text" },
  { name: "phone", title: "fields.client.phone", type: "tel" },
  { name: "email", title: "fields.client.email", type: "email" },
  { name: "customerAddress", title: "fields.client.address", type: "textarea" },
  { name: "companyDescription", title: "fields.client.companyDescription", type: "textarea" },
  { name: "industry", title: "fields.client.industry", type: "text" },
  { name: "serviceProvided", title: "fields.client.serviceProvided", type: "text" },
  { name: "inquiry", title: "fields.client.inquiry", type: "text" },
  { name: "workDate", title: "fields.client.workDate", type: "date" },
  { name: "workDuration", title: "fields.client.workDuration", type: "text" },
  { name: "createdAt", title: "fields.common.createdAt", type: "date" },
  { name: "updatedAt", title: "fields.common.updatedAt", type: "date" },
  { name: "lastVisit", title: "fields.common.lastVisit", type: "date" },
  { name: "isDeleted", title: "fields.common.isDeleted", type: "boolean" }
];
export const projectDetailFields = [
  { name: "id", title: "fields.project.id", type: "text" },
  { name: "title", title: "fields.project.title", type: "text" },
  { name: "startDate", title: "fields.project.startDate", type: "date" },
  { name: "endDate", title: "fields.project.endDate", type: "date" },
  { name: "progress", title: "fields.project.progress", type: "number" },
  { name: "price", title: "fields.project.price", type: "number" },
  { name: "status", title: "fields.project.status", type: "text" }
];
export const productDetailFields = [
  { name: "id", title: "fields.product.id", type: "text" },
  { name: "productName", title: "fields.product.name", type: "text" },
  { name: "productDescription", title: "fields.product.description", type: "textarea" },
  { name: "price", title: "fields.product.price", type: "number" },
  { name: "billingCycle", title: "fields.product.billingCycle", type: "text" },
  { name: "isActive", title: "fields.product.isActive", type: "boolean" },
  { name: "isDeleted", title: "fields.common.isDeleted", type: "boolean" },
  { name: "createdAt", title: "fields.common.createdAt", type: "date" },
  { name: "updatedAt", title: "fields.common.updatedAt", type: "date" },
  { name: "createdBy", title: "fields.common.createdBy", type: "text" },
  { name: "updatedBy", title: "fields.common.updatedBy", type: "text" }
];
export const invoiceDetailFields = [
  { name: "id", title: "fields.invoice.id", type: "text" },
  { name: "customerId", title: "fields.invoice.clientId", type: "text" },
  { name: "projectId", title: "fields.invoice.projectId", type: "text" },
  { name: "amount", title: "fields.invoice.amount", type: "number" },
  { name: "invoiceStatus", title: "fields.invoice.status", type: "text" },
  { name: "isDeleted", title: "fields.common.isDeleted", type: "boolean" },
  { name: "createdAt", title: "fields.common.createdAt", type: "date" },
  { name: "updatedAt", title: "fields.common.updatedAt", type: "date" },
  { name: "lastVisit", title: "fields.invoice.lastViewed", type: "date" },
  { name: "createdBy", title: "fields.common.createdBy", type: "text" },
  { name: "updatedBy", title: "fields.common.updatedBy", type: "text" }
];
// دالة مساعدة للحصول على الحقول المناسبة
export const getDetailFields = (type) => {
  switch (type) {
    case "Emp":
      return employeeDetailFields;
    case "Customer":
      return clientDetailFields;
    case "Project":
      return projectDetailFields;
    case "Invoices":
      return invoiceDetailFields;
    case "Product":
      return productDetailFields;
    default:
      return [];
  }
};