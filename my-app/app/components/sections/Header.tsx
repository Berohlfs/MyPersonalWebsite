// Next
import Image from "next/image"
// Icons
import { Mail } from "lucide-react"
// Components
import { ModeToggle } from "../mode-toggle"

type Props = {
    avatar_url: string
}

export const Header = ({ avatar_url }: Props) => {
    return (
        <header className={'flex justify-between p-3 items-center fixed top-0 w-full bg-background z-10 border-b'}>
            <div className={'flex items-center gap-2'}>
                <Image
                    src={avatar_url}
                    width={45}
                    height={45}
                    alt={'Profile Picture'}
                    className={'rounded-full shadow border-3 border-primary'} />
                <div>
                    <p className={'text-sm'}>
                        <strong>Bernardo Rohlfs</strong>
                    </p>
                    <p className={'text-muted-foreground text-xs flex items-center gap-1'}>
                        <Mail size={13} />berohlfs@gmail.com
                    </p>
                </div>
            </div>

            <ModeToggle />
        </header>
    )
}