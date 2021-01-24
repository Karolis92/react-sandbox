import useSwrTime from "../hooks/use-swr-time";

const SwrTime = () => {
    const { data: time } = useSwrTime();
    return (
        <>
            <p>Time: {time}</p>
            <ul>
                Notes:
                <li>Shows old time while new is refetched when changing route, refocus, etc.</li>
                <li>
                    If delayed component calls useSwr within ~2-3s from App mount where same hook is used -
                    it will not do 2 request and use data from first response
                </li>
            </ul>
        </>
    );
};

export default SwrTime;