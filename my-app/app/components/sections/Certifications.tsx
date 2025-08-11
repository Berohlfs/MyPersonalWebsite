// Next
import Image from "next/image"
import Link from "next/link"
// Icons
import { ExternalLink, FileQuestionMark } from "lucide-react"
// Shadcn
import { Button } from "@/components/ui/button"

export const Certifications = () => {

    const certificates = [
        { title: 'Meta Front-End Developer', description: 'Professional Certificate', link: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/AJB8NV4V7YMH', image: '/meta.png' },
        { title: 'Google Project Management', description: 'In progress...', link: '', image: '/google.png' },
        { title: 'Certified Associate in Project Management', description: 'In progress...', link: '', image: '/pmi.svg' }
    ]

    return (<>
        <section className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'}>

            {certificates.map(item => (
                <article key={item.title} className={'flex flex-col h-48 justify-between items-center'}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className={'w-24'}
                    />
                    <div className={'text-center'}>
                        <h4 className={'text-sm mb-1'}>{item.title}</h4>
                        <p className={'text-muted-foreground text-xs mb-2'}>{item.description}</p>
                        {item.link ?
                            <Button size={'sm'} variant={'ghost'} asChild>
                                <Link href={item.link} target={'_blank'}>
                                    Certification
                                    <ExternalLink />
                                </Link>
                            </Button> :

                            <Button size={'sm'} variant={'ghost'}>
                                Pending
                                <FileQuestionMark />
                            </Button>}
                    </div>
                </article>
            ))}
        </section>
    </>)
}