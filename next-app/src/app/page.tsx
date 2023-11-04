import { LinkBtn } from "../components/LinkBtn";

export default function Home() {
  return (
    <>
      <div className="h-10 bg-slate-900 text-2xl flex items-center pl-5 my-5">
        RBNA CONSULT
      </div>
      <div>
        <LinkBtn title={"Listar"} path={"/listar"} />
      </div>
    </>
  );
}
