import React from 'react';
import { Chart } from 'react-google-charts';
import { MDBRow } from 'mdb-react-ui-kit';
import { FaChartArea, FaChartBar } from 'react-icons/fa';
import { Line, Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// ✅ Register ChartJS modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  // Google Pie Chart
  const pieData = [
    ['Task', 'Hours per Day'],
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ];

  const pieOptions = {
    title: 'My Daily Activities',
  };

  // Area Chart (Line with fill)
  const areaData = {
    labels: ['Mar 1', 'Mar 3', 'Mar 5', 'Mar 7', 'Mar 9', 'Mar 11', 'Mar 13'],
    datasets: [
      {
        label: 'Revenue',
        data: [10000, 30000, 20000, 30000, 35000, 25000, 40000],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const areaOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Bar Chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [4000, 5000, 6000, 8000, 10000, 15000],
        backgroundColor: '#007bff',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="p-3">
      <h2>Dashboard</h2>

      {/* Cards Row */}
      <MDBRow>
        <div className="container mt-4">
          <div className="row g-3">
            <div className="col-md-3">
              <div className="bg-primary text-white p-3">
                <h4>Total Customers</h4>
                <h3 className="text-center">
                  <span className="badge bg-danger">10</span>
                </h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-success text-white p-3">
                <h4>Total Orders</h4>
                <h3 className="text-center">
                  <span className="badge bg-warning text-dark">25</span>
                </h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-info text-white p-3">
                <h4>Pending Tasks</h4>
                <h3 className="text-center">
                  <span className="badge bg-secondary">7</span>
                </h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-dark text-white p-3">
                <h4>Messages</h4>
                <h3 className="text-center">
                  <span className="badge bg-light text-dark">12</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </MDBRow>

      {/* Google Pie Chart */}
      <div className="mt-4">
        <Chart
          chartType="PieChart"
          data={pieData}
          options={pieOptions}
          width={'100%'}
          height={'400px'}
        />
      </div>

      {/* Area & Bar Charts */}
      <div className="row mt-4 g-3">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header fw-bold">
              <FaChartArea className="me-2" />
              Area Chart Example
            </div>
            <div className="card-body">
              <Line data={areaData} options={areaOptions} height={200} />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header fw-bold">
              <FaChartBar className="me-2" />
              Bar Chart Example
            </div>
            <div className="card-body">
              <Bar data={barData} options={barOptions} height={200} />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-4">
        <h3>Additional Content</h3>
        <p>
          This section can be used for any additional information or statistics
          you want to display.
        </p>
        <ul>
          <li>Statistic 1: Value</li>
          <li>Statistic 2: Value</li>
          <li>Statistic 3: Value</li>
        </ul>
      </div>
    </div>
  );
}
