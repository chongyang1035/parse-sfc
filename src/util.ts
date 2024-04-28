import fs from "fs";
import util from "util";
const statAsync = util.promisify(fs.stat);
const readDirAsync = util.promisify(fs.readdir);
export class Util {
  static async dfsFolder(folderPath: string, ext?: string | RegExp): string[] {
    // 检查路径是文件还是文件夹
    const isDirectory = await statAsync(folderPath);

    if (isDirectory) {
      // fs.readdirSync(path)
      const fileList = await readDirAsync(folderPath);
    } else {
      throw new Error(`${folderPath} is not a directory`);
    }
  }
}
