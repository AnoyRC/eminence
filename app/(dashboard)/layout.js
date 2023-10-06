import CheckLogin from "@/components/layout/Login/CheckLogin";
import DashboardContainer from "@/components/layout/dashboard/DashboardContainer";
import PageHeader from "@/components/layout/dashboard/PageHeader";
import Sidebar from "@/components/layout/dashboard/Sidebar";

export default function DashLayout({ children }) {
  return (
    <div className="p-[12px] bg-black h-screen w-screen overflow-x-hidden gap-[12px] flex relative">
      <Sidebar />

      <DashboardContainer>
        <PageHeader />
        {children}
      </DashboardContainer>

      <CheckLogin />
    </div>
  );
}
