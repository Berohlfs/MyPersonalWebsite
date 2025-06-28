// Components
import { ModeToggle } from "./components/mode-toggle"

export default function Home() {
  return (<>

    <header className={'flex justify-between p-2 px-4 border-b items-center'}>
      <h1 className={'font-medium'}>
        Bernardo Rohlfs
      </h1>
      <ModeToggle />
    </header>

    <main>


    </main>

  </>)
}
