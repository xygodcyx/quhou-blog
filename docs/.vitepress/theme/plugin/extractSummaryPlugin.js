export function extractSummaryPlugin(md) {
  const render = md.render;
  md.render = (...args) => {
    const [src] = args;
    const summaryMatch = src.match(/<!-- SUMMARY_START -->([\s\S]*?)<!-- SUMMARY_END -->/);
    const summary = summaryMatch ? summaryMatch[1].trim() : '';

    console.log("summary", summary);
    // 将摘要添加到 env 对象中
    args[2] = args[2] || {};
    args[2].summary = summary;

    return render.call(md, ...args);
  };
}
