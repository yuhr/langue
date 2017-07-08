A modern platform for playing with languages, especially conlangs.

# Langue /ˈlæŋ/
## The Langue Project [WIP]

[![Join the chat at https://gitter.im/langue-project/Lobby](https://badges.gitter.im/langue-project/Lobby.svg)](https://gitter.im/langue-project/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Langue provides an infrastructure for creating and learning languages. The main aim is to be the most common platform for online and offline conlanging. It works on any of JavaScript engines so that the utilities and interfaces are isomorphic and universal across different platforms.

Not only does Langue support phonetic distinctive channel, but also kinesic or more unusual, even conworldlike ways (something impossible for earthlings) to distinguish meanings of discourse, serialising it into specific data format.

Currently in the planning stage. The project name "Langue" might be subject to change.

## Plan

Langue consists of these parts:

- Schema
  - A unified schema for language description
- Engines and Utilities
  - Dictionary
    - Search on these fields:
      - Lemma (proximity scoring with utterance distance)
      - Translation (search with synonyms)
      - Description (full-text search)
  - Grammar and Spell Checking
  - Corpus and Discourse Database
  - Discourse Awkwardness Scoring
  - Statistics
    - Calculate the frequency of words, syllables and phonemes
  - Translation
    - Rule-Based Machine Translation (RBMT)
    - Statistical Machine Translation (SMT)
  - Utterance Recognition
  - Utterance Synthesis
  - ? Ontology Database
  - Conscripting Assinstance
- API
  - A unified interface for querying informations about languages

These features would be selectable for specific use.

## General Terms

An "*utterance*" means a set of physical actions which comprises a discourse. An utterance consists of a series of distinctive channels. In some cases there might be more than one utterer in an utterance. A generalised term of "speech" or "pronunciation".

A "*discourse*" means a set of utterances, things uttered and contexts of utterers. The number of utterances a discourse has depends on how they are clipped out from the discourse. Also includes written text.

A "*context*" means a compound of utterer's own upbringing and all experiences until the utterance. In most cases each utterer has a more or less different context even in the same discourse, and his/her utterances are made always on the basis of that.

A "*distinctive channel*" means a uniform manner to utter, such as phonetic sound, intonation, percussive sound and kinesic gesture. Every language has one or more distinctive channels, and a form of a lexical item of the language has one or more elementary layers correspond to each channel. Each channel may or may not be necessary to utter, and sometimes selectable according to the case of utterance or discourse.
