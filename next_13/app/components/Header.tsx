import Link from "next/link"

export default function Header () {
    return (
        <nav>
            <div>
                <Link style={{fontFamily: 'var(--font-playfair)', color:'#DA2A52'}} href= "/">
                    link
                </Link>
            </div>
        </nav>
    )
}