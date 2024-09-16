import LogOut from "@/components/LogOut";
import DarkMode from "@/components/DarkMode";

export default function Header() {
  return (
    <div className="base-container">
      <div className="mb-5 flex items-center justify-between border-b py-5">
        <h2 className="h2 ml-3">Gullar</h2>
        <DarkMode />
        <LogOut />
      </div>
    </div>
  );
}
