import { Navbar } from "./_components/navbar";
import Sidebar, { SidebarItem } from "./_components/sidebar";
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return ( 
    <div>
      <div className="flex">
        <Sidebar>
          {/* <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" href="/login" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" /> */}
          <SidebarItem 
          itemKey="home"
          icon={<Home size={20} />}
          text="Home"
          href="/home"
          alert />
          <SidebarItem
            itemKey="dashboard"
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            href="/dashboard"
            alert
          />
          <SidebarItem 
          itemKey="calender"
          icon={<Calendar size={20} />} 
          text="Calendar"
          href="/calender"
          alert 
          />
          <SidebarItem 
          itemKey="tasks"
          icon={<Layers size={20} />} 
          text="Tasks" 
          href="/tasks"
          alert
          />
           <SidebarItem 
           itemKey="reporting"
           icon={<Flag size={20} />} 
           text="Reporting" 
           href="/reporting"
           alert
           />
          <SidebarItem
            itemKey="settings"
            icon={<Settings size={20} />}
            text="Settings"
            href="/settings"
       
          />
        </Sidebar>
        <div>
          <Navbar />
        </div>

        <div className="flex items-center justify-center mx-4 my-6 lg:mt-20">
          {children}
        </div>
      </div>
      </div>
      

   );
}
 
export default ProtectedLayout;