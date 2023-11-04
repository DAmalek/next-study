import { Header } from "@/components/Header";
import { LinkBtn } from "@/components/LinkBtn";
import React from "react";

function Register() {
  return (
    <>
      <Header title="Registro" />
      <form className="flex flex-col gap-3">
        <input
          className="border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 "
          placeholder="Nome"
          id="nome"
          type="text"
        />
        <input
          className="border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 "
          placeholder="Email"
          id="email"
          type="text"
        />
        <input
          className="border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 "
          placeholder="Profissão"
          id="profissao"
          type="text"
        />
        <input
          className="border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 "
          placeholder="Salário"
          id="salario"
          type="text"
        />
        <button
          className="border border-slate-300 px-2 py-1 rounded  hover:bg-slate-700 focus-within:bg-slate-700 outline-none mt-6"
          type="submit"
        >
          Registrar
        </button>
        <LinkBtn title="Voltar" path="/" />
      </form>
    </>
  );
}

export default Register;
