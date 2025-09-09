import { useState } from "react";
import { FaAngleRight, FaAngleLeft, FaTrash } from "react-icons/fa";
import PopUp from "./PopUp";
import axios from "axios";
import { url } from "zod";
import { useTranslation } from "react-i18next";

const DashTable = ({ title, search, fields, data, popUpFields = [] }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [numberToShow, setNumberToShow] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastNumber, setLastNumber] = useState(1);
  const [checkedFields, setCheckedFields] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [initialData, setInitialData] = useState([]);

  const getData = async (id) => {
    const data = axios.get(url);
  };

  const handleAdd = async (body) => {
    try {
      const response = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error(t("dashTable.errors.addFailed", { item: search }), error);
      throw error;
    }
  };

  const handleUpdate = async (body) => {
    try {
      const response = await axios.patch(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error(
        t("dashTable.errors.updateFailed", { item: search }),
        error
      );
      throw error;
    }
  };

  return (
    <div className="p-6 bg-gray-300 max-lg:text-center h-[100%]">
      <div className="p-8 rounded-md bg-white">
        <h1 className="text-3xl font-bold text-[var(--main-color)]">{title}</h1>
        <div className="flex justify-between max-lg:justify-center items-center flex-wrap gap-3 mt-8 mb-5">
          <input
            type="text"
            placeholder={`${t("dashTable.searchPlaceholder")} ${search}`}
            className="px-5 py-2 bg-gray-300 rounded-md w-96 transition-colors hover:bg-gray-200 focus-visible:outline-black"
          />
          <div className="flex flex-wrap gap-3 max-lg:justify-center">
            {popUpFields.length ? (
              <>
                <button
                  onClick={() => {
                    if (!isAdd) {
                      setIsAdd(true);
                    }

                    setOpenPopUp(true);
                  }}
                  className="px-2 w-24 sm:px-5 sm:w-32 py-2 cursor-pointer rounded-md transition-colors hover:from-[var(--main-color-lighter)]  hover:to-[var(--main-color)] bg-gradient-to-br from-[var(--main-color)] to-[var(--main-color-lighter)] text-white font-bold duration-300"
                >
                  {t("dashTable.buttons.add")}
                </button>
                <button
                  onClick={() => {
                    if (checkedFields.length === 1) {
                      if (isAdd) {
                        setIsAdd(false);
                      }

                      getData(checkedFields[0]);
                      setOpenPopUp(true);
                    }
                  }}
                  className={`px-2 w-24 sm:px-5 sm:w-32 py-2 rounded-md transition-colors hover:from-[var(--sub-color-lighter)]  hover:to-[var(--sub-color)] bg-gradient-to-br from-[var(--sub-color)] to-[var(--sub-color-lighter)] text-white font-bold duration-300 ${
                    checkedFields.length === 1
                      ? "cursor-pointer"
                      : "cursor-no-drop"
                  }`}
                >
                  {t("dashTable.buttons.edit")}
                </button>
              </>
            ) : null}
            <button
              className={`px-2 w-24 sm:px-5 sm:w-32 py-2 rounded-md transition-colors hover:from-[var(--third-color)]  hover:to-[var(--third-color-darker)] bg-gradient-to-br from-[var(--third-color-darker)] to-[var(--third-color)] text-white font-bold  duration-300 ${
                checkedFields.length ? "cursor-pointer" : "cursor-no-drop"
              }`}
            >
              {t("dashTable.buttons.delete")}
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center bg-gray-300 rounded-md">
            <thead>
              <tr>
                {fields.map((field) => (
                  <th
                    key={field.name}
                    className={`px-3 h-12 bg-[var(--main-color-lighter)]  text-[var(--main-color)] border-l border-white font-semibold first:rounded-tr-md`}
                    style={{
                      width: `${field.width}px`,
                      minWidth: `${field.width}px`,
                    }}
                  >
                    {t(field.title)}
                  </th>
                ))}
                <th
                  className={`px-3 bg-[var(--main-color-lighter)] text-white border-l border-white font-semibold rounded-tl-md`}
                  style={{
                    width: `80px`,
                    minWidth: `80px`,
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {data.map((dataItem, i) => (
                <tr
                  key={dataItem.id}
                  className="transition-colors hover:bg-gray-200"
                >
                  {fields.map((field) => (
                    <td
                      key={`${dataItem.id}-${field.name}`}
                      className={`p-2 border-b border-l border-white text-md ${
                        i === data.length - 1 ? "first:rounded-br-md" : ""
                      }`}
                    >
                      {field.name === "is_present" ? (
                        dataItem[field.name] ? (
                          t("dashTable.status.present")
                        ) : (
                          t("dashTable.status.absent")
                        )
                      ) : field.name === "is_deleted" ? (
                        dataItem[field.name] ? (
                          t("dashTable.status.deleted")
                        ) : (
                          t("dashTable.status.active")
                        )
                      ) : field.name === "profile_image" ? (
                        <img
                          src={dataItem[field.name]}
                          alt={t("dashTable.alt.employeeImage")}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        dataItem[field.name]?.toString() || "-"
                      )}
                    </td>
                  ))}
                  <td
                    className={`p-2 border-b border-l border-white text-md ${
                      i === data.length - 1 ? "rounded-br-md" : ""
                    }`}
                  >
                    <input
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      onClick={(e) => {
                        if (e.target.checked) {
                          setCheckedFields((prev) => [...prev, data[i].id]);
                        } else {
                          setCheckedFields((prev) =>
                            prev.filter((p) => p !== data[i].id)
                          );
                        }
                      }}
                      type="checkbox"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center lg:justify-end items-center flex-wrap gap-3 sm:gap-5 mt-5">
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap">
              {t("dashTable.rowsPerPage")} :{" "}
            </span>
            <select
              onChange={(e) => {
                setNumberToShow(e.target.value);
              }}
              className="outline-none cursor-pointer"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="flex items-center gap-1 dir-ltr">
            <span>
              {lastNumber}-{numberToShow * pageNumber}
            </span>
            <span>{t("dashTable.of")}</span>
            <span>100</span>
          </div>
          <div
            className={`flex gap-2 items-center ${
              language === "en" ? "flex-row-reverse" : ""
            }`}
          >
            <FaAngleRight
              onClick={() => {
                if (language === "ar") {
                  if (pageNumber > 1) {
                    setPageNumber(pageNumber - 1);
                    setLastNumber(lastNumber - numberToShow);
                  }
                } else {
                  if (pageNumber < 5) {
                    setPageNumber(pageNumber + 1);
                    setLastNumber(lastNumber + numberToShow);
                  }
                }
              }}
              className="cursor-pointer"
            />
            <FaAngleLeft
              onClick={() => {
                if (language === "ar") {
                  if (pageNumber < 5) {
                    setPageNumber(pageNumber + 1);
                    setLastNumber(lastNumber + numberToShow);
                  }
                } else {
                  if (pageNumber > 1) {
                    setPageNumber(pageNumber - 1);
                    setLastNumber(lastNumber - numberToShow);
                  }
                }
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      {popUpFields.length ? (
        <PopUp
          isOpen={openPopUp}
          isAdd={isAdd}
          title={search}
          fields={popUpFields}
          onClose={() => setOpenPopUp(false)}
          onSubmit={() => {}}
          initialData={!isAdd ? initialData : []}
        />
      ) : null}
    </div>
  );
};
export default DashTable;
