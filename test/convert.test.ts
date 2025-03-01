import { expect, test, describe } from 'vitest';

import { markdownToLatex } from 'src/convert';
import { CopyAsLatexPluginSettings } from 'src/settings';
import { DEFAULT_SETTINGS } from 'src/default';
import { DEFAULT_REMARK_SETUP } from 'src/settings';

describe('convert', () => {
    let settings: CopyAsLatexPluginSettings = DEFAULT_SETTINGS;
    let remarkSetup: any = DEFAULT_REMARK_SETUP;
    
    test("items", () => {
        const text = "- item 1\n- item 2";
        const expectLatex = "\\begin{compactitem}\n    \\item item 1\n    \\item item 2\n\\end{compactitem}\n";
        const result = markdownToLatex(text, settings, remarkSetup);
        expect(result).toEqual(expectLatex);
    })
})
