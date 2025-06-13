export const StatBar = ({ label, value }: { label: string; value: number }) => (
  <div className="w-full mb-2">
    <p className="text-sm text-gray-700 mb-1 text-left">
      {label}: {value}
    </p>
    <div className="w-full h-2 bg-gray-200 rounded-full">
      <div
        className="h-2 bg-amber-500 rounded-full"
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  </div>
);
