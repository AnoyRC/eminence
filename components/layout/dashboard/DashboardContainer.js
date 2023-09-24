const DashboardContainer = ({ children }) => {
  return (
    <div className="bg-[#1C1D22] h-full flex-grow rounded-[8px] flex flex-col">
      {children}
    </div>
  );
};

export default DashboardContainer;
