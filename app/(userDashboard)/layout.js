import DashboardContainer from '@/components/layout/dashboard/DashboardContainer';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import Sidebar from '@/components/layout/dashboard/Sidebar';

export default function DashLayout({ children }) {
  return (
    <>
      <Sidebar />

      <DashboardContainer>
        <PageHeader />
        {children}
      </DashboardContainer>
    </>
  );
}
