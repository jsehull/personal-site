---
title: 'My Simple Case for Standard JS'
author: 'Jesse Hull'
date: '2020-08-10'
summary: 'How I ended up using Standard JS for my personal projects'
hero_image: ../static/audience-of-one.png
---

When working on projects recently, I started doing some comparisons for linters and for using some sort of formatter. Obviously, [ESLint](https://eslint.org/) is still top of the pile and [Prettier](https://prettier.io/) is pretty sound.

I found myself setting up Prettier and some ESLint configurations with lots of community recommendations. Everything was great. I finally got it working.

Then I ran into dozens of errors from the opinionated packages I was trying out. That's okay, you just read docs, search common issues, and remove them one by one. But, then the list wasn't moving much and I started wasting too much time.

### Never forget your projects

I learned a lot in the too many hours I spent researching options and add-ons.

I confirmed what I knew about ESLint being king, but also how I could branch away from [airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb) and use other tools made by devs specifically for cases I shared.

I learned that I didn't need to install Prettier as a dependency and that I could just wire it though VSCode and use the plug-in that way instead.

I learned that while they both work, I didn't want all the errors from packages I didn't understand.

And that, that's the root of the problem.

**I learned all this because I lost track of what I wanted to learn.** I wanted to do _my_ project. I did NOT want to be thinking about the tools that I needed to do it.

I wanted them there. I knew what I wanted from the tools. I just wanted them to work.

### Where Standard JS comes in

[Standard JS](https://standardjs.com) rules and options don't need to be fully understood. They don't ask to be. I mean, you already know what it's there for and you know it's doing its job.

It's like a familiar friend: you aren't necesarrily the same, but **you know what you're gonna get and it's all good.**

Instead of struggling with ESLint configurations or wondering what you should be using, Standard JS has simple instructions:

```
// to install
npm install standard --global

// to run
standard --fix
```

No tweaking required. The warnings/errors I get are solid and actually do a great job and are used by many respectable companies that put way more time into running through its rules and opinions than I ever will.

### Remember to keep it movin'

Yes, if you have special requirements for a project, you can always use ESLint for those special needs.

One could also argue you don't need it for most team situations either. Not the point of this post, but keep in mind, large teams use it (i.e. Heroku, MongoDB, npm, etc). If you want to adopt it, you probably can.

I know I won't be using it for my personal projects. **I don't need to spend any more time or consideration on setup.** I can trust the process and keep my mind on the code and ideas and adventure of building.

Find your setup. Move on. Do what we do and get your build on.

--

For those interested, Prettier and Standard both have VSCode plugins (be sure to read instructions). Make sure you have prettier set to `format on save`! I install Standard globally, then I can just be off to the races.

And when I mean races, I mean, I already _know_ I'm set up and can just focus on what matters: what I'm there for in the first place.

If you haven't used Standard before, check the companies who use it [here](https://standardjs.com/#who-uses-javascript-standard-style). It does a great job and will save you time if you can leave some opinions at the door.
