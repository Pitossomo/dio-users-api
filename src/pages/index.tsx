import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main">
        <h1>DIO Users API 🐲</h1>
        <a
          href={
            "https://dio-users.appspot.com/api/v1/skills?username=pedro_h_teles"
          }
        >
          Visite a página{" "}
        </a>
        <Image
          src="/skills-example.svg"
          alt="Skills Example"
          width={300}
          height={250}
        />
        <p>
          A descrição do projeto está no{" "}
          <a href={"https://github.com/Pitossomo/dio-users-api"}>
            repositório do Github
          </a>
        </p>
      </main>
    </>
  );
}
