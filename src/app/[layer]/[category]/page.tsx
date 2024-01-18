type Params = {
  params: {
    category: string;
  };
};

export default function ArticleListDifferCategory({
  params: { category },
}: Params) {
  return <div>{category}</div>;
}

