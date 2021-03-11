import hljs from 'highlight.js';
// @ts-ignore
import hljsLineNumbers from 'highlightjs-line-numbers2.js';

class SyntaxHighlighting {
  initialize() {
    hljsLineNumbers.init(hljs)
    hljs.highlightAll();
    // @ts-ignore
    hljs.initLineNumbersOnLoad({
      singleLine: true
    });
  }
}

export default SyntaxHighlighting;
