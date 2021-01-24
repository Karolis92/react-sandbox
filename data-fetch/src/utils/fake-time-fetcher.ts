let fakeReqId = 0;

const fakeTimeFetcher = (input: string) => {
    const id = ++fakeReqId;
    console.log(`${id}: Fetching fake time for ${input}`);
    return new Promise(resolve => setTimeout(() => {
        console.log(`${id}: Fetching fake time for ${input} DONE`);
        resolve(new Date().toLocaleString());
    }, 500));
};

export default fakeTimeFetcher;