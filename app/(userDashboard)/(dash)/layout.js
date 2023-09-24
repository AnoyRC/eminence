import AsideContainer from "@/components/layout/dashboard/home/AsideContainer";

export default function DashLayout({ children }) {
  return (
    <main className="flex justify-between w-full flex-grow">
      {children}
      <AsideContainer />
    </main>
  );
}
