const { default: Link } = require("next/link");

const URLWrapper = ({ children, url }) => {
  const { ele } = children?.props;

  return (
    <Link className="block" href={url ?? ele?.url}>
      {children}
    </Link>
  );
};

export default URLWrapper;
