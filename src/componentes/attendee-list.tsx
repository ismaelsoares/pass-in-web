import { MoreHorizontal, Search } from 'lucide-react'

export const AttendeeList = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold">Participantes</div>
        <div className="px-3 py-1.5 border w-72 border-white/10 items-center text-sm rounded-lg gap-3 flex">
          <Search className='size-4 text-emerald-300' />
          <input
            className="flex-1 bg-transparent outline-none"
            type="text"
            placeholder="Buscar participante..."
          />
        </div>
      </div>
      <div className='border rounded-lg border-white/10'>

        <table className='w-full'>
          <thead>
            <tr className='border-b border-white/10 '>
              <th style={{ width: 48 }} className='px-4 py-3 text-sm font-semibold text-left'>
                <input type="checkbox" />
              </th>
              <th className='px-4 py-3 text-sm font-semibold text-left'>Código</th>
              <th className='px-4 py-3 text-sm font-semibold text-left'>Participante</th>
              <th className='px-4 py-3 text-sm font-semibold text-left'>Data de Inscrição</th>
              <th className='px-4 py-3 text-sm font-semibold text-left'>Data do check-in</th>
              <th style={{ width: 64 }} className='px-4 py-3 text-sm font-semibold text-left'></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr key={i} className='border-b border-white/10'>
                  <td className='px-4 py-3 text-sm text-zinc-300'>
                    <input type="checkbox" />
                  </td>
                  <td className='px-4 py-3 text-sm text-zinc-300'>123285</td>
                  <td className='px-4 py-3 text-sm text-zinc-300'>
                    <div className='flex flex-col gap-1'>
                      <span className='font-semibold text-white'>Ismael Soares Doria</span>
                      <span>ismaelsoaresdoria@gmail.com</span>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm text-zinc-300'>7 dias atrás</td>
                  <td className='px-4 py-3 text-sm text-zinc-300'>3 dias atrás</td>
                  <td className='px-4 py-3 text-sm text-zinc-300'>
                    <button className='border rounded-md border-white/10 bg-black/20 p-1.5'>
                      <MoreHorizontal className='size-4' />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className='px-4 py-3 text-sm text-zinc-300' colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td className='px-4 py-3 text-sm text-right text-zinc-300' colSpan={3}>
                Página 1 de 23
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
