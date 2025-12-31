import { Megaphone } from "lucide-react";
import React from "react";

type AnnouncementProps = {
  children: React.ReactNode;
};

export default function Announcement({ children }: AnnouncementProps) {
  return (
    <div className="flex gap-2 items-center justify-center text-sm bg-orange-200 text-secondary text-center py-2 border-b border-secondary">
      <Megaphone strokeWidth={1.5} />
      <span>{children}</span>
    </div>
  );
}
