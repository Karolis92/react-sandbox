import useQueryTime from "../hooks/use-query-time";

const QueryTime = () => {
    const { data } = useQueryTime();

    return (
        <>
            <p>Time: {data}</p>
            <ul>
                Notes:
                <li>Shows old time while new is refetched when changing route, refocus, etc.</li>
                <li>Date is stale right away (on default config), so delayed render will refetch data.</li>
            </ul>
        </>
    );
};

export default QueryTime;