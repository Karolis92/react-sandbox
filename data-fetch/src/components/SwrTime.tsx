import useSwrTime from "../hooks/use-swr-time";

const SwrTime = () => {
    const { data: time } = useSwrTime();
    return (
        <>
            <p>Time: {time} (Delayed)</p>
            <p>
                Notes:
                <ul>
                    <li>Shows old time whlie new is referched when changing route, refocus, etc.</li>
                    <li>
                        If delayed component calls useSwr within ~2-3s from App mount where same hook is used -
                        it will not do 2 request and use data from firs response
                    </li>
                </ul>
            </p>
        </>);
};

export default SwrTime;