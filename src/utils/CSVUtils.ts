import { textUtils } from "./index";
import RNFetchBlob from "react-native-fetch-blob";

export const generateCSVFile = (text: string) => {
  const csvTextValue = textUtils.convertStringToCSVString(text);

  // write the current list of answers to a local csv file
  const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`;
  console.log("pathToWrite", pathToWrite);
  // pathToWrite /storage/emulated/0/Download/data.csv
  RNFetchBlob.fs
    .writeFile(pathToWrite, csvTextValue, "utf8")
    .then(() => {
      console.log(`wrote file ${pathToWrite}`);
      // wrote file /storage/emulated/0/Download/data.csv
    })
    .catch((error) => console.error(error));
};
