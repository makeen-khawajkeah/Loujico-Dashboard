import { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import axios from "axios";

const ToDoFile = ({ formData, setFormData, url }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [data, setData] = useState({});
  const fileInputRef = useRef(null);

  const commonProps = {
    className: `px-3 py-2 bg-gray-200 rounded-md transition-colors hover:bg-gray-100 focus:bg-white focus-visible:outline-[var(--main-color)] w-full`,
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setError("No authentication token found");
        return;
      }

      await axios.delete(
        `http://loujico.somee.com/api${url}/DeleteFile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      // console.error("Delete error:", errorMessage);
      // setError(errorMessage);
      // throw new Error(errorMessage);
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-sm font-medium">{t("todoFile.associatedFiles")}</h1>
      <div className="flex justify-between items-center gap-4">
        <div className="relative flex items-baseline w-full gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => setData({ ...data, files: e.target.files[0] })}
            className="hidden"
            id="fileInput"
          />
          <label className="cursor-pointer shrink-0" htmlFor="fileInput">
            {t("todoFile.chooseFile")}
          </label>
          <span
            className={`text-sm overflow-scroll whitespace-nowrap ${
              language === "ar" ? "pl-2" : "pr-2"
            }`}
          >
            {data.files ? data.files.name : t("todoFile.noFileChosen")}
          </span>
        </div>
        <input
          value={data.fileType || ""}
          onChange={(e) => setData({ ...data, fileType: e.target.value })}
          {...commonProps}
          type="text"
          placeholder={t("todoFile.fileTypePlaceholder")}
        />
        <button
          type="button"
          onClick={() => {
            let c = 0;
            for (let k in data) {
              if (!data[k]) {
                return;
              }

              c++;
            }

            if (c === 2) {
              setFormData({
                ...formData,
                Data: [...(formData.Data || []), data],
              });
              setData({});
              fileInputRef.current.value = "";
            }
          }}
          className="px-4 py-2 text-white bg-[var(--main-color)] rounded-md hover:bg-[var(--main-color-darker)] cursor-pointer transition-colors whitespace-nowrap"
        >
          {t("todoFile.addButton")}
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {(formData.Data || []).map((file, i) => {
          return (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-200 p-2 rounded-md"
            >
              <span>
                {file.fileName || file.files.name} / {file.fileType}
              </span>
              <FaTrash
                className="cursor-pointer"
                onClick={() => {
                  setFormData({
                    ...formData,
                    Data: formData.Data.filter((e) => {
                      if (e.id) {
                        return e.id !== file.id;
                      } else {
                        return e.files !== formData.Data[i].files;
                      }
                    }),
                  });

                  if (file.id) {
                    handleDelete(file.id);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDoFile;
