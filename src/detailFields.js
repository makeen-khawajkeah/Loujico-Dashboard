// src/detailFields.js

// حقول تفاصيل الموظف - بناءً على الـ API Response
export const employeeDetailFields = [
  { name: "id", title: "fields.employee.id" },
  { name: "firstName", title: "fields.employee.firstName" },
  { name: "lastName", title: "fields.employee.lastName" },
  { name: "phone", title: "fields.employee.phone" },
  { name: "email", title: "fields.employee.email" },
  {
    name: "employeesAddress",
    title: "fields.employee.address",
  },
  { name: "position", title: "fields.employee.position" },
  { name: "age", title: "fields.employee.age" },
  {
    name: "profileImage",
    title: "fields.employee.profileImage",
  },
  { name: "isPresent", title: "fields.employee.isPresent" },
  {
    name: "employeesDescription",
    title: "fields.employee.description",
  },
  {
    name: "serviceDuration",
    title: "fields.employee.serviceDuration",
  },
  { name: "salary", title: "fields.employee.salary" },
  { name: "files", title: "fields.common.files" },
  { name: "createdAt", title: "fields.common.createdAt" },
  { name: "updatedAt", title: "fields.common.updatedAt" },
];

// حقول تفاصيل العملاء - بناءً على الـ API Response الجديد
export const clientDetailFields = [
  { name: "id", title: "fields.client.id" },
  { name: "customerName", title: "fields.client.name" },
  { name: "phone", title: "fields.client.phone" },
  { name: "email", title: "fields.client.email" },
  { name: "customerAddress", title: "fields.client.address" },
  {
    name: "companyDescription",
    title: "fields.client.companyDescription",
  },
  { name: "industry", title: "fields.client.industry" },
  {
    name: "serviceProvided",
    title: "fields.client.serviceProvided",
  },
  { name: "inquiry", title: "fields.client.inquiry" },
  { name: "workDate", title: "fields.client.workDate" },
  { name: "workDuration", title: "fields.client.workDuration" },
  { name: "files", title: "fields.common.files" },
  { name: "createdAt", title: "fields.common.createdAt" },
  { name: "updatedAt", title: "fields.common.updatedAt" },
  { name: "lastVisit", title: "fields.common.lastVisit" },
  { name: "isDeleted", title: "fields.common.isDeleted" },
];
export const projectDetailFields = [
  { name: "id", title: "fields.project.id" },
  { name: "title", title: "fields.project.title" },
  { name: "startDate", title: "fields.project.startDate" },
  { name: "endDate", title: "fields.project.endDate" },
  { name: "progress", title: "fields.project.progress" },
  { name: "price", title: "fields.project.price" },
  { name: "status", title: "fields.project.status" },
  { name: "customerId", title: "fields.project.customerId" },
  { name: "employees", title: "fields.common.employees" },
  { name: "files", title: "fields.common.files" },
];
export const productDetailFields = [
  { name: "id", title: "fields.product.id" },
  { name: "productName", title: "fields.product.name" },
  {
    name: "productDescription",
    title: "fields.product.description",
  },
  { name: "price", title: "fields.product.price" },
  { name: "billingCycle", title: "fields.product.billingCycle" },
  { name: "isActive", title: "fields.product.isActive" },
  { name: "employees", title: "fields.common.employees" },
  { name: "files", title: "fields.common.files" },
  { name: "isDeleted", title: "fields.common.isDeleted" },
  { name: "createdAt", title: "fields.common.createdAt" },
  { name: "updatedAt", title: "fields.common.updatedAt" },
  { name: "createdBy", title: "fields.common.createdBy" },
  { name: "updatedBy", title: "fields.common.updatedBy" },
];
export const invoiceDetailFields = [
  { name: "id", title: "fields.invoice.id" },
  {
    name: "title", title: "fields.invoice.title",
  },
  { name: "customerId", title: "fields.invoice.clientId" },
  { name: "projectId", title: "fields.invoice.projectId" },
  { name: "amount", title: "fields.invoice.amount" },
  { name: "invoiceStatus", title: "fields.invoice.status" },
  { name: "files", title: "fields.common.files" },
  { name: "isDeleted", title: "fields.common.isDeleted" },
  { name: "createdAt", title: "fields.common.createdAt" },
  { name: "updatedAt", title: "fields.common.updatedAt" },
  { name: "lastVisit", title: "fields.invoice.lastViewed" },
  { name: "createdBy", title: "fields.common.createdBy" },
  { name: "updatedBy", title: "fields.common.updatedBy" },
];
export const logFields = [
  {
    name: "id",
    title: "fields.log.id",
  },
  {
    name: "actionType",
    title: "fields.log.actionType",
  },
  {
    name: "action",
    title: "fields.log.actionDescription",
  },
];
export const userFields = [
  { name: "userid", title: "fields.user.id" },
  { name: "username", title: "fields.user.name" },
  {
    name: "email",
    title: "fields.user.email",
  },
  {
    name: "roles",
    title: "fields.user.role",
  },
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
    case "Logs":
      return logFields;
    case "Account":
      return userFields;
    default:
      return [];
  }
};
