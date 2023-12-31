interface TituloProps {
  titulo: string;
  subtitulo: string;
}

export default function Titulo(props: TituloProps) {
  return (
    <div>
      <h1
        className={`
              font-black text-3xl text-gray-900 dark:text-white
            `}
      >
        {props.titulo}
      </h1>
      <h2
        className={`
              font-light text-xl text-gray-600 dark:text-gray-200
            `}
      >
        {props.subtitulo}
      </h2>
    </div>
  );
}
