interface ButtonProps {
  text?: string
}

function MeuBotao({ text }: ButtonProps) {
  console.log(text)
  return <button className="p-5 bg-slate-500 gap-3">{text || "Olá mundo"}</button>
}
export function App() {

  return (
    <>
      <h1>Hello World</h1>
      <MeuBotao text="Clique aqui" />
      <MeuBotao text="Botão 2" />
      <MeuBotao />
    </>
  )
}

