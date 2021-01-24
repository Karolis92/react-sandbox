import { useQuery } from "react-query";
import fakeTimeFetcher from "../utils/fake-time-fetcher";

function useQueryTime() {
    const { data, isLoading, isError } = useQuery('time', () => fakeTimeFetcher('fake-api:query-time'));

    return {
        data: data as String,
        isLoading,
        isError
    };
}

export default useQueryTime;