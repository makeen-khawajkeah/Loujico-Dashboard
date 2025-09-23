import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ToDoCountry = ({ formData, setFormData }) => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");

  const commonProps = {
    className: `px-3 py-2 bg-gray-200 rounded-md transition-colors hover:bg-gray-100 focus:bg-white focus-visible:outline-[var(--main-color)] w-full`,
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-sm font-medium">
        {t("todoCountry.associatedEmployees")}
      </h1>
      <div className="flex justify-between items-center gap-4">
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={setPhone}
          inputProps={{ required: true }}
        />
        <input
          //   value={data.roleOnProject  ""}
          //   onChange={(e) => setData({ ...data, roleOnProject: e.target.value })}
          {...commonProps}
          type="text"
          placeholder={t("todoCountry.rolePlaceholder")}
        />
        <button
          type="button"
          //   onClick={() => {
          //     if (data.employeeId && data.roleOnProject && name) {
          //       const newEmployee = {
          //         employeeId: data.employeeId,
          //         roleOnProject: data.roleOnProject,
          //         name: name, // حفظ الاسم مع البيانات
          //       };

          //       setFormData({
          //         ...formData,
          //         employees: [...(formData.employees  []), newEmployee],
          //       });

          //       setData({});
          //       setName("");
          //     }
          //   }}
          className="px-4 py-2 text-white bg-[var(--main-color)] rounded-md hover:bg-[var(--main-color-darker)] cursor-pointer transition-colors"
        >
          {t("todoCountry.addButton")}
        </button>
      </div>
      {/* <div className="flex flex-col gap-2 mt-2">
        {prepareEmployeesForDisplay().map((emp, index) => {
          return (
            <div
              key={emp.employeeId || index}
              className="flex justify-between items-center bg-gray-200 p-2 rounded-md"
            >
              <span>
                {emp.name} / {emp.roleOnProject}
              </span>
              <FaTrash
                className="cursor-pointer"
                onClick={() => {
                  setFormData({
                    ...formData,
                    employees: formData.employees.filter(
                      (e) => e.employeeId !== emp.employeeId
                    ),
                  });
                }}
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default ToDoCountry;
