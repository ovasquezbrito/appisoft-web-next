import SearchForm from "@/components/SearchForm";


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;
  return (
    <>
    <section className="pink_container">

      <h1 className="heading">Presenta tu startup, <br /> y conéctate con emprendedores</h1>
      <p className="sub-heading !max-w-3xl">Envíe ideas, vote propuestas y hágase notar en concursos virtuales.</p>
      <SearchForm query={query}/>
    </section>
    </>
  );
}
