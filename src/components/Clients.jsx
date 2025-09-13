import DashTable from "./DashTable";
import { clientFields as popUpFields } from "../popUpFields";
import { clientFields } from "../fields";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from "axios";

const Clients = () => {
  const { t } = useTranslation();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("authToken");

        if (!token) {
          setError("Authentication token not found");
          return;
        }

        if (search) {
          const response = await axios.get(
            `http://192.168.1.107:7176/api/Customer/Search?page=${page}&count=${count}&name=${search}`,
            {
              //timeout: 5000,
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          setClients(response.data.data || response.data);
        } else {
          const response = await axios.get(
            `http://192.168.1.107:7176/api/Customer/GetAll?page=${page}&count=${count}`,
            {
              //timeout: 5000,
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          setClients(response.data.data || response.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response?.data?.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refresh, page, count, search]);

  return (
    <DashTable
      title={t("customer.title")}
      searchPlaceHolder={t("customer.search")}
      url="/Customer"
      fields={clientFields}
      data={clients}
      popUpFields={popUpFields}
      loading={loading}
      setRefresh={setRefresh}
      page={page}
      count={count}
      search={search}
      setPage={setPage}
      setCount={setCount}
      setSearch={setSearch}
      error={error}
    />
  );
};

export default Clients;
