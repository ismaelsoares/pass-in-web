import { ComponentProps } from "react";

//extender propriedades de um componente nativo do HTML "anchor"
//Generics basicamente diz para este componente herdas os atributos deste elemento nativo
interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}
export const NavLink = (props: NavLinkProps) => {
  return (
    <a {...props} href={props.href} className="text-sm font-medium">
      {props.children}
    </a>
  );
};
