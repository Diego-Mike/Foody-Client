import SideBar from "@/components/organisms/admin/adminLayout/SideBar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <SideBar />
      {children}
    </section>
  );
};

export default DashboardLayout;
