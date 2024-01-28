import * as Reviews from "./reviews";

export default function ToolsPage() {
  return (
    <>
      <title>Tools</title>
      <h1 className="px-8 mb-12">Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 justify-between justify-items-stretch">
        <Reviews.Al1sReview />
        <Reviews.PokemonReview />
      </div>
    </>
  );
}

