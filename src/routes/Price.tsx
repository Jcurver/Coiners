import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import ApexChart from "react-apexcharts";
import { useState } from "react";
import styled from "styled-components";
const CoinPrice = styled.div`
  white-space: pre-wrap;
`

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface ChartProps {
  coinId: string;
}




function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 10000,
    }
  );


  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <CoinPrice>
        ath_date: ${data?.quotes.USD.percent_change_15m} <br/>
        ath_price: ${data?.quotes.USD.percent_change_15m}<br/>
        market_cap: ${data?.quotes.USD.percent_change_15m}<br/>
        market_cap_change_24h: ${data?.quotes.USD.percent_change_15m}<br/>
        percent_change_1h: ${data?.quotes.USD.percent_change_1h}<br/>
        percent_change_1y: ${data?.quotes.USD.percent_change_1y}<br/>
        percent_change_6h: ${data?.quotes.USD.percent_change_6h}<br/>
        percent_change_7d: ${data?.quotes.USD.percent_change_7d}<br/>
        percent_change_12h: ${data?.quotes.USD.percent_change_12h}<br/>
        percent_change_15m: ${data?.quotes.USD.percent_change_15m}<br/>
        percent_change_24h: ${data?.quotes.USD.percent_change_24h}<br/>
        percent_change_30d: ${data?.quotes.USD.percent_change_30d}<br/>
        percent_change_30m: ${data?.quotes.USD.percent_change_30m}<br/>
        percent_from_price_ath: ${data?.quotes.USD.percent_from_price_ath}<br/>
        volume_24h: ${data?.quotes.USD.volume_24h}<br/>
        volume_24h_change_24h: ${data?.quotes.USD.volume_24h_change_24h}
        </CoinPrice>

      )}
    </div>
  );
}

export default Price;
