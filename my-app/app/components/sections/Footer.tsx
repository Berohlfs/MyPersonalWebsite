// Next
import Link from "next/link"

export const Footer = () => {
    return (
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
    )
}