import React from 'react';
import { Stage, Layer, Circle, Line } from 'react-konva';

const Conva = () => {
  const radius = 200;
  const points = 8;
  const angleStep = (2 * Math.PI) / points;

  // Calculate points for the reversed shape (180 degrees)
  const circlePoints = [];
  for (let i = 0; i < points; i++) {
    const angle = (i + points / 2) % points * angleStep; // Reverse direction by adding points/2 and taking modulo points
    const x = radius * Math.cos(angle) + radius + 0;
    const y = radius * Math.sin(angle) + radius + 20;
    circlePoints.push({ x, y });
  }

  return (
    <Stage width={400} height={400}>
      <Layer>
        <Line
          points={[
            circlePoints[0].x, circlePoints[0].y,
            circlePoints[1].x, circlePoints[1].y,
            circlePoints[2].x, circlePoints[2].y,
            circlePoints[3].x, circlePoints[3].y,
            circlePoints[4].x, circlePoints[4].y,
            circlePoints[5].x, circlePoints[5].y,
            circlePoints[6].x, circlePoints[6].y,
            circlePoints[7].x, circlePoints[7].y,
           ]}
          stroke="white"
          strokeWidth={2}
          closed={true}
        />
        <Circle x={circlePoints[0].x} y={circlePoints[0].y} radius={2} fill="blue" />
        <Circle x={circlePoints[1].x} y={circlePoints[1].y} radius={2} fill="blue" />
        <Circle x={circlePoints[2].x} y={circlePoints[2].y} radius={2} fill="blue" />
        <Circle x={circlePoints[3].x} y={circlePoints[3].y} radius={2} fill="blue" />
        <Circle x={circlePoints[4].x} y={circlePoints[4].y} radius={2} fill="blue" />
        <Circle x={circlePoints[5].x} y={circlePoints[5].y} radius={2} fill="blue" />
        <Circle x={circlePoints[6].x} y={circlePoints[6].y} radius={2} fill="blue" />
        <Circle x={circlePoints[7].x} y={circlePoints[7].y} radius={2} fill="blue" />
      </Layer>
    </Stage>
  );
};

export default Conva;
