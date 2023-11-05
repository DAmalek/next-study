import { Header } from "@/components/Header";
import { LinkBtn } from "@/components/LinkBtn";
import prisma from "@/db";
import { Prisma, registration } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

async function createRegistration(data: FormData) {
  "use server";
  // type clientResgistration = Omit<
  //   registration,
  //   "id" | "createdAt" | "updatedAt"
  // >;
  type ResModel = {
    name: string | undefined | object;
    email: string | undefined | object;
    profession: string | undefined | object;
    salary: number | undefined | object;
  };
  const name = data.get("nome")?.valueOf();
  const profession = data.get("profissao")?.valueOf();
  const email = data.get("email")?.valueOf();
  const salary = Number(data.get("salario")?.valueOf());
  const registro: ResModel = {
    name,
    email,
    profession,
    salary,
  };

  await prisma.registration.create({ data: registro });

  console.log(registro);
  redirect("/");
}

function Register() {
  return (
    <>
      <Header title="Registro" />
      <form action={createRegistration} className="flex flex-col gap-3">
        <input
          className="border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 "
          placeholder="Nome"
          name="nome"
          type="text"
        />
        <input
          className="border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 "
          placeholder="Email"
          name="email"
          type="text"
        />
        <input
          className="border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 "
          placeholder="Profissão"
          name="profissao"
          type="text"
        />
        <input
          className="border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 "
          placeholder="Salário"
          name="salario"
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
