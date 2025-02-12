// components/StatsCard.js

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color: string;
  }

type ColorClass = {
  bg: string;
  text: string;
};

type ColorClassMap = {
  [key: string]: ColorClass;
};

export default function StatsCard({ title, value, icon, color } : StatsCardProps) {
    const colorClasses : ColorClassMap= {
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600" },
      // Add more colors as needed
    };
  
    return (
      <div className="bg-white p-6 border rounded-lg shadow-md hover:shadow-none">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            <p className={`text-3xl font-bold ${colorClasses[color].text}`}>
              {value}
            </p>
          </div>
          <div className={`p-3 ${colorClasses[color].bg} rounded-full`}>
            {icon}
          </div>
        </div>
      </div>
    );
  }