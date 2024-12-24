import { ClipboardList } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ClipboardList className="h-6 w-6" />
          <span className="text-lg font-semibold">Multi-Step Form</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}