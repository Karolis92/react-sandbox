import { useState } from "react";
import useQueryTime from "../hooks/use-query-time";

const QueryTime = () => {
    const [timezone, setTimezone] = useState<string>();
    const { data } = useQueryTime(timezone);

    return (
        <>
            <p>Time: {data}</p>
            <button onClick={() => setTimezone('UTC')}>Change timezone (query) for this component</button>
            <ul>
                Notes:
                <li>Shows old time while new is refetched when changing route, refocus, etc.</li>
                <li>Date is stale right away (on default config), so delayed render will refetch data.</li>
            </ul>
        </>
    );
};

export default QueryTime;