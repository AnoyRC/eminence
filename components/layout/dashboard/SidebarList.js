import SideBarButton from "@/components/ui/SideBarButton";

const SidebarList = () => {
  return (
    <div className="px-[38px] w-full flex flex-col gap-[24px]">
      <SideBarButton
        logo={"/images/Dashboard/SideBar/Dashboard.svg"}
        active={false}
        label={"Dashboard"}
      />
      <SideBarButton
        logo={"/images/Dashboard/SideBar/Deposit.svg"}
        active={false}
        label={"Deposit"}
      />
      <SideBarButton
        logo={"/images/Dashboard/SideBar/Transactions.svg"}
        active={false}
        label={"Transaction"}
      />
      <hr className="w-full border-[#f0f0f0] border-opacity-50" />
      <SideBarButton
        logo={"/images/Dashboard/SideBar/Profile.svg"}
        active={false}
        label={"Profile"}
      />
      <SideBarButton
        logo={"/images/Dashboard/SideBar/Voucher.svg"}
        active={false}
        label={"My Vouchers"}
      />
      <SideBarButton
        logo={"/images/Dashboard/SideBar/Contacts.svg"}
        active={false}
        label={"Contacts"}
      />
    </div>
  );
};

export default SidebarList;
