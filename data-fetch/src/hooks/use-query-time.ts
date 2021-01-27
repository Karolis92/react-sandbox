import { useQuery } from "react-query";
import fakeTimeFetcher from "../utils/fake-time-fetcher";

function useQueryTime(timezone?: string) {
    const query = `fake-api/query-time${timezone ? `?@${timezone}` : ''}`;
    const { data, isLoading, isError } = useQuery(query, () => fakeTimeFetcher(query));

    return {
        data: data as String,
        isLoading,
        isError
    };
}

export default useQueryTime;