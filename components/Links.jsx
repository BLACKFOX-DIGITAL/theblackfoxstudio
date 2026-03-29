import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <div className="pt-5 space-x-2 ">
      <Link href={`/portfolio`} className="btn-brand-primary ">
        VIEW GALLERY
      </Link>
      <Link href={`/take-free-trial`} className="btn-brand-primary ">
        FREE TRIAL
      </Link>
    </div>
  );
};

export default Links;
