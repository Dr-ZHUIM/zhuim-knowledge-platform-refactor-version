import { calcLightenColor } from "../../utils";
type PokemonPropProps = {
  backgroundColor: string;
  title: string;
  content: React.ReactNode;
};

export default function PokemonProp({
  backgroundColor,
  content,
  title,
}: PokemonPropProps) {
  return (
    <div
      style={{
        backgroundColor,
      }}
      className="flex flex-col items-center px-1 py-2 rounded-lg"
    >
      <div className="font-bold">{title}</div>
      <div className="w-full">{content}</div>
    </div>
  );
}

