import Link from "antd/es/typography/Link";
import { BackwardOutlined } from "@ant-design/icons";
export default function NotFound() {
  return (
    <div className="container px-2 pl-4">
      <h2 className="text-[46px] md:text-[5vw] my-0 py-0">Not Found</h2>
      <h3 className="text-[26px] md:text-[2vw] my-0 py-0">
        该URL下不存在任何内容
      </h3>
      <Link href="/blog">
        <h3 className="hover:text-[var(--color-muted)] duration-300 md:text-[4vw] mt-12 py-0">
          返回首页 <BackwardOutlined />
        </h3>
      </Link>
    </div>
  );
}

