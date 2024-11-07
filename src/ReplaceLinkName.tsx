import Async from 'react-async';

const getPage = async({ id }: any) => {
  const res = await fetch(`/_api/v3/page?pageId=${id}`);
  const json = await res.json();
  const { page } = json;
  const ary = page.path.split('/');
  // get last element
  return ary[ary.length - 1];
};

export const replaceLinkName = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, ...props }) => {
    const { href } = props;
    try {
      if (href.match(/^\//)) {
        return <Tag {...props}>{children}</Tag>;
      }
      if (href !== children) {
        return <Tag {...props}>{children}</Tag>;
      }
      const url = new URL(href);
      if (url.hostname !== window.location.hostname) {
        return <Tag {...props}>{children}</Tag>;
      }
      const id = url.pathname.replace(/^\//, '');
      return <Async promiseFn={getPage} id={id}>
        {({ data, error, isPending }) => {
          if (isPending) return 'Loading...';
          if (error) return `Something went wrong: ${error.message}`;
          if (data) {
            return <Tag {...props}>{data}</Tag>;
          }
        }}
      </Async>;
    }
    catch (err) {
      console.error(err);
    }
    // Return the original component if an error occurs
    return (
      <Tag {...props}>{children}</Tag>
    );
  };
};
