import WarningIcon from "@mui/icons-material/Warning";
import SickIcon from "@mui/icons-material/Sick";
import EmergencyIcon from "@mui/icons-material/Emergency";

interface IsideEffects {
  sideEffects: string[];
  seriousSideEffects: string[];
}

export default function SideEffects({
  sideEffects,
  seriousSideEffects,
}: IsideEffects) {
  return (
    <section className="bg-[#1E3F45] p-10 rounded-[0.75rem] shadow-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-[#FCFBFA] flex items-center gap-3">
          <WarningIcon className="text-[#EBBA92]" />
          Side Effects
        </h2>
        <p className="text-[#FCFBFA]/60 mt-2">
          Detailed clinical observation of potential reactions to this
          medication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Common Side Effects */}
        <div className="bg-[#ECE3DA] p-8 rounded-[0.75rem] border border-[#146976]/20">
          <h3 className="text-xl font-bold text-[#1E3F45] mb-6 flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#146976]"></span>
            Common Side Effects
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {sideEffects.map((e) => (
              <div
                key={e}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#146976]/5 border border-[#146976]/10"
              >
                <SickIcon className="text-[#146976]" />
                <div>
                  <p key={e} className="font-bold text-[#1E3F45]">
                    {e}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Serious Side Effects */}
        <div className="bg-[#ECE3DA] p-8 rounded-[0.75rem] border border-[#EBBA92]/40">
          <h3 className="text-xl font-bold text-[#1E3F45] mb-6 flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#EBBA92]"></span>
            Serious Side Effects
          </h3>

          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 gap-4">
              {seriousSideEffects.map((e) => (
                <div
                  key={e}
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#146976]/5 border border-[#146976]/10"
                >
                  <EmergencyIcon className="text-[#146976]" />
                  <div>
                    <p key={e} className="font-bold text-[#1E3F45]">
                      {e}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
