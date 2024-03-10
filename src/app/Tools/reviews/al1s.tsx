import { Review } from "@/components";

export function Al1sReview() {
  return (
    <Review
      backgroundImage={{
        src: "/blog/tools/aris/chara1.png",
        position: "right -125px top 0",
      }}
      href={"/Tools/AL-1S"}
      title={"爱丽丝 - 邦邦咔邦模拟器"}
      content={
        <>
          <div className="mt-[20px] pt-0">聆听二次元的声音</div>
          <div className="mt-[20px] pt-0">邦邦咔邦!</div>
        </>
      }
    />
  );
}

