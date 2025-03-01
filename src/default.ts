// @ts-ignore - not sure how to build a proper typescript def yet
import { syntax } from 'micromark-extension-wiki-link'
import {gfm} from 'micromark-extension-gfm'
import {math} from 'micromark-extension-math'
// @ts-ignore - not sure how to build a proper typescript def yet
import * as wikiLink from 'mdast-util-wiki-link'
import {gfmFromMarkdown} from 'mdast-util-gfm'
import {mathFromMarkdown} from 'mdast-util-math'
import { CopyAsLatexPluginSettings } from './settings'


export const DEFAULT_REMARK_SETUP = {
    extensions: [syntax(),gfm(),math()],
    mdastExtensions: [wikiLink.fromMarkdown(),gfmFromMarkdown(),mathFromMarkdown()]
}

export const DEFAULT_SETTINGS: CopyAsLatexPluginSettings = {
	logOutput: false,
	copyWhole: true,
	inlineDelimiter:"`",
	mintedListings: false,
	citeCommand : 'autocite',
	bibtexFile: "",
	citationTemplates: {
		"bare" : "\\citep{#id}",
		"surrounded" : "\\cite[#pre][#post]{#id}}",
		"pre" : "\\cite[#pre]{#id}}" ,
		"post" : "\\cite[#post]{#id}}",
		"paren" : "\\citet{#id}"
	}
}