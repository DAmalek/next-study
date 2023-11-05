import { Header } from "@/components/Header";
import { LinkBtn } from "../components/LinkBtn";
import prisma from "@/db";

function getRegistration() {
  return prisma.registration.findMany();
}
export default async function Home() {
  const registrations = await getRegistration();

  return (
    <>
      <Header title="RBNA CONSULT" />
      <div>
        <LinkBtn title={"Registro"} path={"/register"} />
      </div>
      <ul>
        <li className="flex gap-3 justify-between">
          <div>nome</div>
          <div>email</div>
          <div>profissao</div>
          <div>salario</div>
        </li>
        {registrations.map((registration) => (
          <li className="flex gap-3 justify-between">
            <div>{registration.name}</div>
            <div>{registration.email}</div>
            <div>{registration.profession}</div>
            <div>{registration.salary}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
