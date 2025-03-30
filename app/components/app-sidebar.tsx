import { Hand, House, X } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader>
        {isMobile && (
          <Button
            className="self-end"
            variant="ghost"
            size="icon"
            title="Close sidebar"
            onClick={() => setOpenMobile(false)}
          >
            <X />
          </Button>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild onClick={() => setOpenMobile(false)}>
                  <Link to={"/"}>
                    <House />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild onClick={() => setOpenMobile(false)}>
                  <Link to={"/hello"}>
                    <Hand />
                    <span>Hello</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
