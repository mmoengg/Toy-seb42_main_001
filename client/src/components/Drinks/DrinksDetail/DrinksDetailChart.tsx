import React from "react";
import styled from "styled-components";
import { DrinksDetailProps } from '../../../interfaces/Drinks.inerface'

import { Radar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadarController,
  RadialLinearScale
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, RadarController, RadialLinearScale);

function DrinksDetailChart({ drinksDetail }: DrinksDetailProps) {
  // {citrus: 4, sweet: 5, smoky: 4, herbal: 4, tropical: 1}
  // const tastingValues = Object.values(drinksDetail?.tastingNote ?? {})

  const data: ChartData<'radar', number[], unknown> = {
    labels: ['sweet', 'smoky', 'orc', 'spicy', 'fruity'],
    datasets: [
      {
        label: 'Tasting Note',
        data: [4, 5, 4, 4, 1],
        backgroundColor: 'white',
      },
    ],
  };

  const options: ChartOptions<'radar'> & ChartOptions = {
    elements: {
      //데이터 속성.
      line: {
        borderWidth: 1,
        borderColor: '#ca612893',
      },
      //데이터 꼭짓점.
      point: {
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: '#a9430c',
      },
    },
    scales: {
      r: {
        ticks: {
          stepSize: 1,
          display: false,
        },
        grid: {
          color: '#473F3F',
        },
        //라벨 속성 지정.
        pointLabels: {
          font: {
            size: 14,
            weight: '700',
            family: 'SUIT',
          },
          color: '#473F3F',
        },
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
    //위에 생기는 데이터 속성 label 타이틀을 지워줍니다.
    plugins: {
      legend: {
        display: false,
      },
    },
    //기본 값은 가운데에서 펴져나가는 애니메이션 형태입니다.
    animation: {
      duration: 1,
    },
  };

  return (
    <ChartContainer>
      <Radar data={data} options={options} />
    </ChartContainer>
  );
}

export default DrinksDetailChart;

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--medium);

  div {
    width: 100%;
    height: 500px;
    background-color: var(--color-main);
  }
`;
