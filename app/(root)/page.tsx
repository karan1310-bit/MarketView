import TradingViewWidget from "@/components/TradingViewWidget";
import {
    HEATMAP_WIDGET_CONFIG,
    MARKET_DATA_WIDGET_CONFIG,
    MARKET_OVERVIEW_WIDGET_CONFIG,
    TOP_STORIES_WIDGET_CONFIG
} from "@/lib/constants";


const Home = () => {
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

    return (
      <main>
        <div className="flex flex-col items-center justify-center text-center px-4 py-2 mb-12 md:mb-16 md:py-4 gap-7">
        <div className="max-w-4xl text-center  space-y-6 md:space-y-6 relative">
          <h1 className="text-4xl md:text-7xl font-DMbold text-gray-500 leading-none">
            Trade Smarter <br /> Amplify Your Gains!
          </h1>
          <p className="text-lg text-center max-w-2xl leading-snug md:text-xl font-DMregular text-gray-500">
            Track real-time prices, manage watchlists, and power your strategy with event-driven alerts and AI-driven sentiment analysis.
          </p>
        </div></div>
      
        <div className="flex min-h-screen home-wrapper font-DMsemi">
          <section className="grid w-full gap-8 home-section">
              <div className="md:col-span-1 xl:col-span-1">
                  <TradingViewWidget
                    title="Market Overview"
                    scriptUrl={`${scriptUrl}market-overview.js`}
                    config={MARKET_OVERVIEW_WIDGET_CONFIG}
                    className="custom-chart"
                    height={600}
                  />
              </div>
              <div className="md-col-span xl:col-span-2">
                  <TradingViewWidget
                      title="Bitcoin Chart"
                      scriptUrl={`${scriptUrl}advanced-chart.js`}
                      config={HEATMAP_WIDGET_CONFIG}
                      height={600}
                  />
              </div>
          </section>
            <section className="grid w-full mt-4 md:mt-0 gap-8 home-section">
                <div className="h-full md:col-span-1 xl:col-span-1">
                    <TradingViewWidget
                        scriptUrl={`${scriptUrl}timeline.js`}
                        config={TOP_STORIES_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
                <div className="h-full md:col-span-1 xl:col-span-2">
                    <TradingViewWidget
                        scriptUrl={`${scriptUrl}market-quotes.js`}
                        config={MARKET_DATA_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
            </section>
        </div>
        </main>
    )
}

export default Home;