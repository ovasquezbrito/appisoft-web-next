import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: 'Oduber Vasquez',
    },
    _id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://fastly.picsum.photos/id/937/200/300.jpg?hmac=e85ZMdNwmCfn1FopDunIZzaSxZC2-lC9qsLqb6V0xpQ',
    category: 'Robots',
    title: 'We Robots',
  }];

  return (
    <>
    <section className="pink_container">

      <h1 className="heading">Presenta tu startup, <br /> y conéctate con emprendedores</h1>
      <p className="sub-heading !max-w-3xl">Envíe ideas, vote propuestas y hágase notar en concursos virtuales.</p>
      <SearchForm query={query}/>
    </section>

    <section className="section-container">
      <p className="text-30-semibold">
        {query ? `Resultados de búsqueda para "${query}"` : 'Encuentra tu startup ideal'}
      </p>

      <ul className="mt-7 card_grid">
       {posts?.length > 0 ? (
          posts.map((post: StartupCardType) => (
            <StartupCard key={post?._id} post={post}/>
          ))
       ): (
        <p>No se encontraron resultados</p>)}
      </ul>
    </section>
    </>
  );
}
