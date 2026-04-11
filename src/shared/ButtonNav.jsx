import {
  CalendarIcon,
  RectangleGroupIcon,
  FolderIcon,
  Cog6ToothIcon,
  ArchiveBoxIcon
} from "@heroicons/react/24/outline";

export function ButtonNav({ children, active, onClick }) {

  function icon() {
    if (children === "Dashboard") return <RectangleGroupIcon className="size-6" />;
    if (children === "Projects") return <FolderIcon className="size-6" />;
    if (children === "Calendar") return <CalendarIcon className="size-6" />;
    if (children === "Settings") return <Cog6ToothIcon className="size-6" />;
    if (children === "Archive") return <ArchiveBoxIcon className="size-6" />;
  }

  const isActive = active === children;

  const base =
    "flex cursor-pointer w-full py-3 px-2 rounded-b-sm my-0.5 transition";

  const activeStyle =
    "bg-white shadow-sm text-blue-900";

  const inactiveStyle =
    "text-gray-600 hover:bg-white hover:shadow-sm hover:text-blue-900";

  return (
    <div
      onClick={() => onClick(children)}
      className={`${base} ${isActive ? activeStyle : inactiveStyle}`}
    >
      <div>{icon()}</div>
      <div className="ms-2">{children}</div>
    </div>
  );
}