import cn from "../../lib/utils";

const Container = ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={cn("mx-auto max-w-[1500px]  px-2 md:px-12 ", className)}
    >
      {children}
    </div>
  );
};

export default Container;
