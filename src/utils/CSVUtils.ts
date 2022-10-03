import { textUtils } from "./index";

import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import { jsonToCSV } from "react-native-csv";

export const generateCSVFile = async (text: string) => {
  const csvTextValue = textUtils.convertStringToCSVString(text);

  const CSV = jsonToCSV(csvTextValue);

  // Name the File
  const directoryUri = FileSystem.documentDirectory;
  const fileUri = directoryUri + `formData.csv`;

  // Ask permission (if not granted)
  const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  if (perm.status != "granted") {
    console.log("Permission not Granted!");
    return;
  }

  // Write the file to system
  FileSystem.writeAsStringAsync(fileUri, CSV);

  try {
    const asset = await MediaLibrary.createAssetAsync(fileUri);
    const album = await MediaLibrary.getAlbumAsync("forms");
    console.log(album);
    if (album == null) {
      await MediaLibrary.createAlbumAsync("forms", asset, true);
    } else {
      await MediaLibrary.addAssetsToAlbumAsync([asset], album, true);
    }
  } catch (error) {
    console.log(error);
  }
};
