import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modo, setModo] = useState<"login" | "cadastro">("login");

  return (
    <div>
      <h1>Autenticação</h1>
      <AuthInput
        label="Email"
        valor={email}
        valorMudou={setEmail}
        tipo="email"
        obrigatorio
      />
      <AuthInput
        label="Senha"
        valor={senha}
        valorMudou={setSenha}
        tipo="password"
        obrigatorio
      />
    </div>
  );
}
