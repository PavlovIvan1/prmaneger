'use client'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

// Регистрация компонентов
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Типы данных
type Period = 'day' | 'week' | 'month' | 'year'

export default function LineChartWithControls() {
  const [period, setPeriod] = useState<Period>('month')
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: []
  })

  // Моковые данные (замените на реальные с API)
  const rawData = {
    day: [
      { date: '2023-10-01', value: 5000 },
      { date: '2023-10-02', value: 7000 },
      { date: '2023-10-03', value: 3000 }
    ],
    week: [
      { week: '2023-40', value: 25000 },
      { week: '2023-41', value: 32000 }
    ],
    month: [
      { month: '2023-10', value: 150000 },
      { month: '2023-11', value: 200000 }
    ],
    year: [
      { year: '2023', value: 1200000 },
      { year: '2024', value: 500000 }
    ]
  }

  // Форматирование данных
  useEffect(() => {
    const formatData = () => {
      let labels = []
      let values = []

      switch (period) {
        case 'day':
          labels = rawData.day.map(item => 
            new Date(item.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
          values = rawData.day.map(item => item.value)
          break
        case 'week':
          labels = rawData.week.map(item => `Неделя ${item.week.split('-')[1]}`)
          values = rawData.week.map(item => item.value)
          break
        case 'month':
          labels = rawData.month.map(item => {
            const [year, month] = item.month.split('-')
            return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('ru-RU', { 
              month: 'short', 
              year: 'numeric' 
            })
          })
          values = rawData.month.map(item => item.value)
          break
        case 'year':
          labels = rawData.year.map(item => item.year)
          values = rawData.year.map(item => item.value)
          break
      }

      setChartData({
        labels,
        datasets: [
          {
            label: 'Доход',
            data: values,
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#3B82F6',
            pointBorderWidth: 2
          }
        ]
      })
    }

    formatData()
  }, [period])

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      {/* Кастомный селект */}
      <div className="mb-6">
        <label htmlFor="period-select" className="block text-sm font-medium text-gray-700 mb-1">
          Период:
        </label>
        <select
          id="period-select"
          value={period}
          onChange={(e) => setPeriod(e.target.value as Period)}
          className="
            block w-full px-3 py-2
            border border-gray-300 rounded-md
            shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500
            sm:text-sm
          "
        >
          <option value="day">По дням</option>
          <option value="week">По неделям</option>
          <option value="month">По месяцам</option>
          <option value="year">По годам</option>
        </select>
      </div>

      {/* Line Chart */}
      <div className="h-80">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
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
                },
                grid: {
                  color: 'rgba(0, 0, 0, 0.05)'
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            }
          }}
        />
      </div>
    </div>
  )
}