import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "John Doe",
      },
      description: "This is a test post",
      image:
        "https://www.cio.com/wp-content/uploads/2025/02/3831192-0-93030100-1740387509-shutterstock_2482705481.jpg?quality=50&strip=all",
      category: "Robots",
      title: "Robots ova here",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Show your startup, <br />
          Connect with investors
        </h1>

        <p className="sub-heading !max-w-3xl">
          Present ideas, Vote on proposals, and Get cloud in virtual contests
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
