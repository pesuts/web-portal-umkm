"use client";

import { use } from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  console.log(id);
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default Page;
