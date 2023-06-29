import Conteudo from "../components/template/Conteudo";
import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você irá gerenciar suas notificações"
    >
      <h3>Aqui você irá ver suas notificações</h3>
    </Layout>
  );
}
