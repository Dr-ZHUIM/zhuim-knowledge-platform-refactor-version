type PokemonInfoProps = {
  primaryColor: string;
  lightenColor: string;
};

export default function PokemonInfo({
  primaryColor,
  lightenColor,
}: PokemonInfoProps) {
  return (
    <div
      style={{
        backgroundColor: primaryColor,
      }}
      className="flex flex-1 flex-col gap-2 rounded-lg p-2"
    ></div>
  );
}

