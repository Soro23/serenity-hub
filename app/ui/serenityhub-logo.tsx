import { RiMentalHealthLine } from "react-icons/ri";

import { lusitana } from '@/app/ui/fonts';

export default function SerenityHubLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-wafer-950 `}
    >
      <RiMentalHealthLine className="w-10 h-10"/>
      <p className="text-[35px] flex whitespace-nowrap ">Serenity Hub</p>
    </div>
  );
}
