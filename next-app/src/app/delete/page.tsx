import { Header } from "@/components/Header";
import { LinkBtn } from "@/components/LinkBtn";
import prisma from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import { type } from "os";
import React from "react";

async function deleteRegistration(data: FormData) {
  "use server";
  const email = data.get("email")?.valueOf();
  if (typeof email !== "string" || email.length === 0) {
    throw new Error("email invalido");
  }

  await prisma.registration.deleteMany({ where: { email } });
  redirect("/");
}

export default function Delete() {
  return (
    <>
      <Header title="RBNA - Deletar um Registro" />
      <form action={deleteRegistration} className="flex flex-col gap-3">
        <input
          className="border border-slate-300 bg-transparent rounded px-2 py-1 focus-within:border-slate-100 "
          placeholder="E-mail"
          name="email"
          type="text"
        />
        <div className="flex gap-2 justify-start">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 bg-red-800 px-2 py-1 rounded hover:bg-red-700 focus-within:bg-slate-700 outline-none"
          >
            Deletar
          </button>
        </div>
      </form>
    </>
  );
}
