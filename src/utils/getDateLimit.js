export default function() {
    const currentYear = new Date().getFullYear();
    const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
    const currentDay = String(new Date().getDate()).padStart(2, "0");
    const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    return currentDate;
}