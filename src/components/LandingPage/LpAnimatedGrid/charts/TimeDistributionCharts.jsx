import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useInView } from 'react-intersection-observer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Manual & Repetitive Tasks', 'Strategic / Key Work', 'Meetings & Collaboration'];

const datasetDefaults = {
  borderWidth: 1,
};

const beforeAIDataset = {
  ...datasetDefaults,
  label: 'Before AI',
  data: [35, 40, 25],
  backgroundColor: 'rgba(169, 169, 169, 0.7)',
  borderColor: 'rgba(169, 169, 169, 1)',
};

const withAIDataset = {
  ...datasetDefaults,
  label: 'With AI',
  data: [10, 65, 25],
  backgroundColor: 'rgba(51, 207, 255, 0.7)',
  borderColor: 'rgba(51, 207, 255, 1)',
};

const initialChartData = {
    labels: labels,
    datasets: [
      { ...beforeAIDataset, data: [0, 0, 0] },
      { ...withAIDataset, data: [0, 0, 0] },
    ],
  };
const realChartData = {
  labels: labels,
  datasets: [beforeAIDataset, withAIDataset],
};


export const TimeComparisonChart = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [chartData, setChartData] = useState(initialChartData);
  useEffect(() => {
    if (inView) {

       setChartData(realChartData);
    } else {
       setChartData(initialChartData);
    }
  }, [inView]);


  const options = {
    responsive: true,
    maintainAspectRatio: false,

    animation: {
        duration: 1000,
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Time Spent Comparison: Before vs. With AI',
        font: { size: 16 },
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: '% of Weekly Time',
        },
        beginAtZero: true,
        suggestedMax: 80,
        ticks: {
           callback: function(value) {
               return value + '%';
           }
        }
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: null,
    },
  };

  return (
    // Asigna la ref al contenedor
    // Renderiza siempre el gráfico, pero con datos que cambian
    <div ref={ref} className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};