import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import { NavLink } from "./nav-link";

export const Header = () => {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="nlv unite icon" />
      <nav className="flex gap-5 item-center">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  );
};
