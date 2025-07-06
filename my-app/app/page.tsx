// Components
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "./components/mode-toggle"
// Next
import Image from "next/image"
import Link from "next/link"
// Icons
import { ExternalLink, Github, Linkedin, Mail, Newspaper, Youtube } from "lucide-react"
// Shadcn
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default async function Home() {

  const getUser = async () => {
    const res = await fetch(`https://api.github.com/users/Berohlfs`, {
      next: {
        revalidate: 86400 // em segundos: 1 dia
      },
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    const user = await res.json() as User
    return user
  }

  const getYTChannel = async () => {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${process.env.GOOGLE_YOUTUBE_CHANNEL_ID}&key=${process.env.GOOGLE_YOUTUBE_KEY}`, {
      next: {
        revalidate: 86400 // em segundos: 1 dia
      }
    })
    const channel = await res.json() as Channel

    return channel
  }

  const user = await getUser()
  const channel = await getYTChannel()

  return (<>

    <header className={'flex justify-between p-3 items-center fixed top-0 w-full bg-background z-10 border-b'}>
      <div className={'flex items-center gap-2'}>
        <Image
          src={user.avatar_url}
          width={45}
          height={45}
          alt={'Profile Picture'}
          className={'rounded-full shadow border-3 border-primary'} />

        <div>
          <h2 className={'font-bold text-sm'}>
            Bernardo Rohlfs
          </h2>
          <p className={'text-muted-foreground text-xs flex items-center gap-1'}>
            <Mail size={13} />berohlfs@gmail.com
          </p>
        </div>

      </div>

      <ModeToggle />
    </header>

    <main className={'relative top-17 max-w-[1200px] mx-auto px-10 mb-10'}>

      <section id={'intro'} className={'flex flex-col lg:flex-row justify-center mt-5 items-center'}>

        <div className={'w-full lg:w-3/5 xl:w-4/5 text-center lg:text-left'}>
          <h1 className={'text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-extrabold flex flex-col mb-3 leading-10 md:leading-12 xl:leading-16'}>
            <span>HI, I&apos;M BERNARDO!</span>
            <span><span className={'text-primary'}>SOFTWARE</span> ENGINEER.</span>
          </h1>

          <p className={'text-muted-foreground mb-4'}>
            I enjoy learning about new subjects and understanding how things work. I&apos;ve long been drawn to the tech industry, where I find joy in creating fun and simple solutions to everyday problems. At the moment, I dedicate most of my time to <span className={'font-bold text-primary'}>full-stack web development</span>, system documentation, and project management. Looking ahead, I&apos;m excited to specialize in <span className={'font-bold text-primary'}>data science and AI</span>.
          </p>

          <nav className={'flex gap-2 mb-7 lg:mb-0 justify-center lg:justify-start flex-wrap'}>
            <Link href={'https://linkedin.com/in/bernardorohlfs'} target={'_blank'}>
              <Badge className={'bg-sky-600 text-white'}>
                <Linkedin />
                LinkedIn
                <ExternalLink />
              </Badge>
            </Link>
            <Link href={'https://github.com/Berohlfs'} target={'_blank'}>
              <Badge variant={'secondary'}>
                <Github />
                GitHub
                <ExternalLink />
              </Badge>
            </Link>
            <Link href={'https://www.youtube.com/@BrazilianBunker'} target={'_blank'}>
              <Badge className={'bg-red-500 text-white'}>
                <Youtube />
                YouTube
                <ExternalLink />
              </Badge>
            </Link>
            <Link href={'https://medium.com/@berohlfs'} target={'_blank'}>
              <Badge variant={'secondary'}>
                <Newspaper />
                Medium
                <ExternalLink />
              </Badge>
            </Link>
          </nav>

        </div>

        <div
          style={{
            width: 330,
            height: 330,
            maskImage: 'url(/mask-hexagon.svg)',
            WebkitMaskImage: 'url(/mask-hexagon.svg)',
            maskSize: 'cover',
            WebkitMaskSize: 'cover',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/bernardo-profile-bg.png"
            alt="Profile Picture"
            width={330}
            height={330}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </section>

      <Separator className={'mt-5'} />

      <h3 className={'my-5 ml-1 font-bold'}>
        Community
      </h3>

      <section id={'links'} className={'flex gap-4 flex-wrap'}>

        <Link href={'https://www.youtube.com/@BrazilianBunker'} target={'_blank'} className={'flex-1 min-w-[300px] hover:scale-101'}>
          <article className={'rounded-lg bg-card p-7 flex gap-5 items-center'}>
            <div className={'relative'}>
              <Image
                src={channel.items[0].snippet.thumbnails.default.url}
                alt="Profile Picture YouTube"
                width={80}
                height={80}
                className={'rounded-full h-24 w-24'}
              />

              <Badge className={'bg-red-500 text-white h-10 w-10 rounded-full absolute bottom-[-5px] right-[-5px]'}>
                <Youtube />
              </Badge>
            </div>

            <div>
              <h4 className={'mb-1'}>{channel.items[0].snippet.title}</h4>
              <p className={'text-sm text-muted-foreground'}>
                <span className={'font-bold text-primary'}>{channel.items[0].statistics.subscriberCount}</span> subscribers
              </p>
              <p className={'text-sm text-muted-foreground'}>
                <span className={'font-bold text-primary'}>{channel.items[0].statistics.viewCount}</span> total views
              </p>
              <p className={'text-sm text-muted-foreground'}>
                <span className={'font-bold text-primary'}>{channel.items[0].statistics.videoCount}</span> videos
              </p>
            </div>
          </article>
        </Link>

        <Link href={'https://github.com/Berohlfs'} target={'_blank'} className={'flex-1 min-w-[300px] hover:scale-101'}>
          <article className={'rounded-lg bg-card p-7 flex gap-5 items-center'}>
            <div className={'relative'}>
              <Image
                src={user.avatar_url}
                alt="Profile Picture GitHub"
                width={80}
                height={80}
                className={'rounded-full h-24 w-24'}
              />

              <Badge variant={'secondary'} className={'h-10 w-10 rounded-full absolute bottom-[-5px] right-[-5px]'}>
                <Github />
              </Badge>
            </div>

            <div>
              <h4 className={'mb-1'}>{user.login}</h4>
              <p className={'text-sm text-muted-foreground'}>
                <span className={'font-bold text-primary'}>{user.public_repos}</span> repositories
              </p>
              <p className={'text-sm text-muted-foreground'}>
                <span className={'font-bold text-primary'}>{user.followers}</span> followers
              </p>
              <p className={'text-sm text-muted-foreground'}>
                <span className={'font-bold text-primary'}>{user.following}</span> following
              </p>
            </div>
          </article>
        </Link>

      </section>

      <Separator className={'mt-5'} />

      <h3 className={'my-5 ml-1 font-bold'}>
        Certifications
      </h3>

      <section id={'links'} className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4'}>
        <article className={'flex flex-col h-48 justify-between items-center'}>
          <Image
            src={'/google.png'}
            alt="Google Logo"
            width={80}
            height={80}
            className={'w-24'}
          />
          <div className={'text-center'}>
            <h4 className={'text-sm mb-1'}>Google Project Management</h4>
            <p className={'text-muted-foreground text-xs'}>Professional Certificate</p>
            <Button size={'sm'} variant={'ghost'} asChild>
              <Link href={'https://www.coursera.org/account/accomplishments/professional-cert/certificate/AJB8NV4V7YMH'} target={'_blank'}>
                Certification
                <ExternalLink />
              </Link>
            </Button>
          </div>
        </article>

        <article className={'flex flex-col h-48 justify-between items-center'}>
          <Image
            src={'/meta.png'}
            alt="Meta Logo"
            width={80}
            height={80}
            className={'w-28'}
          />
          <div className={'text-center'}>
            <h4 className={'text-sm mb-1'}>Meta Front-End Developer</h4>
            <p className={'text-muted-foreground text-xs'}>Professional Certificate</p>
            <Button size={'sm'} variant={'ghost'} asChild>
              <Link href={'https://www.coursera.org/account/accomplishments/professional-cert/certificate/AJB8NV4V7YMH'} target={'_blank'}>
                Certification
                <ExternalLink />
              </Link>
            </Button>
          </div>
        </article>

        <article className={'flex flex-col h-48 justify-between items-center'}>
          <Image
            src={'/pmi.svg'}
            alt="Meta Logo"
            width={80}
            height={80}
            className={'w-24 dark:invert'}
          />
          <div className={'text-center'}>
            <h4 className={'text-sm mb-1'}>Certified Associate in Project Management</h4>
            <p className={'text-muted-foreground text-xs'}>In progress...</p>
            <Button size={'sm'} variant={'ghost'} asChild>
              <Link href={'https://www.coursera.org/account/accomplishments/professional-cert/certificate/AJB8NV4V7YMH'} target={'_blank'}>
                Certification
                <ExternalLink />
              </Link>
            </Button>
          </div>
        </article>
      </section>

    </main>

    <footer className="bg-card py-10 relative top-17">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
        <ul className="space-y-3">
          <li>
            berohlfs@gmail.com
          </li>
          <li>
            <Link href={'https://linkedin.com/in/bernardorohlfs'} target={'_blank'}>
              LinkedIn
            </Link>
          </li>
        </ul>

        <div className="mt-10 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bernardo Cruz Rohlfs.
        </div>
      </div>
    </footer>

  </>)
}

type User = {
  login: string, // "Berohlfs",
  id: number, // 90404673,
  node_id: string, // "MDQ6VXNlcjkwNDA0Njcz",
  avatar_url: string, // "https://avatars.githubusercontent.com/u/90404673?v=4",
  gravatar_id: string, // "",
  url: string, // "https://api.github.com/users/Berohlfs",
  html_url: string, // "https://github.com/Berohlfs",
  followers_url: string, // "https://api.github.com/users/Berohlfs/followers",
  following_url: string, // "https://api.github.com/users/Berohlfs/following{/other_user}",
  gists_url: string, // "https://api.github.com/users/Berohlfs/gists{/gist_id}",
  starred_url: string, // "https://api.github.com/users/Berohlfs/starred{/owner}{/repo}",
  subscriptions_url: string, // "https://api.github.com/users/Berohlfs/subscriptions",
  organizations_url: string, // "https://api.github.com/users/Berohlfs/orgs",
  repos_url: string, // "https://api.github.com/users/Berohlfs/repos",
  events_url: string, // "https://api.github.com/users/Berohlfs/events{/privacy}",
  received_events_url: string, // "https://api.github.com/users/Berohlfs/received_events",
  type: string, // "User",
  user_view_type: string, // "public",
  site_admin: boolean,
  name: string, // "Bernardo Cruz Rohlfs",
  company: string, // "Webimob Seguros Imobiliários",
  blog: string, // "",
  location: string, // "Belo Horizonte",
  email: string | null,
  hireable: string | null,
  bio: string, // "Software Engineering Student",
  twitter_username: string | null,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string, // "2021-09-09T15:11:00Z",
  updated_at: string, // "2025-06-26T11:38:58Z"
}

type Channel = {
  kind: string, // "youtube#channelListResponse",
  etag: string, // "pd_GicW72aGfU04YnKLo2wQHoy0",
  pageInfo: {
    totalResults: number, // 1,
    resultsPerPage: number, // 5
  },
  items: [
    {
      kind: string, // "youtube#channel",
      etag: string, // "tvgTbUPJx6M5TuACw389QIFN3hY",
      id: string, // "UCeYd75shMrx7jb8IEJXNTNg",
      snippet: {
        title: string, // "Brazilian Bunker",
        description: string, // "Welcome to Brazilian Bunker!\nHere we dive into the world of software. Whether you're coding your first line or exploring advanced tech, this is your spot to learn, build, and have fun.\n\nIt's great to have you here!\n",
        customUrl: string, // "@brazilianbunker",
        publishedAt: string, // "2025-06-28T18:13:11.245049Z",
        thumbnails: {
          default: {
            url: string, // "https://yt3.ggpht.com/Mmsvx5RQ89AAZ5vxshdzsW1WxeqXN2RSELc3hzGFQJSBqy7_aKoB4CHhK2QMc-l7zSI9cOkjow=s88-c-k-c0x00ffffff-no-rj",
            width: number, // 88,
            height: number, // 88
          },
          medium: {
            url: string, // "https://yt3.ggpht.com/Mmsvx5RQ89AAZ5vxshdzsW1WxeqXN2RSELc3hzGFQJSBqy7_aKoB4CHhK2QMc-l7zSI9cOkjow=s240-c-k-c0x00ffffff-no-rj",
            width: number, // 240,
            height: number, // 240
          },
          high: {
            url: string, // "https://yt3.ggpht.com/Mmsvx5RQ89AAZ5vxshdzsW1WxeqXN2RSELc3hzGFQJSBqy7_aKoB4CHhK2QMc-l7zSI9cOkjow=s800-c-k-c0x00ffffff-no-rj",
            width: number, // 800,
            height: number, // 800
          }
        },
        localized: {
          title: string, // "Brazilian Bunker",
          description: string, // "Welcome to Brazilian Bunker!\nHere we dive into the world of software. Whether you're coding your first line or exploring advanced tech, this is your spot to learn, build, and have fun.\n\nIt's great to have you here!\n"
        }
      },
      statistics: {
        viewCount: string, // "0",
        subscriberCount: string, // "0",
        hiddenSubscriberCount: boolean, // false,
        videoCount: string, // "0"
      }
    }
  ]
}