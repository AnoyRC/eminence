import AddContactPopUp from '@/components/layout/myContacts/AddContactPopUp';
import AsideContainer from '@/components/layout/myContacts/AsideContainer';

export default function VouchersLayout({ children }) {
  return (
    <>
      <AddContactPopUp />
      <main
        className="flex justify-between w-full"
        style={{
          height: 'calc(100% - 72px)',
        }}
      >
        <div className="flex justify-center flex-grow relative overflow-auto">
          {children}
        </div>

        <AsideContainer />
      </main>
    </>
  );
}
