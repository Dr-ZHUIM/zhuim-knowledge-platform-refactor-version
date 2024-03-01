type PokemonOfficialWorkProps = {
  src: string;
  alt: string;
};

export default function PokemonOfficialWork({
  src,
  alt,
}: PokemonOfficialWorkProps) {
  return (
    <div className="bg-white flex flex-col items-center rounded-lg">
      <img className="pb-4" width="300" height="300" src={src} alt={alt} />
    </div>
  );
}

