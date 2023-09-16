import { createContext, useContext, useMemo, useState } from "react";

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

function useBasketContext() {
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const increaseAdult = () => setAdultCount((adultCount) => adultCount + 1);
  const decreaseAdult = () => {
    setAdultCount((adultCount) => {
      if (adultCount > 0) {
        return adultCount - 1;
      }
      return adultCount;
    });
  };
  const changeAdult = (e) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    if (Number.isNaN(value) || value < 0) return;
    setAdultCount(value);
  };

  const increaseChildren = () =>
    setChildrenCount((childrenCount) => childrenCount + 1);
  const decreaseChildren = () => {
    setChildrenCount((childrenCount) => {
      if (childrenCount > 0) {
        return childrenCount - 1;
      }
      return childrenCount;
    });
  };
  const changeChildren = (e) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    if (Number.isNaN(value) || value < 0) return;
    setChildrenCount(value);
  };

  const total = useMemo(() => {
    return currencyFormatter.format(adultCount * 65 + childrenCount * 30);
  }, [adultCount, childrenCount]);

  const [booked, setBooked] = useState(false);

  return {
    adultCount,
    increaseAdult,
    decreaseAdult,
    changeAdult,
    childrenCount,
    increaseChildren,
    decreaseChildren,
    changeChildren,
    total,
    booked,
    setBooked,
  };
}

const BasketContext = createContext(null);

export function BasketProvider({ children }) {
  return (
    <BasketContext.Provider value={useBasketContext()}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}
