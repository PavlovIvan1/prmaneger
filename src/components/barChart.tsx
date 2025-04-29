'use client' 

import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

// Регистрируем компоненты ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Типы для данных
type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
};

// Моковые данные (замените на реальные с API)
const mockData = {
  daily: {
    '2023-10-01': 5000,
    '2023-10-02': 7000,
    '2023-10-03': 3000,
  },
  weekly: {
    '2023-40': 25000,
    '2023-41': 32000,
    '2023-42': 18000,
  },
  monthly: {
    '2023-10': 150000,
    '2023-11': 200000,
    '2023-12': 180000,
  },
  yearly: {
    '2023': 1200000,
    '2024': 500000,
  },
};

export default function IncomeChart() {
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly');
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: []
  });

  // Форматирование данных при изменении периода
  useEffect(() => {
    const rawData = mockData[period];
    
    // Сортируем данные по дате
    const sortedEntries = Object.entries(rawData).sort((a, b) => {
      if (period === 'yearly') return a[0].localeCompare(b[0]);
      return new Date(a[0]) - new Date(b[0]);
    });

    // Форматируем подписи
    const labels = sortedEntries.map(([date]) => {
      if (period === 'daily') return new Date(date).toLocaleDateString('ru-RU');
      if (period === 'weekly') return `Неделя ${date.split('-')[1]}`;
      if (period === 'monthly') return new Date(date).toLocaleDateString('ru-RU', { month: 'short', year: 'numeric' });
      return date;
    });

    const data = sortedEntries.map(([, value]) => value);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Доход',
          data,
          backgroundColor: '#4CAF50',
        }
      ]
    });
  }, [period]);

  return (
    <div className="chart-container">
      <div className="chart-controls">
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value as any)}
          className="p-2 border rounded-md"
        >
          <option value="daily">По дням</option>
          <option value="weekly">По неделям</option>
          <option value="monthly">По месяцам</option>
          <option value="yearly">По годам</option>
        </select>
      </div>

      <div className="chart-wrapper">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.raw} ₽`
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: (value) => `${value} ₽`
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
}