import { IconeAjustes, IconeAlerta, IconeCasa, IconeSair } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className={`flex flex-col`}>
      <div
        className={`
            flex flex-col items-center justify-center
            h-20 w-20 
            bg-gradient-to-r 
            from-indigo-500 
            via-blue-600 
            to-purple-800
          `}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem
          url="/notificacoes"
          texto="Notificacoes"
          icone={IconeAlerta}
        />
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log("logout")}
          texto="Sair"
          icone={IconeSair}
          className={`
            text-red-600
            hover:bg-red-400 hover:text-white
          `}
        />
      </ul>
    </aside>
  );
}
