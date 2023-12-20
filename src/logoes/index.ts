import { ReactComponent as BKN } from '../assets/BKN.svg'
import { ReactComponent as BOS } from '../assets/BOS.svg'
import { ReactComponent as CHI } from '../assets/CHI.svg'
import { ReactComponent as CLE } from '../assets/CLE.svg'
import { ReactComponent as DET } from '../assets/DET.svg'
import { ReactComponent as IND } from '../assets/IND.svg'
import { ReactComponent as MIL } from '../assets/MIL.svg'
import { ReactComponent as NYK } from '../assets/NYK.svg'
import { ReactComponent as PHI } from '../assets/PHI.svg'
import { ReactComponent as ATL } from '../assets/ATL.svg'
import { ReactComponent as CHA } from '../assets/CHA.svg'
import { ReactComponent as DAL } from '../assets/DAL.svg'
import { ReactComponent as DEN } from '../assets/DEN.svg'
import { ReactComponent as GSW } from '../assets/GSW.svg'
import { ReactComponent as HOU } from '../assets/HOU.svg'
import { ReactComponent as LAC } from '../assets/LAC.svg'
import { ReactComponent as LAL } from '../assets/LAL.svg'
import { ReactComponent as MEM } from '../assets/MEM.svg'
import { ReactComponent as MIA } from '../assets/MIA.svg'
import { ReactComponent as MIN } from '../assets/MIN.svg'
import { ReactComponent as NOP } from '../assets/NOP.svg'
import { ReactComponent as OKC } from '../assets/OKC.svg'
import { ReactComponent as ORL } from '../assets/ORL.svg'
import { ReactComponent as PHX } from '../assets/PHX.svg'
import { ReactComponent as POR } from '../assets/POR.svg'
import { ReactComponent as SAC } from '../assets/SAC.svg'
import { ReactComponent as SAS } from '../assets/SAS.svg'
import { ReactComponent as TOR } from '../assets/TOR.svg'
import { ReactComponent as UTA } from '../assets/UTA.svg'
import { ReactComponent as WAS } from '../assets/WAS.svg'

export { ReactComponent as NBA } from '../assets/NBA.svg'

export const logoes = {
    BOS,
    BKN,
    CHI,
    CLE,
    DET,
    IND,
    MIL,
    NYK,
    PHI,
    TOR,
    ATL,
    CHA,
    DAL,
    DEN,
    GSW,
    HOU,
    LAC,
    LAL,
    MEM,
    MIA,
    MIN,
    NOP,
    OKC,
    ORL,
    PHX,
    POR,
    SAC,
    SAS,
    UTA,
    WAS
}

export type TeamAbbreviation = keyof typeof logoes

export const getTeamLogo = (abbreviation: TeamAbbreviation):  React.FC<React.SVGProps<SVGSVGElement>> => logoes[abbreviation]

