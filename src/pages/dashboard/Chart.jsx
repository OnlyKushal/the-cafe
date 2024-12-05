import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "jan", uv: 400, pv: 100, amt: 100 },
  { name: "FEB", uv: 300, pv: 0, amt: 1000 },
  { name: "MAR", uv: 4000, pv: 0, amt: 200 },
  { name: "APR", uv: 400, pv: 0, amt: 300 },
  { name: "MAY", uv: 4000, pv: 0, amt: 1600 },
];

export default function Chart() {
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#f8a6c5" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}
