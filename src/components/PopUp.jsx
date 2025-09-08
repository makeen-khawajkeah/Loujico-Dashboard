import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const PopUp = ({
  isOpen,
  isAdd,
  title,
  fields,
  initialData = null,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({}); // تتبع الحقول التي تم لمسها

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      // Initialize form with default values
      const initialFormData = {};
      fields.forEach((field) => {
        if (field.type === "checkbox") {
          initialFormData[field.name] =
            field.default !== undefined ? field.default : false;
        } else if (field.type === "number") {
          initialFormData[field.name] = field.default || 0;
        } else {
          initialFormData[field.name] = field.default || "";
        }
      });
      setFormData(initialFormData);
    }
    // إعادة تعيين الحقول الملموسة عند فتح النافذة
    setTouched({});
    setErrors({});
  }, [initialData, fields, isOpen]);

  if (!isOpen) return null;

  // دالة التحقق من صحة الحقل
  const validateField = (name, value) => {
    const field = fields.find(f => f.name === name);
    if (!field) return "";

    let error = "";

    // التحقق إذا كان الحقل مطلوباً
    if (field.required && (!value || value.toString().trim() === "")) {
      error = `${field.title} مطلوب`;
    }
    // التحقق من صيغة البريد الإلكتروني
    else if (field.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "صيغة البريد الإلكتروني غير صحيحة";
      }
    }
    // التحقق من رقم الهاتف
    else if (field.type === "tel" && value) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
      if (!phoneRegex.test(value.replace(/\s/g, ''))) {
        error = "رقم الهاتف غير صحيح";
      }
    }
    // التحقق من الأرقام
    else if (field.type === "number" && value !== undefined && value !== null) {
      const numValue = Number(value);
      if (isNaN(numValue)) {
        error = "يجب إدخال رقم صحيح";
      } else if (field.min !== undefined && numValue < field.min) {
        error = `القيمة يجب أن تكون ${field.min} على الأقل`;
      } else if (field.max !== undefined && numValue > field.max) {
        error = `القيمة يجب أن تكون ${field.max} على الأكثر`;
      }
    }
    // التحقق من التاريخ
    else if ((field.type === "date" || field.type === "datetime") && value) {
      const dateValue = new Date(value);
      if (isNaN(dateValue.getTime())) {
        error = "تاريخ غير صحيح";
      } else if (field.minDate && new Date(value) < new Date(field.minDate)) {
        error = `التاريخ يجب أن يكون بعد ${new Date(field.minDate).toLocaleDateString()}`;
      } else if (field.maxDate && new Date(value) > new Date(field.maxDate)) {
        error = `التاريخ يجب أن يكون قبل ${new Date(field.maxDate).toLocaleDateString()}`;
      }
    }
    // التحقق من طول النص
    else if (field.type === "text" || field.type === "textarea") {
      if (field.minLength && value.length < field.minLength) {
        error = `يجب أن يحتوي على ${field.minLength} أحرف على الأقل`;
      } else if (field.maxLength && value.length > field.maxLength) {
        error = `يجب أن يحتوي على ${field.maxLength} أحرف على الأكثر`;
      }
    }
    // التحقق من الملفات
    else if (field.type === "file" && value) {
      if (field.accept && !field.accept.split(',').some(ext => 
        value.name.toLowerCase().endsWith(ext.trim().toLowerCase())
      )) {
        error = `نوع الملف غير مسموح. المسموح: ${field.accept}`;
      } else if (field.maxSize && value.size > field.maxSize) {
        error = `حجم الملف كبير جداً. الحد الأقصى: ${field.maxSize / 1024 / 1024}MB`;
      }
    }

    return error;
  };

  // التحقق من كل الحقول
  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.type !== "hidden") {
        const error = validateField(field.name, formData[field.name]);
        if (error) {
          newErrors[field.name] = error;
        }
      }
    });
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    let newValue;
    if (type === "file") {
      newValue = files[0];
    } else if (type === "checkbox") {
      newValue = checked;
    } else if (type === "number") {
      newValue = value === "" ? "" : Number(value);
    } else {
      newValue = value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // التحقق فورياً عند التغيير إذا كان الحقل قد تم لمسه مسبقاً
    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }

    //标记 الحقل كملموس
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    //标记 الحقل كملموس عند الخروج منه
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // التحقق من الحقل عند الخروج
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //标记 جميع الحقول كملموسة عند Submit
    const allTouched = {};
    fields.forEach(field => {
      if (field.type !== "hidden") {
        allTouched[field.name] = true;
      }
    });
    setTouched(allTouched);

    // التحقق من كل الحقول
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return; // لا تستمر إذا كان هناك أخطاء
    }

    onSubmit(formData);
    onClose();
  };

  const renderField = (field) => {
    if (field.type === "hidden") return null;

    if (field.readOnly) {
      return (
        <div className="px-3 py-2 bg-gray-300 rounded-md">
          {formData[field.name] || "-"}
        </div>
      );
    }

    const commonProps = {
      name: field.name,
      value: field.type === "checkbox" ? undefined : formData[field.name] || "",
      onChange: handleInputChange,
      onBlur: handleBlur,
      className: `px-3 py-2 bg-gray-200 rounded-md transition-colors hover:bg-gray-100 focus:bg-white focus-visible:outline-[var(--main-color)] max-lg:w-full ${
        errors[field.name] ? "border-2 border-red-500" : touched[field.name] ? "border border-green-500" : ""
      }`,
    };

    switch (field.type) {
      case "select":
        return (
          <select {...commonProps}>
            <option value="">اختر {field.title}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return <textarea {...commonProps} rows={3} />;

      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={formData[field.name] || false}
            onChange={handleInputChange}
            onBlur={handleBlur}
            name={field.name}
            className="h-5 w-5 rounded-md"
          />
        );

      case "date":
      case "datetime":
      case "email":
      case "number":
      case "tel":
        return <input type={field.type} {...commonProps} />;

      case "file":
        return (
          <div>
            <input
              type="file"
              className="cursor-pointer max-sm:w-full"
              onChange={handleInputChange}
              onBlur={handleBlur}
              name={field.name}
              accept={field.accept}
            />
            {formData[field.name]?.name && (
              <p className="text-sm text-gray-600 mt-1">
                الملف المحدد: {formData[field.name].name}
              </p>
            )}
          </div>
        );

      default:
        return <input type="text" {...commonProps} />;
    }
  };

  // Group fields into rows of two, excluding hidden fields
  const visibleFields = fields.filter((field) => field.type !== "hidden");
  const groupedFields = [];
  for (let i = 0; i < visibleFields.length; i += 2) {
    groupedFields.push(visibleFields.slice(i, i + 2));
  }

  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.5)] flex justify-center items-center z-50 p-4 max-sm:p-2 text-[var(--main-color)] text-right">
      <div className="bg-gray-300 p-6 max-sm:p-4 rounded-md w-full max-w-2xl shadow-xl max-h-[90vh] overflow-y-auto duration-300 hover:scale-105">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {isAdd ? "إضافة" : "تعديل"} {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {groupedFields.map((row, rowIndex) => (
            <div key={rowIndex} className="flex max-sm:flex-col gap-4">
              {row.map((field) => (
                <div key={field.name} className="flex flex-col gap-2 flex-1">
                  <label htmlFor={field.name} className="text-sm font-medium">
                    {field.title}
                    {field.required && (
                      <span className="text-red-500 mr-1">*</span>
                    )}
                  </label>
                  {renderField(field)}
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                  )}
                  {!errors[field.name] && touched[field.name] && (
                    <p className="text-green-500 text-xs mt-1">✓</p>
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 cursor-pointer text-[var(--main-color)] bg-gray-300 rounded-md hover:bg-gray-400 transition-colors"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-[var(--main-color)] rounded-md hover:bg-[var(--main-color-darker)] cursor-pointer transition-colors"
            >
              {isAdd ? "إضافة" : "تعديل"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUp;