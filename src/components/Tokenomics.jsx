import { useState } from "react";
import { Menu, X } from "lucide-react";
import myImage from '../images/2.jpg';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "FIRESALE ", value: 20, color: "#072D44" },
  { name: "LIQUIDITY", value: 15, color: "#064469" },
  { name: "COMMUNITY", value: 10, color: "#5790AB" },
  { name: "MARKETING", value: 5, color: "#9CCDDB" },
  { name: "EIMI FUKADA", value: 50, color: "#D0D7E1" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
<text x={x} y={y} fill="#5a5a5a" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" className="text-[10px] font-medium">
{`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Tokenomics = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#d5dfeb] min-h-60px">
  

      {/* Tokenomics Pie Chart */}
      <main className="flex justify-center py-5 px-1">
        <div className="max-w-md w-full text-center">
          <h1 className="text-center text-gray-700 font-semibold text-xl mb-6">
            TOKENOMICS
          </h1>
          <div className="relative w-full h-80 mx-auto">
            {/* Pie chart */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Inner circle with the image */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white overflow-hidden flex items-start justify-center">
              <img
                src={myImage}
                alt="Tokenomics center image"
                className="w-full h-auto object-top translate-x-0.25"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tokenomics;
