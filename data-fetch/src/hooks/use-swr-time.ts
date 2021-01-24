import useSWR from "swr";

let fakeReqId = 0;

const fakeFetcher = () => {
    const id = ++fakeReqId;
    console.log(`${id}: Fetching fake time`);
    return new Promise(resolve => setTimeout(() => {
        console.log(`${id}: Fetching fake time DONE`);
        resolve(new Date().toLocaleString());
    }, 500));
};

function useSwrTime() {
    const { data, error } = useSWR('fake-api:time', fakeFetcher)
    return {
        data: data as String,
        isLoading: !error && !data,
        isError: error
    }
}
export default useSwrTime;