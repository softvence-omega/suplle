import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Data {
  month: string;
  sales: number;
  order: number;
}

const data: Data[] = [
  {
    month: "Jan",
    sales: 2400,
    order: 6000,
  },
  {
    month: "Feb",
    sales: 9350,
    order: 5600,
  },
  {
    month: "Mar",
    sales: 22230,
    order: 4300,
  },
  {
    month: "Apr",
    sales: 4550,
    order: 2560,
  },
  {
    month: "May",
    sales: 17250,
    order: 4530,
  },

  {
    month: "Jun",
    sales: 6550,
    order: 760,
  },
  {
    month: "Jul",
    sales: 7550,
    order: 4230,
  },
  {
    month: "Aug",
    sales: 6350,
    order: 4360,
  },
  {
    month: "Sep",
    sales: 12550,
    order: 8430,
  },
  {
    month: "Oct",
    sales: 3550,
    order: 6310,
  },
  {
    month: "Nov",
    sales: 7650,
    order: 3610,
  },
  {
    month: "Dec",
    sales: 15000,
    order: 4930,
  },
];

const OwnerAnalyticsChart = () => {
  return (
    <ResponsiveContainer height={400}>
      <LineChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="sales"
          stroke="#92D7D6"
          strokeWidth={2.5}
          activeDot={{ r: 8 }}
          strokeDasharray="5 5"
        />
        {/* <Line
          type="monotone"
          dataKey="order"
          strokeWidth={2.5}
          stroke="#56DAAB"
          strokeDasharray="3 4 5 2"
        /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OwnerAnalyticsChart;
