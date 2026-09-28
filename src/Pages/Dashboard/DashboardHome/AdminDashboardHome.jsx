import React from 'react';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const AdminDashboardHome = () => {
    const axiosSecure = useAxiosSecure();

    const { data: deliveryStats = [] } = useQuery({
        queryKey: ['delivery-status-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels/delivery-status/stats');
            return res.data;
        },
    });

    // Convert API data into Recharts format
    const getBarchartData = (data) => {
        return data.map((item) => ({
            name: item._id,
            value: item.count,
        }));
    };

    return (
        <div>
            <h2 className="text-center my-4 font-semibold text-2xl">
                Admin Dashboard Home
            </h2>

            <div className="w-10/12 mx-auto">

                {/* ================= Stats ================= */}
                <div className="stats shadow w-full">

                    {deliveryStats.map((stat) => (
                        <div className="stat" key={stat._id}>

                            <div className="stat-figure text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>

                            <div className="stat-title">
                                {stat._id}
                            </div>

                            <div className="stat-value">
                                {stat.count}
                            </div>

                            <div className="stat-desc">
                                Delivery Status
                            </div>

                        </div>
                    ))}

                </div>


                {/* ================= Bar Chart ================= */}
                <div className="mt-10">

                    <h3 className="text-xl font-semibold mb-4">
                        Delivery Status Statistics
                    </h3>

                    <BarChart
                        style={{
                            width: '100%',
                            maxWidth: '700px',
                            maxHeight: '70vh',
                            aspectRatio: 1.618,
                        }}
                        responsive
                        data={getBarchartData(deliveryStats)}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >

                        <CartesianGrid />

                        <XAxis  dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Legend />

                        <Bar
                            dataKey="value"
                             fill="#570DF8"
                            radius={[10, 10, 0, 0]}
                        />

                    </BarChart>

                </div>

            </div>
        </div>
    );
};

export default AdminDashboardHome;