import { useEffect } from 'react';
import { Chart } from 'chart.js';

const DoughnutChartComponent = () => {
  let doughnutChart;

  useEffect(() => {
    // Cleanup function
    const cleanup = () => {
      if (doughnutChart) {
        doughnutChart.destroy();
      }
    };

    // Create the Doughnut chart
    createDoughnutChart();

    // Cleanup when the component is unmounted or before creating a new chart
    return cleanup;
  }, []); // Empty dependency array to run only once on mount

  const createDoughnutChart = () => {
    const canvas = document.getElementById('doughnutChart');
    const ctx = canvas.getContext('2d');

    if (ctx) {
      doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Complete', 'In progress', 'Unsatisfactory', 'Pending'],
          datasets: [
            {
              label: 'Dataset 1',
              data: Array.from({ length: 4}, () => Math.floor(Math.random() * 100)),
              backgroundColor: [
                '#349FA6',
                '#5CDDE5',
                '#FF4E22',
                '#7EA0B7',
                
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Project State Distribution',
              
            
            },
          },
        },
      });
    } else {
      console.error('Could not get 2D context for the canvas.');
    }
  };

  return <canvas id="doughnutChart" width="400" height="400"></canvas>;
};

export default DoughnutChartComponent;
