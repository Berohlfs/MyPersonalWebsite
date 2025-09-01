// Next
import Link from "next/link"
// Shadcn
import { Button } from "@/components/ui/button"
// Icons
import { Eye } from "lucide-react"
// Libs
import dayjs from 'dayjs'

type Props = {
    articles: {
        title: string | undefined;
        link: string | undefined;
        description: string;
        pubDate: string | undefined;
    }[]
}

export const MediumArticles = ({ articles }: Props) => {
    return (
        <section id={'links'} className={'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
            {articles.map(item => (
                <article className={'rounded-lg bg-card p-5 border-l-6 border-primary flex flex-col justify-between'} key={item.title}>
                    <div>
                        <h1 className={'font-medium mb-4'}>{item.title}</h1>
                        <p className={'text-sm mb-4'}>{item.description}</p>
                    </div>
                    <div className={'flex justify-between items-center'}>
                        <p className={'text-xs text-muted-foreground'}>Date: {dayjs(item.pubDate).format('MM/DD/YYYY')}</p>
                        <Link href={item.link || ''} target={'_blank'}>
                            <Button size={'sm'} variant={'outline'}>
                                Read full article <Eye />
                            </Button>
                        </Link>
                    </div>
                </article>
            ))}
        </section>
    )
}