export const employeeFields = [
    { name: "id", title: "المعرف", width: 80 },
    { name: "first_name", title: "الاسم الأول", width: 120 },
    { name: "last_name", title: "الاسم الأخير", width: 120 },
    { name: "age", title: "العمر", width: 80 },
    { name: "address", title: "العنوان", width: 200 },
    { name: "phone", title: "رقم الهاتف", width: 140 },
    { name: "email", title: "البريد الإلكتروني", width: 180 },
    { name: "position", title: "المنصب", width: 150 },
    { name: "service_duration", title: "مدة الخدمة", width: 120 },
    { name: "salary", title: "الراتب", width: 120 },
    { name: "description", title: "الوصف", width: 200 },
    { name: "profile_image", title: "الصورة الشخصية", width: 150 },
    { name: "is_present", title: "حالة التواجد", width: 120 },
    { name: "created_at", title: "تاريخ الإنشاء", width: 150 },
    { name: "updated_at", title: "تاريخ التحديث", width: 150 },
    { name: "last_visit", title: "آخر زيارة", width: 150 },
    { name: "is_deleted", title: "حالة الحذف", width: 120 },
    { name: "created_by", title: "تم الإنشاء بواسطة", width: 150 },
    { name: "updated_by", title: "تم التحديث بواسطة", width: 150 },
];

export const clientFields = [
    {
        name: "id",
        title: "المعرف",
        width: 80,
    },
    {
        name: "name",
        title: "اسم العميل",
        width: 150,
    },
    {
        name: "phone",
        title: "رقم الهاتف",
        width: 130,
    },
    {
        name: "email",
        title: "البريد الإلكتروني",
        width: 180,
    },
    {
        name: "address",
        title: "العنوان",
        width: 200,
    },
    {
        name: "company_description",
        title: "وصف الشركة",
        width: 200,
    },
    {
        name: "industry",
        title: "نوع الصناعة",
        width: 150,
    },
    {
        name: "service_provided",
        title: "الخدمة المقدمة",
        width: 150,
    },
    {
        name: "inquiry",
        title: "نص الاستفسار",
        width: 200,
    },
    {
        name: "created_at",
        title: "تاريخ الإنشاء",
        width: 140,
    },
    {
        name: "updated_at",
        title: "تاريخ التحديث",
        width: 140,
    },
    {
        name: "last_visit",
        title: "آخر زيارة",
        width: 140,
    },
    {
        name: "is_deleted",
        title: "حالة السجل",
        width: 120,
    },
    {
        name: "created_by",
        title: "تم الإنشاء بواسطة",
        width: 150,
    },
    {
        name: "updated_by",
        title: "تم التحديث بواسطة",
        width: 150,
    },
];

export const projectFields = [
    {
        name: "id",
        title: "المعرف",
        width: 80
    },
    {
        name: "title",
        title: "عنوان المشروع",
        width: 180
    },
    {
        name: "description",
        title: "وصف المشروع",
        width: 250
    },
    {
        name: "client_id",
        title: "العميل المرتبط",
        width: 150
    },
    {
        name: "start_date",
        title: "تاريخ البدء",
        width: 120
    },
    {
        name: "end_date",
        title: "تاريخ الانتهاء",
        width: 120
    },
    {
        name: "status",
        title: "حالة المشروع",
        width: 130
    },
    {
        name: "created_at",
        title: "تاريخ الإنشاء",
        width: 140
    },
    {
        name: "updated_at",
        title: "تاريخ التحديث",
        width: 140
    },
    {
        name: "last_visit",
        title: "آخر زيارة",
        width: 140
    },
    {
        name: "is_deleted",
        title: "حالة الحذف",
        width: 120
    },
    {
        name: "created_by",
        title: "تم الإنشاء بواسطة",
        width: 150
    },
    {
        name: "updated_by",
        title: "تم التحديث بواسطة",
        width: 150
    },
    {
        name: "file_name",
        title: "اسم الملف",
        width: 180
    },
    {
        name: "file_path",
        title: "مسار الملف",
        width: 200
    },
    {
        name: "file_type",
        title: "نوع الملف",
        width: 120
    },
    {
        name: "uploaded_at",
        title: "تاريخ الرفع",
        width: 140
    },
    {
        name: "uploaded_by",
        title: "تم الرفع بواسطة",
        width: 150
    }
];

