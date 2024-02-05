## Women In Tech Forum

Demo: https://witforum-pixelpioneers.netlify.app/
Welcome to try it!

## Inspiration

**We aim to create a welcoming online forum for women in the field of technology.** The social good aspect of our project is deeply ingrained in its features. Beyond the exchange of technical expertise, our forum will serve as a hub for technology resources and experience-sharing. It will be a space where achievements are celebrated, challenges are met with collective wisdom, and women in tech find the camaraderie they deserve. Our project is not merely addressing the gender gap; it is actively working towards closing it by fostering a sense of belonging and empowerment.

Drawing inspiration from RTC Slack channels, we've identified several pain points outlined below:

- Numerous questions require searching each channel to find answers.
- The abundance of channels results in sparse discussions. Some outdated channels were even forgotten and the information in them was lost.
- Insufficient sharing of skills and interview experiences.

## What it does

To address these remaining issues, we then came up with the idea to develop a forum with specific features to support women in tech:

- Posting thoughts: Share information or perspectives in different tech-related categories such as events, interview, internship, referrals, resources, tech support, others etc. Every fact or perspective needs to have a valid source link so that it can be recorded and uploaded to our database (Supabase). Viewers can click the source link to learn more about it.
- Vote for thoughts: Participants can click votesInteresting👍if they find out the information interests them, votesMindblowing❓ if they have some questions about it, or votesFalse⛔️ if they feel the information has something wrong.
- Sorting features: Support sorting based on the highest votesInteresting👍, votesMindblowing❓, or votesFalse⛔️ to reflect popular issues people are focusing on. Besides, when the number of votesInteresting👍 plus votesMindblowing❓exceeds the number of votesFalse⛔️, there will be a [⛔️DISPUTED] symbol before this specific information, which means this information might be outdated of false so that people can just ignore it.
- AI bot: Provide a chatbot powered by ChatGPT, to assist people having trouble using the forum.

## How we built it

We developed this web application forum by integrating React.js, HTML, CSS, and JavaScript for the frontend UI, presenting posts for different corresponding categories. For the AI assistant bot, we utilized the GPT-3 Turbo model to provide an AI live chat feature. On the other hand, we employed Supabase for real-time data storage. Ultimately, we deployed our app on Netlify.

## Challenges we ran into

We encountered difficulties while integrating the OpenAI API. Initially, we faced an issue of unintentionally exposing the API key in a public repository, which led to its deactivation. Subsequently, we consistently encountered a 429 error (https://stackoverflow.com/questions/75898276/openai-api-error-429-you-exceeded-your-current-quota-please-check-your-plan-a), only to discover that our plan had expired.

In addition, the chat room library we employed conflicted with the version of React we were using, necessitating a downgrade to React version 17.
At the end, we encountered trouble when deploying the app to netlify, we failed when
building the app, we eventually fixed the issue by modifying the build command from “npm run build” to “CI= npm run build”
https://answers.netlify.com/t/netlify-not-building-command-failed-with-exit-code-1-npm-run-build/16999/3.

## Accomplishments that we're proud of

We take pride in the fact that despite our team working remotely, we successfully collaborated to achieve the set goal of building the complete features mentioned above, especially the integration of the ChatGPT API. While addressing and resolving errors did require some time, our efficient communication and task allocation enabled us to optimize our productivity.

## What we learned

During this event, we not only learned about leveraging what we learned to solve real-world problem, like using React, as well as the JavaScript, Supabase, ChatGPT API and Widget library and so on, but most importantly, we realized the importance of teamwork and the value of communication and discussion. We encountered situations where we were stuck on problems for a long time, but through discussions with teammates and splitting up to find solutions, we eventually succeeded in resolving the issues. Through this process, we recognized the power of girls in technology. I discovered our shining points in the field of technology. Girls demonstrate greater patience in programming, meticulous attention to detail, and a keener ability to identify bugs. We are also more adept at recognizing problems in real life.

## What's next for Women in Tech Forum

For the next phase of the project, we aim to enhance community engagement by implementing interactive features like live Q&A sessions and webinars. A reward system will be introduced to recognize the most active members. We will also focus on platform development, with plans to launch a mentorship program and develop a mobile application for better accessibility.

Additionally, we will expand our content offerings, introducing educational workshops and inspirational success stories. Strategic partnerships will be sought with tech companies and educational institutions to provide our members with exclusive opportunities and accredited learning resources.

Inclusivity will remain a core value, as we plan to broaden our support for various underrepresented groups in tech and host events that promote diversity. We will also encourage research and innovation by creating a collaborative space for sharing research and hosting challenges that tackle real-world issues.

Outreach initiatives will be organized to inspire young women in schools and universities to enter the tech field, supplemented by scholarships and grants for tech education and conference attendance. Lastly, we will refine the user experience based on member feedback, enhancing the interface and creating a tailored content recommendation system to maintain engagement and relevance.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

Install all the dependency packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
