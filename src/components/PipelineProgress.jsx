function PipelineProgress({ completed, total }) {
  const percentage = (completed / total) * 100;

  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between text-sm">
        <span>Pipeline Progress</span>
        <span>{completed}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-indigo-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default PipelineProgress;
