"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

interface AppLinkProps {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export function AppLink({ name, description, url, imageUrl = "https://github.com/shadcn.png" }: AppLinkProps) {
  return (
    <div className="w-full max-w-3xl p-3 rounded-3xl transition-colors duration-200 hover:bg-accent">
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-center gap-6 w-full h-14 rounded-md">
          <div className="flex items-center justify-start w-14 h-14">
            <Avatar className="w-14 h-14 rounded-2xl">
              <AvatarImage src={imageUrl} alt={name} />
            </Avatar>
          </div>
          <div className="flex flex-col justify-center items-start gap-0.5 flex-1 h-full">
            <h3 className="text-xl font-semibold leading-7">{name}</h3>
            <p className="text-base text-muted-foreground leading-6">{description}</p>
          </div>
          <ChevronRight className="w-6 h-6 text-muted-foreground" />
        </div>
      </a>
    </div>
  );
}
