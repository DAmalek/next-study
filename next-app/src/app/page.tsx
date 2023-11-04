import { Header } from "@/components/Header";
import { LinkBtn } from "../components/LinkBtn";

export default function Home() {
  return (
    <>
      <Header title="RBNA CONSULT" />
      <div>
        <LinkBtn title={"Registro"} path={"/register"} />
      </div>
    </>
  );
}
