import BusinessAsideCard from "@/components/molecules/negocio/BusinessAsideCard";
import { FC } from "react";

interface Props {
  presentation: string;
  clients_max_amount: number;
}

const BusinessAsideBar: FC<Props> = ({ presentation, clients_max_amount }) => {
  return (
    <aside className="w-[22%] flex flex-col">
      {/* business description */}
      <BusinessAsideCard
        title="Presentación &nbsp;👋"
        containerCustomStyles="h-52"
      >
        <p className="text-[#ABBBC2] text-[13px] font-light text-justify pt-2">
          {presentation}
        </p>
      </BusinessAsideCard>

      {/* is it open ? when does it close ? */}
      <BusinessAsideCard
        title="Estatus &nbsp;🚨"
        containerCustomStyles="h-40 mt-5"
      >
        <p className="text-[13px] text-[#ABBBC2] font-light pt-2">
          Espacio disponible :
          <span className="font-bold">
            {clients_max_amount === 0
              ? " No especificado"
              : `${clients_max_amount} 'personas'`}
          </span>
        </p>
        <p className="text-[13px] text-[#ABBBC2] font-light pt-2">
          Abierto : <span className="font-bold">Sí</span>
        </p>
        <p className="text-[13px] text-[#ABBBC2] font-light pt-2">
          Hora cierre : <span className="font-bold">8:00 p.m</span>
        </p>
      </BusinessAsideCard>

      {/* popular food */}
      <BusinessAsideCard
        title="Trending &nbsp;📈"
        containerCustomStyles="h-40 mt-5"
      >
        <div></div>
      </BusinessAsideCard>
    </aside>
  );
};

export default BusinessAsideBar;
