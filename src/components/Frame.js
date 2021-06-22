import React from "react"
import "../styles/Frame.css"

function Frame({frame, stock, error}) {
    const abbreviateNumber = number => {
        const numLength = number?.toString().length
        const numLeftOfDecimal = number?.toLocaleString().split(",")[0]
        const numRightOfDecimal = number?.toLocaleString().split(",")[1]
        const abbreviatedNum = numLeftOfDecimal + "." + numRightOfDecimal?.substr(0, 2)

        if (numLength > 12) return `${abbreviatedNum}T`

        if (numLength > 9) return `${abbreviatedNum}B`

        if (numLength > 6) return `${abbreviatedNum}M`

        if (numLength > 3) return `${abbreviatedNum}K`

        return number
    }

    const priceDecreased = (num) => num.toString().charAt(0) === "-"


    if (frame) {
        return <div className="grid-container">

            <div className="frame">
                <header>
                    <div>
                        <li>{stock.symbol}</li>
                        <li>{stock.companyName}</li>
                    </div>
                    <div>
                        <li>{stock.latestPrice}</li>
                        { priceDecreased(stock.change)
                        ? <li className="price price-decrease">{stock.change} ({stock.changePercent}%) ↓</li>
                        : <li className="price price-increase">+{stock.change} ({stock.changePercent}%) ↑</li>}
                    </div>
                <nav></nav>
                </header>

                <section className="data-section-one">
                    <div>
                        <li>Mkt Cap</li>
                        <li>P/E ratio</li>
                        <li>Avg volume</li>
                    </div>
                    <div>
                        <li>{abbreviateNumber(stock.marketCap)}</li>
                        <li>{stock.peRatio ? stock.peRatio : "N/A"}</li>
                        <li>{abbreviateNumber(stock.avgTotalVolume)}</li>
                    </div>

                </section>

                <section className="data-section-two">
                    <article></article>
                    <div>
                        <li>Prev Close</li>
                        <li>52-wk high</li>
                        <li>52-wk low</li>
                    </div>
                    <div>
                        <li>{stock.previousClose}</li>
                        <li>{stock.week52High}</li>
                        <li>{stock.week52Low}</li>
                    </div>
                </section>
            </div>

        </div>
    }

    if (error) return <p><span className="search-tip">Invalid ticker symbol</span></p>

    return <p><span className="search-tip">Search stock by ticker symbol</span></p>
}

export default Frame