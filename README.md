<div style="text-align: center; margin: 64px">
  <img src="./res/logo-langue.svg"
       style="width: 512px; vertical-align: middle;">
  <p>A modern platform for conlanging.</p>
  <h1>The Langue Project</h1>
  <a href="https://gitter.im/langue-project/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
    <img src="https://badges.gitter.im/langue-project/Lobby.svg">
  </a>
</div>

Langue provides an infrastructure for creating and learning languages. The main aim is to be the most common platform for online and offline conlanging. As it works on any of JavaScript engines, the utilities and interfaces are isomorphic and universal across different platforms.

Not only does Langue support phonetic distinctive channel, but also kinesic or more unusual, even conworldlike ways (something impossible for earthlings) to distinguish meanings of discourse, serialising it into specific data format.

**Currently in the planning stage.**

Langue framework (a set of packages) will be available on npm. The official web service which uses it will be coming to [langue.link](https://langue.link/) and its [repository](https://github.com/yuhr/langue.link).

## Design Philosophy

### Langue framework

- Modules. Although Langue framework has tons of features, developers can choose what to use specifically in their applications.
- Distributed. If you have enough resource on your machine, it works independently from other servers and can synchronise all edits with others in realtime.
- Supports all sorts of distinctive channels. You can treat alike not only phonetic languages but also ones that use body gestures, or, transitions of brilliance of the second left horn, as its main distinctive channel.

### langue.link

- Convenient. Just like Twitter, you can freely post a scrap of example sentences or new words in your language, and ask for corrections or feed it into the database for machine translation. As example sentences will automatically be marked up with gloss and phonetic transcription you will need only correct the errors by hand if any.
- Closeness. You can instantly know activities such as newly posted example sentences, new words and edits of languages you're watching in the timeline.
- Collaborative. Edits immediately reflected into the web interface, and safely managed conflicts.
- Offline-first. Also works in offline state and your edits will be synchronised to the remote on the next connection.
- Translingual. At the same time you can search translations in many languages, or what the most used consonant in all languages is.

## Logo

<div style="float: right; ">
  <img src="./res/logo-langue.svg"
       style="width:253px; vertical-align: middle;">
</div>

The repetitive looping symbol models on the IPA transcription /læŋ/, and a knot symbolising that the project is meant to make every language linked with each other. The gradation from vivid cyan (#01f3ff) to lightgreen (#01ffa6) symbolises that the project is in a fresh and progressing state now. We use these colours until the official web service (langue.link) goes live.

## Background

*Please note that the originator of the project ([yuhr](https://github.com/yuhr)) is **not** familiar with conlang communities globally, but the Japanese community on Twitter. Possibly speaking mistakes.*

To date, almost actual parts of conlanging have been done locally. On the internet, we can't feel breathing of conlangs made by others, and only indirectly we can know about how they're developing, viewing **static informations** such as dictionaries, text sentences and speech videos. There's no spellchecking nor machine translation. There's no speech synthesis nor recognition. There's no habitable place for conlangs in the online space. So we decided to make that.

## Plan

Langue consists of these parts:

- Schema
  - a unified schema for language description (*)
- Engines and Utilities
  - Dictionary
    - search on these fields:
      - lemma (proximity scoring with phonetic distance)
      - translation (search with synonyms)
      - description (full-text search)
    - filter by:
      - tags (e.g. parts of speech)
      - timestamp (created, last modified)
  - Lexicon
    - not dictionary
    - corpus-based construction
  - Grammar and Spell Checking
  - Corpus and Discourse Database
  - Discourse Awkwardness Scoring
  - Statistics
    - calculate the frequency of syntactic form, words, syllables and phonemes
  - Translation
    - Rule-Based Machine Translation (RBMT)
    - Statistical Machine Translation (SMT)
  - Utterance I/O Processing
    - recognition
    - synthesis
    - atmospheric composition aware acoustic transforming
  - Ontology Database
  - Conscripting Assinstance
  - Discource Generating
- API
  - a unified interface for querying informations about languages

(*): Currently we're working on this in Japanese conlang community on Twitter. See details in [here](http://ja.conlinguistics.wikia.com/d/p/3086451138552552907).

### Libraries and Frameworks

- Language: TypeScript
- Database: GunDB
- Query: GraphQL
- Schema: JSON-Schema (autogenerated from TypeScript interface definition)
- Document: doca, JSDoc

## [WIP] General Terms

An "*utterance*" means a set of physical actions which comprises a discourse. An utterance consists of a series of distinctive channels. In some cases there might be more than one utterer in an utterance. A generalised term of "speech" or "pronunciation".

A "*discourse*" means a set of utterances, things uttered and contexts of utterers. The number of utterances a discourse has depends on how they are clipped out from the discourse. Also includes written text.

A "*context*" means a compound of utterer's own upbringing and all experiences until the utterance. In most cases each utterer has a more or less different context even in the same discourse, and his/her utterances are made always on the basis of that.

A "*distinctive channel*" means a uniform manner to utter, such as phonetic sound, intonation, percussive sound and kinesic gesture. Every language has one or more distinctive channels, and each form of lexical items has one or more elementary layers correspond to each channel. Each channel may or may not be necessary to utter, and sometimes selectable according to the case of utterance or discourse.

<div style="text-align: center; margin: 64px">
  <img src="./res/logo-langue-alt.svg"
       style="width: 159px; vertical-align: middle;">
</div>