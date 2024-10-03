const ScheduleItem = ({ children, itemClassname = "w-[90%] max-w-2xl" }) => {
  return (
    <div className={`flex gap-4 bg-white border border-gray-300 shadow-md rounded-lg p-6 mb-6 ${itemClassname} `}>
      {children}
    </div>
  );
};

export default ScheduleItem;
