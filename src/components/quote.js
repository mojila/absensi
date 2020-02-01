import React, { useState, useEffect } from 'react'
import quotes from 'quotesy'

function Quote() {
    const [quote, setQuote] = useState({ text: '', author: '' });

    useEffect(() => {
        setQuote(quotes.random())
    }, [setQuote])

    return <React.Fragment>
        <div className="text-white text-2xl w-1/4 text-center">
            "{quote.text}" - {quote.author}
        </div>
    </React.Fragment>
}

export default Quote