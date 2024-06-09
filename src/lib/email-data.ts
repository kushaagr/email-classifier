export const getEmails = async () => emails;
export type Email = {
    id: number;
    sender: string;
    heading: string;
    body: string;
    label?: string;
};
// type Emails = ReturnType<typeof getEmails>[0]

const emails = [
    /**
     * TIP: Use this Powershell command to format body of email:
     * ((gcb).Trim() | Join-String -Separator "`n") -replace '\n', "\n" | scb
     * */ 
    {
        id: 1,
        sender: "no-reply-eCounselling@nic.in",
        heading: "Regarding CCMT Counselling 2024",
        body: `CCMT Counselling 2024\n\n\nDear ,\n\nYour OTP for login to account of CCMT Counselling 2024 is 17463Q.\n\nValidity of this OTP is 10 minutes.Do not share with anyone.\n\n(This is an auto generated email, so please do not reply back.)\n\n\nRegards,\nCCMT Counselling 2024\n\n\nCONFIDENTIALITY INFORMATION AND DISCLAIMER :\nThis email message may contain confidential, legally privileged information and is intended solely for the use of the individual to whom it is addressed. If you have erroneously received this message, please delete it immediately. If you are not the intended recipient of the email message you should not disseminate, distribute or copy this e-mail.`,
        label: "important",
    },
    {
        id: 2,
        sender: "info@elearnmarkets.com",
        heading: "Are Markets Prepared to Crash Post Results???",
        body: `Emkay gives Paytm stock a 'Reduce' rating; analysts predict up to 12% drop.\n\nCipla has agreed to invest 26 crores in Achira Labs Pvt Ltd.\n\nRobert Fico, Slovakian PM, was shot multiple times in assassination attempt. He is currently in a life-threatening condition.\n\nAre Payment Banks reliable?\nREAD FULL STORY`,
        label: "promotion"
    },
    {
        id: 3,
        sender: "donotreply-acad@iitr.ac.in",
        heading: "IIT Roorkee M.Tech/M.Arch./MURP Admission 2024 - Scrutiny Reject",
        body: `Dear Kushagra Mehrotra ,\n\nYour application for M.Tech/M.Arch./MURP Admission has been checked and found to be rejected due to the following aspect(s).\n\n-------------------------------------------------------\n\nYou are not eligible in the programme Name: M.Tech Data Science, Code: 54, Name: M.Tech. Artificial Intelligence, Code: 53,`,
        label: "important"
    },
    {
        id: 4,
        sender: "support@codepen.io",
        heading: "JavaScript Atoms, CSS Bubbles, and a CRT Celebration",
        body: `JavaScript Atoms, CSS Bubbles, and a CRT Celebration\nThis week's CodePen community highlights include an atomic meditation in JavaScript from Sophia Wood, Pens from the first week of our Bubbles #CodePenChallenge, and a milestone celebration in vintage CRT style from wheatup!\n\nPlus, Wakana Y.K. demonstrates TornPaper.js, and Chris Smith crafts some squeezy bouncy buttons.`,
        label: "promotion"
    },
    {
        id: 5,
        sender: "support@mail.process-street.com",
        heading: "Demo: Trigger multiple workflow runs from one task! ⚡",
        body: `Multiple workflow runs, in one click\nIf you need to follow up your workflow run by triggering several others, we've got a pro-tip for you!\n\n\n\nIn this video, learn to create multiple workflow runs by completing a task in an active workflow run, using Zapier.\n\n\n\nCreate this integration to:\n\nTransition to the follow-up tasks seamlessly and immediately\nSave time and effort by automatically creating workflow runs in bulk\nAutomate the entry of repetitive information in every workflow run\nIf you're a property manager handling multiple connected processes, this zap can save you tons of manual work.`,
        label: "spam"
    },
    {
        id: 6,
        sender: "info@nunta.nunta.mailmasterspro.eu",
        heading: "kushagra2700 - You are a winner of a 𝐊𝐨𝐛𝐚𝐥𝐭 𝐃𝐫𝐢𝐥𝐥, 𝐈𝐃#2489",
        body: `Lowe's\nANSWER & WIN:\nA Brand New\nSomething Special Awaits You!\nKobalt Drill\nCongratulations!\nYou have been chosen to participate in our Loyalty Program\nfor FREE! It will take you only a minute to receive this\nfantastic prize.\nCONFIRM NOW!`,
        label: "spam"
    },
    {
        id: 7,
        sender: "info@sera7.gigglinggnomes.co.uk",
        heading: "RE: You have won an DEWALT 170 Piece MechanicsToolSet 6oeam",
        body: `ACE\n05-15-2024\nANSWER FOR FREE!\nYou have been chosen to participate in our Loyalty Program for FREE! It will take you only a minute to receive this fantastic prize.\n\nCLICK HERE TO BEGIN!\nDEWALT 170 Piece Mechanics Tool Set\nEvery Thursday we randomly select 20 users by system to take a short online survey. It includes 15 simple questions that can be finished within 30s or less. In this way, we can know our users better and improve our products and services.`,
        label: "spam"
    },
    {
        id: 8,
        sender: "noreply@redditmail.com",
        heading: "\"Still useless after all these years\"",
        body: `\nr/Konosuba · Posted by u/cuminmosquitoe 15h ago\nStill useless after all these years\nRead More\n702 Votes	15 Comments\n\nHide r/Konosuba\nr/cursedcomments · Posted by u/Working-Key3593 3h ago\ncursed relationship\nRead More\n301 Votes	6 Comments\n\nHide r/cursedcomments\nr/relationships · Posted by u/Dangerous_Plum_9808 16h ago\nI feel like my partner isn’t attracted to me anymore.\nI feel like my significant other isn’t attracted to me anymore. So I, 31F have a partner of almost 14 years, 33M. Usually he loves to look and squeeze my honkers, he’s always been a physical person. ... Read More\n5 Votes	18 Comments\nHide r/relationships\nr/netsec · Posted by u/oleavr 23h ago\nFrida 16.3 is out with CoreDevice/RemoteXPC support, new Service API, and many other improvements\nRead More\n30 Votes	1 Comments\nHide r/netsec\nr/BokuNoHeroAcademia · Posted by u/Alastorawakening5 8h ago\nQuestion??\nWould quirk infused weapons be possible in mha if so how would it be done? Read More\n2 Votes	5 Comments\nHide r/BokuNoHeroAcademia\nVIEW MORE POSTS`,
        label: "social"
    },
    {
        id: 9,
        sender: "english-personalized-digest@quora.com",
        heading: "I smoked cigarettes irregularly for 2 years like someday smoking 5-6 and someday not ...?",
        body: `\n\nTOP STORIES FOR KUSHAGRA\n\nQuora\n\nI smoked cigarettes irregularly for 2 years like someday smoking 5-6 and someday not at all. Now I have quit. What are the chances of me developing any of the smoking related complications?\nMichael J. McFadden, Author of "Dissecting Antismokers' Brains" and "TobakkoNacht -- The Antismoking ... • Answered December 28, 2018\n\nAccording to the well-designed UK Million Women Study, if you’d started smoking in your teens and smoked a half pack to a pack a day until you were 30 and then QUIT at 30, ... Read more »\nUpvote\n1.4K\n\nComment\n195\n\n\nHas Voyager 2 seen anything new since it left the solar system?\nAsked in The Science Space • Answered by Silk Road • December 17\n\nVoyager 2 is one of the most amazing space probes ever launched by NASA. It was sent into space way back in 1977, and it's still going strong today. It's the only spacecraft ... Read more »\nUpvote\n2.9K\n\nComment\n163\n\n\n\nI scored 191/300 marks in the JEE Mains. My percentile is 82.9. Am I eligible for NIT?\nRudrakshya • Updated May 8\n\nNo chance …… either you're faking about your marks or you're in delusion…… in January whatever the shift is you cant fkin get 82%ile when you're getting 191 marks……. Jhooth... Read more »`,
        label: "social"
    },
    {
        id: 10,
        sender: "yo@dev.to",
        heading: "The best free, open-source SaaS template for React & NodeJS | DEV Digest",
        body: `DEV Community Digest\n👋 Hey Kushagra, let's get you caught up!\nThe best free, open-source SaaS template for React & NodeJS\nPresenting Open SaaS 🎉 We’re really excited to present Open SaaS, the totally free,...\n\nAdvanced Error Handling in Node.js\nError handling is an important aspect of software development that ensures your application behaves...\n\nThe Senior Engineer's Guide to Code Reviews\nCode reviews. You know how important they are. They are one of the pillars of getting...`,
        label: "updates"
    },
    {
        id: 11,
        sender: "support@launchschool.com",
        heading: "[Launch School] Community Update - June 5, 2024",
        body: `New Community Orientation Videos\nThere are a lot of ways to connect with other students at Launch School, whether you like to browse Slack or hang out in Gather. So many ways, in fact, that it can be difficult to know where to start.\n\nWe've created new videos as part of the Prep course to get new students involved with the community. We have walkthroughs for Slack, Gather, the Community Forum, and the Events page. You can find a link to these videos here. Check them out - even if you've been at LS for a while, you might learn something new!\n\nPodcasts\nPodcast\nA new podcast just came out last week! Chris interviews Daniel Nalesnik, an entrepreneur who used what he learned in Core to build the app Hack Chinese. They talk about Daniel's history with language learning, share their experiences of building a business around an app, and have a brief chat in Mandarin!\n👀 Watch on YouTube\n🎧 Listen in your browser\n🔍 ...or search for 'Launch School Podcast' on your favorite app\n\nLS Women's Group\nThe next Women's Group meetup will be at the end of June - the 23rd, to be exact. This session, the focus of the conversation will be on mental health, something that's enormously important but often hard to talk about openly. You can find all the details here.\n\nAnd if you're a female or nonbinary student at LS and not already part of the Women's Group in Slack, you can join here!\n\nMeetups:\nWe had a two-person meetup at RubyKaigi, an international conference on Ruby held every year in Japan:\n\nJapan Meetup\nOver in the other hemisphere, students in the Nevada area met up at Incline Beach. Look at those majestic mountains in the background and those cheerful people in the foreground:\n\nReno-Tahoe Meetup\nAnd remember: Anyone can set up a meetup in their region! You can start setting one up in the Slack channel for your region, or create a new channel if there isn't a channel for your region yet.\n\nElsewhere in Slack\nThere's a new channel in Slack for lovers of sports! Whether you play or just like to spectate, check out: #athletes-of-ls. At the very least, scroll up to watch this video of Afghan students playing volleyball:\n\nVolleyball\nThat's all I've got for this update! You'll hear from us again in a few weeks - maybe Clare will have an esoteric new snack to tell us about, or Brandi will have made friends with an unusual animal? Until then, here's a sleeping Henning The Cat:\n\nHenning\nIf you wish to stop receiving emails from us, you can use the one-click link below to unsubscribe.`,
        label: "updates"
    },
    /*
    {
        id: 12,
        sender: "info@elearnmarkets.com",
        heading: "",
        body: ``,
        label: ""
    },
    {
        id: 13,
        sender: "info@elearnmarkets.com",
        heading: "",
        body: ``,
        label: ""
    },
    {
        id: 14,
        sender: "info@elearnmarkets.com",
        heading: "",
        body: ``,
        label: ""
    },
    {
        id: 15,
        sender: "info@elearnmarkets.com",
        heading: "",
        body: ``,
        label: ""
    },
    {
        id: 16,
        sender: "info@elearnmarkets.com",
        heading: "",
        body: ``,
        label: ""
    },
    {
        id: 17,
        sender: "info@elearnmarkets.com",
        heading: "",
        body: ``,
        label: ""
    },
    {
        id: 18,
        sender: "info@elearnmarkets.com",
        heading: "",
        body: ``,
        label: ""
    },
    {
        id: 19,
        sender: "info@elearnmarkets.com",
        heading: "",
        body: ``,
        label: ""
    },
    {
        id: 20,
        sender: "info@elearnmarkets.com",
        heading: "",
        body: ``,
        label: ""
    },
    */
]