import { expect, test, describe } from 'vitest';

import { markdownToLatex } from 'src/convert';
import { CopyAsLatexPluginSettings } from 'src/settings';
import { DEFAULT_REMARK_SETUP, DEFAULT_SETTINGS } from 'src/default';

describe('convertUnit', () => {
    let settings: CopyAsLatexPluginSettings = DEFAULT_SETTINGS;
    let remarkSetup: any = DEFAULT_REMARK_SETUP;
    
    test("items", () => {
        const text = "- item 1\n- item 2";
        const expectLatex = "\\begin{compactitem}\n    \\item item 1\n    \\item item 2\n\\end{compactitem}\n";
        const result = markdownToLatex(text, settings, remarkSetup);
        expect(result).toEqual(expectLatex);
    })

    test("inlinecode", () => {
        const text = "`abc`";
        const expectedLatex = "\\lstinline`abc`\n";
        expect(markdownToLatex(text, settings, remarkSetup)).toEqual(expectedLatex);
    })

    test("external link", () => {
        expect(
            markdownToLatex("[baidu](https://www.baidu.com/)", settings, remarkSetup)
        ).toEqual(
            "\\href{https://www.baidu.com/}{baidu}\n"
        )
    })

    test("code block", () => {
        expect(
            markdownToLatex("```go\n\
package main\n\
```", settings, remarkSetup)
        ).toEqual(
            "\\begin{lstlisting}[language=go]\n\
package main\n\
\\end{lstlisting}"
        )
    })
})
