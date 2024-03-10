import { Metadata } from "next";
import Image from "next/image";
import TriggerButton from "./trigger";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome To Aris",
};

export default function Page() {
  return (
    <div>
      <div className="w-full overflow-x-hidden relative text-center pt-4 pb-6 bg-[var(--color-muted-background)]">
        <div className="z-[2]">
          <div className="flex justify-center items-end">
            <h4 className="font-bold p-0 my-0 mr-2">Welcome To Aris</h4>
            <Image
              src="/blog/tools/aris/move2.gif"
              width={50}
              height={50}
              alt="move1"
            />
          </div>
          <h5 className="font-bold  p-0 my-6 mr-2">
            为爱丽丝编写的页面，对，就是那个最可爱的《蔚蓝档案》角色！
          </h5>
        </div>
        <div className="absolute right-0 top-0 w-full grid grid-flow-col h-full">
          <div
            className="w-full h-full pointer-events-none bg-no-repeat bg-contain bg-left-bottom opacity-40"
            style={{
              backgroundImage: `url(/blog/tools/aris/chara2.png)`,
            }}
          />
          <div
            className="w-full h-full pointer-events-none bg-no-repeat bg-contain bg-right-bottom opacity-40"
            style={{
              backgroundImage: `url(/blog/tools/aris/chara1.png)`,
            }}
          />
        </div>
        <TriggerButton />
      </div>
      <div className="flex flex-col items-center">
        <h6>
          感谢灵感：
          <Link href="https://alan-shangmike.github.io/Sping_Aris_github.io/">
            邦卡卡邦
          </Link>
        </h6>
        <h6>所以说，二次元真的难顶😂</h6>
      </div>
    </div>
  );
}

