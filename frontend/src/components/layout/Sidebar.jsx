import {
  FiGrid,
  FiActivity,
  FiShield,
  FiLock,
  FiBarChart2,
} from "react-icons/fi";

const menuItems = [
  {
    icon: FiGrid,
    label: "Overview",
    active: true,
  },
  {
    icon: FiActivity,
    label: "Security Events",
    active: false,
  },
  {
    icon: FiShield,
    label: "Threat Intelligence",
    active: false,
  },
  {
    icon: FiLock,
    label: "Vulnerabilities",
    active: false,
  },
  {
    icon: FiBarChart2,
    label: "Analytics",
    active: false,
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:w-72 xl:w-80 flex-col bg-slate-950 text-white border-r border-slate-800">

      {/* ================= Brand ================= */}

      <div className="border-b border-slate-800 px-6 py-8">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-900/40">

            <FiShield className="text-3xl text-white" />

          </div>

          <div>

            <h1 className="text-2xl font-bold tracking-tight">
              SentinelAI
            </h1>

            <p className="text-sm text-slate-400">
              Security Dashboard
            </p>

          </div>

        </div>

        <p className="mt-5 text-sm leading-6 text-slate-400">
          AI-Assisted Threat Detection Platform
        </p>

        <span className="mt-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
          Enterprise Security
        </span>

      </div>

      {/* ================= Navigation ================= */}

      <nav className="flex-1 px-5 py-8">

        <p className="mb-5 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Navigation
        </p>

        <div className="space-y-2">

          {menuItems.map((item) => (

            <button
              key={item.label}
              className={`group flex w-full items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                item.active
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white hover:translate-x-1"
              }`}
            >

              <item.icon className="text-xl transition-all duration-300 group-hover:scale-110" />

              <span className="font-medium text-[15px]">
                {item.label}
              </span>

            </button>

          ))}

        </div>

      </nav>

      {/* ================= Footer ================= */}

      <div className="border-t border-slate-800 p-6">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          System Status
        </p>

        <div className="rounded-2xl bg-slate-900 p-5">

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>

            <span className="font-semibold">
              All Services Operational
            </span>

          </div>

          <div className="mt-5 space-y-3 text-sm text-slate-400">

            <div className="flex justify-between">

              <span>Last Sync</span>

              <span>2 min ago</span>

            </div>

            <div className="flex justify-between">

              <span>Version</span>

              <span>v1.0</span>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;