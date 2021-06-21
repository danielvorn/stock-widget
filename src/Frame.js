import React from 'react';
import './Frame.css'

function Frame({frame}) {
    return (
        frame ? <section><span className="search-tip">Search stock by ticker symbol</span></section> :
            <div className="grid-container">
            <div className="frame">
                <header>
                    <div>
                        <li>AAPL</li>
                        <li>Apple Inc.</li>
                    </div>
                    <div>
                        <li>134.29</li>
                        {/*<li>-1.10 (0.81%) ↓</li>*/}
                        <li>+1.10 (0.81%) ↑</li>
                    </div>
                </header>
                <section className="data-section-one">
                    <div>
                        <li>Mkt Cap</li>
                        <li>P/E ratio</li>
                        <li>Avg volume</li>
                    </div>
                    <aside>
                        <div className="section-divider"/>
                    </aside>
                    <div>
                        <li>2.25T</li>
                        <li>28.68</li>
                        <li>103.95 M</li>
                    </div>
                </section>
                <section className="data-section-two">
                    <div>
                        <li>Prev Close</li>
                        <li>52-wk high</li>
                        <li>52-wk low</li>
                    </div>
                    <div>
                        <li>2.25T</li>
                        <li>145.09</li>
                        <li>53.15</li>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Frame;