"use client";
import { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

export default function CurrencyRatio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { name: "SOL", value: 25 },
    { name: "USDC", value: 100 },
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 10) * cos;
    const my = cy + (outerRadius + 10) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 10;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#fff"
          className="text-[10px]"
        >{`${value} ${payload.name}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#fff"
          className="text-[10px] opacity-60"
        >
          {` ${(percent * 100).toFixed(2)}%`}
        </text>
      </g>
    );
  };

  return (
    <div
      className="w-[310px] h-[230px] rounded-[8px] p-[1px]"
      style={{
        background: "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
      }}
    >
      <div className="bg-black h-full w-full rounded-[8px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={100} height={100}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={60}
              fill={activeIndex === 0 ? "#4AFF93" : "#26FFFF"}
              dataKey="value"
              onMouseEnter={(e, index) => {
                setActiveIndex(index);
              }}
              className="text-white"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
