import { ArrowRight, Share2 } from "lucide-react"
import { useParams } from "react-router-dom"
import { toast } from "sonner"
import amaLogo from '../assets/ama-logo.svg'
import { Message } from "../components/message"

export function Room() {

  const { roomId } = useParams()

  function handleShareRoom() {
    const url = window.location.href.toString()

    if(navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url })
    } else {
      navigator.clipboard.writeText(url)
    }
    toast.info('the room URL was copied to your clipboard')
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="AMA" className="h-5"/>
        <span className="text-sm text-zinc-500 truncate">
          Código da sala: <span className="text-zinc-300">{roomId}</span>
        </span>

        <button
        type='submit'
        className='ml-auto bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-zinc-700'
        onClick={handleShareRoom}>
            Compartilhar
            <Share2 className='size-4'/>
          </button>
      </div>
      <div className="h-px w-full bg-zinc-900"/>

      <form
        className='flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1'>
          <input
          type="text"
          name="theme"
          autoComplete='off'
          placeholder='Qual a sua pergunta?'
          className='flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500'
          />
          <button
          type='submit'
          className='bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500'>
            Criar pergunta
          <ArrowRight className='size-4'/>
          </button>
        </form>

        <ol className="list-decimal list-outside px-3 space-y-8">
          <Message text="O que é GoLang e quais suas principais vantagens em comparação com outras linguagens de programação como Python, Java e C++?" amountOfReactions={123}/>
          <Message answered text="O que é GoLang e quais suas principais vantagens em comparação com outras linguagens de programação como Python, Java e C++?" amountOfReactions={123}/>
        </ol>
    </div>
  )
}