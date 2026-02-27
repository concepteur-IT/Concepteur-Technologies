import Link from 'next/link'
import React from 'react'

const LetsTalkBtn = () => {
    return (
        <div>
            <Link
                href="/contact"
                className="bg-black text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors duration-200"
            >
                {'Let\'s Talk'}
            </Link>
        </div>
    )
}

export default LetsTalkBtn