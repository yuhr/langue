<div align="center">
  <br><br>
  <img src="https://cdn.rawgit.com/yuhr/langue/master/res/logo-langue.svg"
       width="400px">
  <p>A modern platform for conlanging.</p>
  <h1>The Langue Project</h1>
  <a href="https://www.npmjs.com/package/langue">
    <img src="https://img.shields.io/npm/v/langue.svg">
  </a>
  <a href="https://gitter.im/langue-project/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
    <img src="https://badges.gitter.im/langue-project/Lobby.svg">
  </a>
  <a href="https://www.patreon.com/yuhr">
    <img src="https://img.shields.io/badge/donate-patreon-yellow.svg">
  </a>
  <br><br><br><br>
</div>

Langue provides an infrastructure for creating and learning languages. The main aim is to be the most common platform for online and offline conlanging. As it works on any of JavaScript engines, the utilities and interfaces are isomorphic and universal across different platforms.

**Currently in the planning stage**. This repository is likely to be squashed periodically.

Langue framework (a set of packages) will be available on npm (you can `npm install langue` now but it's blank, just for reservation). The official web service which uses the framework will be coming to [langue.link](https://langue.link) and its [repository](https://github.com/yuhr/langue.link).

## Table of Contents

- [Design Philosophy](#design-philosophy)
  - [Langue Framework](#langue-framework)
  - [langue.link](#languelink)
- [Logo](#logo)
- [Background](#background)
- [Plans](#plans)
  - [Libraries and Frameworks](#libraries-and-frameworks)
- [Terminology](#terminology) *[WIP]*

## Design Philosophy

### Langue framework

- **Modules**. Langue framework has tons of features and allows developers to choose what to use specifically in their applications.
- **Distributed**. If you have enough resource on your machine, the framework works independently from other servers and can synchronise all edits with others in realtime.
- **Supports all sorts of distinctive channels**. You can treat alike not only phonetic languages but also ones that use body gestures, or, transitions of luminance of the second left horn, as its main distinctive channel.
- **Unity**. All languages synchronised on the *Langue network* are represented as the single graph. Words refer to synonyms and antonyms, and sentences refer to translations and appeared words.
- **Liveness**. Every type of language user such as person, group, society and nation can have its own *lexicon*. We will see living forms of languages in the way they are in our mind.

### langue.link

- **Convenient**. Just like Twitter, you can freely post a scrap of example sentences or new words in your language, and ask for corrections or feed it into the database for machine translation. As sentences will automatically be marked up with gloss and phonetic transcription you will need only correct the errors by hand if any.
- **Closeness**. You can instantly know activities such as newly posted example sentences, new words and edits of languages you're watching in your timeline.
- **Collaborative**. Edits immediately reflected into the web interface, and safely managed conflicts.
- **Offline-first**. Also works in offline state and your edits will be synchronised to the remote on the next connection.
- **Translingual**. At the same time you can search translations in many languages, or what the most used consonant in all languages is.

## Logo

<img src="https://cdn.rawgit.com/yuhr/langue/master/res/logo-langue.svg"
     align="right" width="253px">

The repetitive looping symbol models on the IPA transcription /læŋ/, and a *knot* symbolising that the project is meant to make every language *linked* with each other. The underline symbolises *infrastructure*. The gradation from vivid cyan (#01f3ff) to lightgreen (#01ffa6) symbolises that the project is in a fresh and progressing state now. We use these colours at least until the official web service (langue.link) goes live.

## Background

*Please note that I ([yuhr](https://github.com/yuhr)), the originator of the project, am **not** familiar with conlang communities globally but the Japanese community on Twitter. Possibly speaking mistakes. Feel free to contact me directly on Twitter ([@qothr](https://twitter.com/qothr)).*

To date, almost actual parts of conlanging have been done locally. On the internet we can't feel breathing of conlangs made by others and only indirectly we can know about how they're developing, viewing **static informations** such as dictionaries, text sentences and speech videos. There's no spellchecking nor machine translation. There's no speech synthesis nor recognition. There's no habitable place for conlangs in the digital space. So we decided to make that.

Also there's no digital standard for language description. Just a flock of trivial formats for dictionaries or ontologies *is*, but that won't be useful for today's dynamic, practical and distributed online use i.e. collaborative working. We will propose an up-to-date standard and a noninvasive conlanging solution, langue.link, in order to improve such situations and make things fully adaptive.

## Plans

Langue consists of these parts:

- Schema
  - a unified schema for language description (*)
- Engines and Utilities
  - Dictionary
    - search on these fields:
      - lemma (proximity scoring with phonetic distance)
      - translation (search with synonyms and spelling variants)
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
  - Utterance Processing
    - recognition
    - synthesis
    - atmospheric-composition-aware acoustic transforming
  - Ontology Database
  - Discourse Processing
  - Conscripting Assinstance
- API
  - a unified interface for querying informations about languages

(*): Currently we're working on this in Japanese conlang community on Twitter, planning a standardisation conference. See details in [here](http://ja.conlinguistics.wikia.com/d/p/3086451138552552907). Please note that both the community and the conference are not any sort of proponents of this project, but some of the members are developers of some applications which are useful for conlanging and likely to be de facto standards.

### Libraries and Frameworks

- Language: TypeScript
- Database: GunDB
- Query: GraphQL
- Schema: JSON-Schema (autogenerated from TypeScript interface definition)
- Document: doca, JSDoc

## Terminology

*[WIP]*

An "**utterance**" means a set of physical actions which comprises a discourse. An utterance consists of a series of distinctive channels. In some cases there might be more than one utterer in an utterance. A generalised term of "speech" or "pronunciation".

A "**discourse**" means a set of utterances, things uttered and contexts of utterers. The number of utterances a discourse has depends on how they are clipped out from the discourse. Also includes written text.

A "**context**" means a compound of utterer's own upbringing and all experiences until the utterance. In most cases each utterer has a more or less different context even in the same discourse, and his/her utterances are made always on the basis of that.

A "**distinctive channel**" means a uniform manner to utter, such as phonetic sound, intonation, percussive sound and kinesic gesture. Every language has one or more distinctive channels, and each form of lexical items has one or more elementary layers correspond to each channel. Each channel may or may not be necessary to utter, and sometimes selectable according to the case of utterance or discourse.

A "**lexicon**" is a model which represents a language in one's mind. It includes a set of informations about not only words but grammar and phonemic inventory of the language.

A "**dictionary**" is a set of definitions of words. It can be thought as a partial wordset in one's lexicon, with word meanings explicitly defined for a specific topic.

A "**user**" stands for every type of subject who uses its own language, such as person, a group, a society and a nation. Note that a group of people is a single user since it's treated in their totality.

<div align="center">
  <br><br>
  <img src="https://cdn.rawgit.com/yuhr/langue/master/res/logo-langue-alt.svg"
       width="159px">
  <br><br>
</div>