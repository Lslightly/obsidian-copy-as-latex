import { CopyAsLatexPluginSettings } from './settings'

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