import AsideContainer from '@/components/layout/myContacts/AsideContainer';

export default function VouchersLayout({ children }) {
  return (
    <main
      className="flex justify-between w-full"
      style={{
        height: 'calc(100% - 72px)',
      }}
    >
      <div className="flex justify-center relative w-full">{children}</div>

      <AsideContainer />
    </main>
  );
}
