import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export const Header = () => {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="nlv unite icon" />
      <nav className='flex gap-5 item-center'>
        <a href="" className='text-sm font-medium text-zinc-300'>Eventos</a>
        <a href="" className='text-sm font-medium'>Participantes</a>
      </nav>
    </div>
  )
}