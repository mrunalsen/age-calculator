import { useEffect, useState } from "react";
import Results from "./modal/Results";

const Dates = () => {
    const currentDate = new Date();
    const [topDateValue, setTopDateValue] = useState<Date | null>(null);
    const [bottomDateValue, setBottomDateValue] = useState<Date | null>(null);
    const [dateDifference, setDateDifference] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const today = new Date();
        setBottomDateValue(today);
    }, []);

    const handleChange = (date: Date, inputType: string) => {
        if (inputType === 'top') {
            setTopDateValue(date);
        } else {
            setBottomDateValue(date);
        }
    };
    const calculate = () => {
        if (topDateValue && bottomDateValue) {
            setShowModal(true);
            const timeDifference = bottomDateValue.getTime() - topDateValue.getTime();
            const daysDifference = timeDifference / (1000 * 3600 * 24);
            const yearDifference = daysDifference / 365;

            if (daysDifference > 365) {
                const roundedYears = Math.round(yearDifference);
                setDateDifference(`${roundedYears} ${roundedYears === 1 ? 'Year' : 'Years'}`);
            } else {
                const roundedDays = Math.round(daysDifference);
                setDateDifference(`${roundedDays} ${roundedDays === 1 ? 'Day' : 'Days'}`);
            }
        } else {
            setDateDifference(`Invalid Dates`);
        }
    };


    return (
        <>
            <div>
                <div className="flex justify-between">
                    <label htmlFor="datetop">Enter Date</label>
                    <input
                        type="date"
                        name="datetop"
                        id="datetop"
                        value={topDateValue ? topDateValue.toISOString().split('T')[0] : ''}
                        onChange={(e) => handleChange(new Date(e.target.value), 'top')}
                        className="outline-none text-rose-500 cursor-pointer rounded-sm p-1"
                    />
                </div>
                <div className="flex justify-between">
                    <label htmlFor="datebottom">Today</label>
                    <input
                        type="date"
                        name="datebottom"
                        id="datebottom"
                        value={bottomDateValue ? bottomDateValue.toISOString().split('T')[0] : ''}
                        onChange={(e) => handleChange(new Date(e.target.value), 'bottom')}
                        className="outline-none text-rose-500 cursor-pointer rounded-sm p-1"
                    />
                </div>
            </div>
            <button onClick={calculate}>Calculate</button>
            {showModal && (
                <Results
                    dateDifference={dateDifference}
                    topDateValue={topDateValue ? topDateValue.toISOString().split('T')[0] : ''}
                    topDate={topDateValue || new Date()}
                    currentDate={currentDate}
                />
            )}
        </>
    );
};

export default Dates;
