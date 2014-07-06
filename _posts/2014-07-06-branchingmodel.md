---
layout: post
title: "Preparing release, changing branching model"
tags: news
author: Gertjan van Zwieten
---

Preparing for release 1.0 we are adopting a branching model similar to the one
proposed by Vincent Driessen [here]
(http://nvie.com/posts/a-successful-git-branching-model/). In short, this means
development will move to a separate `devel` branch, while the `master` branch
from now on contains production ready code. Preparing for a release, `devel` is
branched off into `release`, where it can receive bugfixes but not new features.

Transitioning from the current situation we presently have a `master` and
`devel` branch pointing at the same commit. Bug fixes will be merged directy
into master, but new features will be added to devel starting today. When things
quiet down with bugfixes we tag `master` with 1.0 and leave it there. At that
point we finished the transition and development continues as layed out above.

Today we call on all users to check their applications against the current
`master` branch an report on any problems they find. Please use and monitor
github's issue tracker to avoid double findings. For all communication leading
up to the eventual release please keep an eye on this github issue.
