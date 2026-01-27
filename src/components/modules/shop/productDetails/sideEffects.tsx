import WarningIcon from "@mui/icons-material/Warning";
import SickIcon from "@mui/icons-material/Sick";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import EmergencyIcon from "@mui/icons-material/Emergency";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function SideEffects() {
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
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#146976]/5 border border-[#146976]/10">
              <SickIcon className="text-[#146976]" />
              <div>
                <p className="font-bold text-[#1E3F45]">Nausea &amp; Vomiting</p>
                <p className="text-sm text-[#1E3F45]/60">
                  Milder stomach upset often occurring within first 2 days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#146976]/5 border border-[#146976]/10">
              <CoronavirusIcon className="text-[#146976]" />
              <div>
                <p className="font-bold text-[#1E3F45]">Mild Skin Rash</p>
                <p className="text-sm text-[#1E3F45]/60">
                  Non-itchy, pink or red spots on the body.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#146976]/5 border border-[#146976]/10">
              <WaterDropIcon className="text-[#146976]" />
              <div>
                <p className="font-bold text-[#1E3F45]">Diarrhea</p>
                <p className="text-sm text-[#1E3F45]/60">
                  Loose stools, typically resolve after course completion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Serious Side Effects */}
        <div className="bg-[#ECE3DA] p-8 rounded-[0.75rem] border border-[#EBBA92]/40">
          <h3 className="text-xl font-bold text-[#1E3F45] mb-6 flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#EBBA92]"></span>
            Serious Side Effects
          </h3>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#EBBA92]/10 border border-[#EBBA92]/30">
              <EmergencyIcon className="text-[#1E3F45]" />
              <div>
                <p className="font-bold text-[#1E3F45]">Anaphylaxis</p>
                <p className="text-sm text-[#1E3F45]/60">
                  Severe allergic reaction. Seek immediate medical attention.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#EBBA92]/10 border border-[#EBBA92]/30">
              <MonitorHeartIcon className="text-[#1E3F45]" />
              <div>
                <p className="font-bold text-[#1E3F45]">
                  Severe Abdominal Pain
                </p>
                <p className="text-sm text-[#1E3F45]/60">
                  Could indicate a serious intestinal condition (C. diff).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#EBBA92]/10 border border-[#EBBA92]/30">
              <VisibilityIcon className="text-[#1E3F45]" />
              <div>
                <p className="font-bold text-[#1E3F45]">
                  Yellowing of Eyes/Skin
                </p>
                <p className="text-sm text-[#1E3F45]/60">
                  Signs of liver problems. Contact physician immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
