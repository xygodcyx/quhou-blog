// 安装必要依赖：
// npm install ttf2woff2 fonteditor-core glob

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// 配置路径
const DIST_DIR = path.resolve(path.join(__dirname, "..", ".vitepress", "dist")); // HTML 文件目录
const ORIGINAL_TTF = path.resolve(path.join(__dirname, "..", "assets", "ruimei.ttf")); // 原始 TTF 字体路径
const OUTPUT_WOFF2 = path.resolve(path.join(__dirname, "..", "assets", "subset")); // 输出子集 WOFF2 文件路径

// 提取 HTML 文件中的字符集
function extractCharactersFromHTML(directory) {
  const htmlFiles = glob.sync(`${directory}/**/*.html`);
  const charSet = new Set();

  htmlFiles.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");
    const matches = content.match(/[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Z}\p{C}]/gu);
    if (matches) {
      matches.forEach((char) => charSet.add(char));
    }
  });

  return Array.from(charSet).join("");
}


async function findRuimeiFont(directory) {
  try {
    const files = fs.readdirSync(directory);

    for (const file of files) {
      if (file.startsWith('ruimei') && file.endsWith('.woff2')) {
        const relativePath = path.relative(process.cwd(), path.join(directory, file));
        console.log('Found font file:', relativePath);
        return relativePath;
      }
    }

    console.log('No matching font file found.');
    return null;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// 生成子集字体
async function createSubsetFont(originalTtfPath, outputWoff2Path, subsetCharacters) {
  // 读取原始 TTF 字体
  // 创建子集字体
  const Fontmin = (await import("fontmin")).default;
  new Fontmin().src(originalTtfPath)
    .use(Fontmin.glyph({
      text: subsetCharacters,
      hinting: false         // keep ttf hint info (fpgm, prep, cvt). default = true
    })).use(Fontmin.ttf2woff2())//转化woff2字体
    .dest(outputWoff2Path).run(async (error, files) => {
      if (error) {
        console.error(error);
        return;
      }
      // 复制子集字体到输出目录
      console.log(`子集字体已生成：${outputWoff2Path}`);
      let fontFilePath = await findRuimeiFont(path.resolve(__dirname, "..", ".vitepress", "dist", "assets"))
      fontFilePath && fs.copyFileSync(path.join(outputWoff2Path, "ruimei.woff2"), fontFilePath);
      console.log(`寻找并复制子集字体到输出目录：${fontFilePath}，大小为${fs.statSync(fontFilePath).size}`);
    })
}

// 主流程
async function main() {
  try {
    console.log("提取字符集...");
    const characters = extractCharactersFromHTML(DIST_DIR);
    console.log(`提取的字符集：${characters}`);

    console.log("生成子集字体...");
    await createSubsetFont(ORIGINAL_TTF, OUTPUT_WOFF2, characters);
  } catch (error) {
    console.error("生成子集字体失败：", error);
  }
}

main();
