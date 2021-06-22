import React from "react"
import "../styles/Frame.css"

function Frame({frame, stock, error}) {
    const abbreviateNumber = number => {
        if (number === null || number === 0) return "N/A"

        const buildNumber = (num) => {
            const numCommaSplit = num.split(",");
            return numCommaSplit[0] + "." + numCommaSplit[1]?.substr(0, 2)
        }

        const newNumber = buildNumber(number.toLocaleString())
        const numLength = number?.toString().length

        if (numLength > 12) return `${newNumber}T`
        if (numLength > 9)  return `${newNumber}B`
        if (numLength > 6)  return `${newNumber}M`
        if (numLength > 3)  return `${newNumber}K`

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
                <aside className="horizontal-divider"/>
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
                    <aside className="vertical-divider"/>
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