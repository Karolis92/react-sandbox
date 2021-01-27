let fakeReqId = 0;

const fakeTimeFetcher = (input: string) => {
    const id = ++fakeReqId;
    console.log(`${id}: Fetching fake time for ${input}`);
    return new Promise(resolve => setTimeout(() => {
        console.log(`${id}: Fetching fake time for ${input} DONE`);
        var at = input.indexOf('@');
        var timeZone = at > -1 ? input.substring(at + 1) : undefined;
        resolve(new Date().toLocaleString(undefined, { timeZone }));
    }, 500));
};

export default fakeTimeFetcher;