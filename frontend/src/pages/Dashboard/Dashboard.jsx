import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex flex-1 flex-col">

        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">

          <div className="mx-auto max-w-7xl">

            {/* Placeholder Grid */}
            <div className="grid gap-6">

              {/* KPI Area */}
              <section className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 text-center">

                <h2 className="text-xl font-semibold text-slate-700">
                  KPI Cards Area
                </h2>

                <p className="mt-2 text-slate-500">
                  Future KPI Cards will be rendered here.
                </p>

              </section>

              {/* Lower Grid */}
              <div className="grid gap-6 lg:grid-cols-2">

                <section className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 text-center">

                  <h2 className="text-lg font-semibold text-slate-700">
                    Threat Intelligence Feed
                  </h2>

                </section>

                <section className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 text-center">

                  <h2 className="text-lg font-semibold text-slate-700">
                    Incident Summary
                  </h2>

                </section>

              </div>

              {/* Chart Area */}
              <section className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-14 text-center">

                <h2 className="text-xl font-semibold text-slate-700">
                  Threat Trend Chart Area
                </h2>

              </section>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};

export default Dashboard;