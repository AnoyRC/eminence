import AsideContainer from '@/components/layout/dashboard/home/AsideContainer';

export default function DashLayout({ children }) {
  return (
    <main>
      {children}
      <AsideContainer />
    </main>
  );
}
