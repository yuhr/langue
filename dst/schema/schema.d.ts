/**
 * Describes a language registory.
 */
export interface Language {
    /**
     * Original full name of the language in the orthography. This could be shown in the conscript font. If any of following 'name*' fields are present, they will override this on their proper occasions. Otherwise, this name is used instead of them.
     */
    name: string;
    /**
     * Short version of the original language name. This could be shown in the conscript font. Used when there's no enough space to show the full language name.
     */
    nameShort?: string;
    /**
     * Transcribed name of the language. Used for beginner's readability. (FIXME: Support for various languages and writing systems.)
     */
    nameTranscript?: string;
    /**
     * Name of the language in ascii. Used where no unicode special characters support or no prefered conscript font is present.
     */
    nameAscii?: string;
    /**
     * Identical code assigned to the language. If not present, 'x-<nameAscii>' is used.
     */
    code?: string;
    /**
     * Short summary about the language. This should be a single line. (FIXME: Support for various languages and writing systems.)
     */
    description: string;
    /**
     * Set of all variations (e.g. translation and description language) of lexicon.
     */
    lexicons?: [Lexicon];
}
/**
 * Describes a lexicon (dictionary).
 */
export interface Lexicon {
    /**
     * Set of all lexical items.
     */
    lexemes: [Lexeme];
    /**
     * Tags related to the lexicon.
     */
    tags?: [string];
}
/**
 * Describes a lexical item.
 */
export interface Lexeme {
    /**
     * Original form.
     */
    lemma: Morph;
    /**
     * All possible translations for the lemma.
     */
    translations: [string];
    /**
     * Tags related to the lexeme.
     */
    tags?: [string];
    /**
     * Detailed descriptions about the lexeme; such as collocations and nuance.
     */
    descriptions?: [Description];
    /**
     * All possible variations related to the lexeme.
     */
    variations?: [Form];
    /**
     * Related lexemes.
     */
    relations?: [Form];
}
/**
 * Describes a chunk of morphemes.
 */
export interface Morph {
    /**
     * Transcription in the specific rule.
     */
    transcription: string;
    /**
     * Form described in graphemes.
     */
    graph?: string;
    /**
     * Pronunciation described in phonemes.
     */
    phone?: string;
}
/**
 * Describes a form related to a specific tag.
 */
export interface Form {
    /**
     * Special form related to the tag.
     */
    morph: Morph;
    /**
     * Tags such as antonym and synonym.
     */
    tag: string;
}
/**
 * Describes translations which belong to a specific tag.
 */
export interface Translation {
    /**
     * Tag related to the translation; such as part of speech.
     */
    tag: string;
    /**
     * All translated words which can be categorised into the tag.
     */
    words: [string];
}
/**
 * Describes a detailed description for an item.
 */
export interface Description {
    /**
     * Content of the description.
     */
    content: string;
    /**
     * Title of the description.
     */
    title?: string;
}
