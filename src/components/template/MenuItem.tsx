import Link from "next/link";

interface MenuItemProps {
  url?: string;
  texto: string;
  icone: any;
  onClick?: (evento: any) => void;
  className?: string;
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarLink() {
    return (
      <div
        className={`
                    flex flex-col justify-center items-center
                    w-20 h-20 p-1
                    text-gray-600
                    ${props.className}
                `}
      >
        {props.icone}
        <span
          className={`
                        text-xs font-light 
                    `}
        >
          {props.texto}
        </span>
      </div>
    );
  }
  return (
    <li
      onClick={props.onClick}
      className={`
    hover:bg-gray-200
    cursor-pointer
    `}
    >
      {props.url ? (
        <Link href={props.url}>{renderizarLink()}</Link>
      ) : (
        renderizarLink()
      )}
    </li>
  );
}
