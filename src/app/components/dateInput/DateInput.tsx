import { useEffect, useState } from "react";
const DateInput = () => {
    const [topDateValue, setTopDateValue] = useState('');
    const [bottomDateValue, setBottomDateValue] = useState('');
    const [dateDifference, setDateDifference] = useState('');

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        if (month < 10) {
            month = `0${month}`;
        }
        if (day < 10) {
            day = `0${day}`;
            const formattedToday = `${year}-${month}-${day}`;
            setBottomDateValue(formattedToday);
        }
    }, []);

    const handleChange = (e: any, inputType: any) => {
        const dateValue = e.target.value;
        if (inputType === 'top') {
            setTopDateValue(dateValue);
        } else {
            setBottomDateValue(dateValue);
        }
    };

    const calculate = () => {
        const topDate = new Date(topDateValue);
        const bottomDate = new Date(bottomDateValue);

        if (!isNaN(topDate.getTime()) && !isNaN(bottomDate.getTime())) {
            const timeDifference = bottomDate.getTime() - topDate.getTime();
            const daysDifference = timeDifference / (1000 * 3600 * 24);
            setDateDifference(`Difference : ${daysDifference} days`);
        } else {
            setDateDifference(`Invalid Dates`);
        }
    };

    return (
        <>
            <div>
                <input
                    type="date"
                    name="datetop"
                    id="datetop"
                    value={topDateValue}
                    onChange={(e) => handleChange(e, 'top')}
                />
                <input type="date"
                    name="datebottom"
                    id="datebottom"
                    value={bottomDateValue}
                    onChange={(e) => handleChange(e, 'bottom')}
                />
            </div>
            <button onClick={calculate}>Calculate</button>
            <p>{dateDifference}</p>
        </>
    );
};

export default DateInput;