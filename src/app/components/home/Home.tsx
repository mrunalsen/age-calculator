import { formatDate, getDate } from '../../shared/getDate';
import DateInput from '../dateInput/DateInput';
const Home = () => {
    return (
        <>
            <p>{formatDate(getDate)}</p>
            <DateInput />
        </>
    );
};

export default Home;