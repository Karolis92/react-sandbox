import useSWR from "swr";
import fakeTimeFetcher from "../utils/fake-time-fetcher";

function useSwrTime(timezone?: string) {
    const query = `fake-api/swr-time${timezone ? `@${timezone}` : ''}`;
    const { data, error } = useSWR(query, fakeTimeFetcher);
    return {
        data: data as String,
        isLoading: !error && !data,
        isError: error
    };
}

export default useSwrTime;