export default function (date) {
    const today = new Date();
    const deadline = new Date(date);

    const differenceInMilliseconds = deadline - today;
    const milisecondsToDayConverter = (1000 * 60 * 60 * 24)
    const differenceInDays = differenceInMilliseconds / milisecondsToDayConverter;

    return Math.ceil(differenceInDays);

};


