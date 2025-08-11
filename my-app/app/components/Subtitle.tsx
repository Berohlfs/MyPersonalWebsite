// Shadcn
import { Separator } from "@/components/ui/separator"
// Icons
import { LucideIcon } from "lucide-react"

type Props = {
    title: string
    Icon: LucideIcon
}

export const Subtitle = ({ title, Icon }: Props) => {
    return (
        <>
            <Separator className={'my-5'} />

            <h2 className={'mb-5 font-bold flex items-center gap-2'}>
                <Icon size={16} /> {title}
            </h2>
        </>
    )
}