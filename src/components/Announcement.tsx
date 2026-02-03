import { Megaphone } from "lucide-react";
import React from "react";

type AnnouncementProps = {
  children: React.ReactNode;
};

export default function Announcement({ children }: AnnouncementProps) {
  return (
    <div className="flex gap-2 items-center justify-center text-sm border-fuchsia-900/30 bg-linear-to-r from-fuchsia-200 via-fuchsia-400 to-fuchsia-700  text-black text-center py-2 border-b ">
      <Megaphone strokeWidth={1.5} />
      <span>{children}</span>
    </div>
  );
}
