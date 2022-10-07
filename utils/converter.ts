const convertPrice = (previousPrice: string): string => {
    const newPrice = parseInt(previousPrice).toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
    });

    return newPrice;
};

export default convertPrice;
