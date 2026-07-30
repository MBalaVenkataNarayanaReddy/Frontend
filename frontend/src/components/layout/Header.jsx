import {
  FiSearch,
  FiBell,
  FiUser,
  FiCalendar,
  FiActivity,
} from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-6">

      {/* =======================
          Top Row
      ======================== */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

        {/* Left Side */}

        <div>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Security Dashboard
          </h1>

          <p className="mt-2 text-lg text-slate-500">
            Real-time AI Threat Monitoring
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Updated 30 seconds ago
          </p>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {/* Notification */}

          <button className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md">

            <FiBell className="text-2xl text-slate-700" />

            <span className="absolute right-4 top-4 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white"></span>

          </button>

          {/* Profile */}

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">

              <FiUser className="text-2xl text-white" />

            </div>

            <div>

              <h3 className="font-semibold text-slate-900">
                SOC Analyst
              </h3>

              <p className="text-sm text-slate-500">
                Security Team
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* =======================
          Search Bar
      ======================== */}

      <div className="mt-8">

        <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all duration-300 focus-within:border-blue-500 focus-within:bg-white focus-within:shadow-lg">

          <FiSearch className="text-xl text-slate-400" />

          <input
            type="text"
            placeholder="Search events, IPs, indicators, vulnerabilities..."
            className="ml-4 w-full bg-transparent text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />

        </div>

      </div>

      {/* =======================
          Status Row
      ======================== */}

      <div className="mt-6 flex flex-wrap gap-4">

        {/* Date */}

        <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-5 py-3">

          <FiCalendar className="text-blue-600" />

          <span className="font-medium text-slate-700">
            July 30, 2026
          </span>

        </div>

        {/* System */}

        <div className="flex items-center gap-3 rounded-xl bg-emerald-50 px-5 py-3">

          <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>

          <span className="font-medium text-emerald-700">
            System Online
          </span>

        </div>

        {/* Live */}

        <div className="flex items-center gap-3 rounded-xl bg-blue-50 px-5 py-3">

          <FiActivity className="text-blue-600" />

          <span className="font-medium text-blue-700">
            Live Feed
          </span>

        </div>

      </div>

    </header>
  );
};

export default Header;