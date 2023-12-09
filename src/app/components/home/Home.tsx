import { formatDate, getDate } from '../../shared/getDate';
import DateInput from '../dateInput/DateInput';
const Home = () => {
    return (
        <>
            <div className="container flex flex-col place-content-center h-full bg-white rounded-2xl">
                <header className='flex justify-center'>
                    <h1>Age</h1>
                </header>
                <p>Today : {formatDate(getDate)}</p>
                <DateInput />
            </div>
        </>
    );
};

export default Home;