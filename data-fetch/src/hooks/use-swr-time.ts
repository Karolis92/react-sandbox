import useSWR from "swr";
import fakeTimeFetcher from "../utils/fake-time-fetcher";

function useSwrTime() {
    const { data, error } = useSWR('fake-api:swr-time', fakeTimeFetcher);
    return {
        data: data as String,
        isLoading: !error && !data,
        isError: error
    };
}

export default useSwrTime;