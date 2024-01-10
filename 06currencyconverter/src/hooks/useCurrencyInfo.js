import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({});

    // fetching the currency api
    useEffect(() => {
        // converting response (str) into json format
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res) => res.json()).then((res) => setCurrencyInfo(res[currency]))
        // storing it into currencyInfo variable
    }, [currency])

    // returning the total fetched data
    return currencyInfo

}

// exporting the whole (hook) data
export default useCurrencyInfo;