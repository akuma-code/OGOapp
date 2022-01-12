const formater = new Intl.DateTimeFormat("ru-RU", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
});

const today = formater.format(new Date())