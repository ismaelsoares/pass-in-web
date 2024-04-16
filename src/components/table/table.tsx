import { ComponentProps } from "react";

interface TableProps extends ComponentProps<"table"> {}

export const Table = (props: TableProps) => {
  return (
    <div className="border rounded-lg border-white/10">
      <table {...props} className="w-full" />
    </div>
  );
};
