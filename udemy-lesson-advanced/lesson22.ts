
interface DownLoadedData {
    id: number,
    user?: {
        name?: {
            first: string,
            last: string
        }
    }
}

const downloadedData: DownLoadedData = {
  id: 1,
};

console.log(downloadedData.user?.name);

console.log('=== result: Optional Chaining===');
