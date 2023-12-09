interface Props {
    dateDifference: string;
    topDateValue: string;
    currentDate: Date;
    topDate: Date;
}

const Results: React.FC<Props> = ({ dateDifference, currentDate, topDate }) => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDay = topDate.getDay();
    const dayName = dayNames[selectedDay];

    const nextBirthday = new Date(currentDate.getFullYear(), topDate.getMonth(), topDate.getDate());
    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const timeDifference = nextBirthday.getTime() - currentDate.getTime();
    const daysUntilBirthday = Math.ceil(timeDifference / (1000 * 3600 * 24));
    const monthsUntilBirthday = Math.floor(daysUntilBirthday / 30);
    const remainingDays = daysUntilBirthday % 30;

    const totalMonths = Math.floor(dateDifference.includes('Year') ? parseInt(dateDifference.replace(/\D/g, '')) * 12 : 0);
    const totalDays = dateDifference.includes('Year') ? parseInt(dateDifference.replace(/\D/g, '')) * 365 : parseInt(dateDifference.replace(/\D/g, ''));
    const totalWeeks = Math.floor(totalDays / 7);

    return (
        <div>
            {/* Start : Result */}
            <div className="flex justify-between">
                {/* Start : Age */}
                <div>
                    <h1>Age</h1>
                    <span>{dateDifference}</span>
                </div>
                {/* End : Age */}
                {/* Start : Next Bday */}
                <div className="flex flex-col">
                    <h4>Next Birthday</h4>
                    {/* <span>{topDateValue}</span> */}
                    <span className="icon-cake"></span>
                    <span>{dayName}</span>
                    <span>{monthsUntilBirthday} months</span>
                    <span>{remainingDays} Days</span>
                </div>
                {/* End : Next Bday */}
            </div>
            {/* End : Result */}
            <hr />
            {/* Start : Summary */}
            <div>
                <h4>Summary</h4>
                <div className="flex flex-col">
                    <span>{dateDifference.includes('Year') ? 'Years' : 'Days'}</span>
                    <span>{dateDifference.replace(/\D/g, '')}</span>
                </div>
                <div className="flex flex-col">
                    <span>Months</span>
                    <span>{totalMonths}</span>
                </div>
                <div className="flex flex-col">
                    <span>Weeks</span>
                    <span>{totalWeeks}</span>
                </div>
                <div className="flex flex-col">
                    <span> Days</span>
                    <span>{totalDays}</span>
                </div>
            </div>
            {/* End : Summary */}
        </div>
    );
};

export default Results;