export const recordFields = [
    {
        name: "id",
        title: "المعرف",
        width: 80
    },
    {
        name: "action_type",
        title: "نوع الإجراء",
        width: 120
    },
    {
        name: "action_description",
        title: "وصف الإجراء",
        width: 200
    },
    {
        name: "target_table",
        title: "الجدول المستهدف",
        width: 150
    },
    {
        name: "target_id",
        title: "معرف السجل المستهدف",
        width: 150
    },
    {
        name: "user_id",
        title: "معرف المستخدم",
        width: 120
    },
    {
        name: "timestamp",
        title: "تاريخ ووقت الإجراء",
        width: 160
    }
];

export const invoiceFields = [
    {
        name: "id",
        title: "رقم الفاتورة",
        width: 100
    },
    {
        name: "client_id",
        title: "معرف العميل",
        width: 150
    },
    {
        name: "project_id",
        title: "معرف المشروع",
        width: 180
    },
    {
        name: "amount",
        title: "المبلغ",
        width: 120
    },
    {
        name: "issue_date",
        title: "تاريخ الإصدار",
        width: 120
    },
    {
        name: "due_date",
        title: "تاريخ الاستحقاق",
        width: 120
    },
    {
        name: "status",
        title: "الحالة",
        width: 120
    },
    {
        name: "created_at",
        title: "تاريخ الإنشاء",
        width: 120
    },
    {
        name: "updated_at",
        title: "تاريخ التحديث",
        width: 120
    },
    {
        name: "last_viewed",
        title: "آخر زيارة",
        width: 120
    },
    {
        name: "is_deleted",
        title: "حالة الحذف",
        width: 100
    },
    {
        name: "created_by",
        title: "تم الإنشاء بواسطة",
        width: 150
    },
    {
        name: "updated_by",
        title: "تم التحديث بواسطة",
        width: 150
    }
];

export const relationFields = [
    {
        name: "id",
        title: "المعرف",
        width: 80
    },
    {
        name: "project_id",
        title: "معرف المشروع",
        width: 120
    },
    {
        name: "employee_id",
        title: "معرف الموظف",
        width: 120
    },
    {
        name: "role_on_project",
        title: "الدور في المشروع",
        width: 150
    },
    {
        name: "joined_at",
        title: "تاريخ الانضمام",
        width: 120
    }
];

export const userFields = [
    {
        name: "id",
        title: "المعرف",
        width: 80
    },
    {
        name: "name",
        title: "الاسم",
        width: 150
    },
    {
        name: "email",
        title: "البريد الإلكتروني",
        width: 180
    },
    {
        name: "role",
        title: "الدور",
        width: 120
    },
    {
        name: "created_at",
        title: "تاريخ الإنشاء",
        width: 140
    },
    {
        name: "updated_at",
        title: "تاريخ التحديث",
        width: 140
    },
    {
        name: "last_visit",
        title: "آخر زيارة",
        width: 140
    },
    {
        name: "is_deleted",
        title: "حالة الحذف",
        width: 120
    },
    {
        name: "created_by",
        title: "تم الإنشاء بواسطة",
        width: 150
    },
    {
        name: "updated_by",
        title: "تم التحديث بواسطة",
        width: 150
    }
];
export const productFields = [
    {
        name: "id",
        title: "المعرف",
        width: 80
    },
    {
        name: "name",
        title: "اسم المنتج",
        width: 150
    },
    {
        name: "description",
        title: "الوصف",
        width: 200
    },
    {
        name: "price",
        title: "السعر",
        width: 120
    },
    {
        name: "monthlysubscription",
        title: "الاشتراك الشهري",
        width: 150
    },
    {
        name: "is_active",
        title: "الحالة",
        width: 100
    },
    {
        name: "created_at",
        title: "تاريخ الإنشاء",
        width: 140
    },
    {
        name: "updated_at",
        title: "تاريخ التحديث",
        width: 140
    }
];