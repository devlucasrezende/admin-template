import { IconeAjustes, IconeAlerta, IconeCasa } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

export default function MenuLateral(){
    return (
        <aside>
          <div className={`
            flex flex-col items-center justify-center
            h-20 w-20 
            bg-gradient-to-r 
            from-indigo-500 
            via-blue-600 
            to-purple-800
          `}>
            <Logo />
          </div>
           <ul>
            <MenuItem url="/" texto="Início" icone={IconeCasa}/>
            <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
            <MenuItem url="/notificacoes" texto="Notificacoes" icone={IconeAlerta} />
           </ul>
 
       </aside>
    )
}
