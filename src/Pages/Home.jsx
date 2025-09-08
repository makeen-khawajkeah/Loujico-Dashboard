// src/Pages/Home.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component for a single metric card
const MetricCard = ({ title, value, unit, color }) => (
    <div className={`p-6 rounded-lg shadow-md flex-1 ${color}`}>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-3xl font-bold">{value} <span className="text-xl font-normal">{unit}</span></p>
    </div>
);

const Home = () => {
    const [metrics, setMetrics] = useState({
        activeCustomers: '...',
        activeProjects: '...',
        overdueInvoices: '...',
        presentEmployees: '...',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // استبدل الروابط التالية بروابط الـ API الحقيقية
                const [
                    customersRes,
                    projectsRes,
                    invoicesRes,
                    employeesRes
                ] = await Promise.all([
                    axios.get('YOUR_API_ENDPOINT/customers/active'),
                    axios.get('YOUR_API_ENDPOINT/projects/status'),
                    axios.get('YOUR_API_ENDPOINT/invoices/overdue'),
                    axios.get('YOUR_API_ENDPOINT/employees/present')
                ]);

                setMetrics({
                    activeCustomers: customersRes.data.count,
                    activeProjects: projectsRes.data.count, // قد تحتاج إلى تعديل هذا إذا كان الـ API يرجع تفاصيل المشاريع بدلاً من العدد مباشرة
                    overdueInvoices: invoicesRes.data.count, // قد تحتاج إلى تعديل هذا إذا كان الـ API يرجع تفاصيل الفواتير
                    presentEmployees: employeesRes.data.count,
                });

                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch dashboard data:", err);
                setError("Failed to load dashboard data. Please try again.");
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) {
        return <div className="p-6 text-center text-gray-500">Loading dashboard data...</div>;
    }

    if (error) {
        return <div className="p-6 text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">لوحة التحكم</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="العملاء النشطين" value={metrics.activeCustomers} color="bg-[var(--main-color-lighter)] text-white " />
                <MetricCard title="المشاريع النشطة" value={metrics.activeProjects} color="bg-[var(--sub-color-lighter)] text-white" />
                <MetricCard title="الفواتير المتأخرة" value={metrics.overdueInvoices} color="bg-[var(--main-color-lighter)] text-white" />
                <MetricCard title="الموطفين الحاليين" value={metrics.presentEmployees} color="bg-[var(--sub-color-lighter)] text-white" />
            </div>
        </div>
    );
};

export default Home;