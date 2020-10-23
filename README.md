# React Lifecycle Activity

This activity is going to be a little annoying.

Run `npm i` and then `npm start`

Pay attention to the alerts you see. Matching messages are also being logged to the console.

We just want you to get an idea of what's happening when. It's OK if you don't memorize the order of everything.

It might be helpful to write down the order of lifecycle updates as you see them for future reference.

Some questions to ask yourself:
- When does the constructor() execute?
- When does componentDidMount() run?
  - What code might you want to run in there?
- When does componentDidUpdate() run?
  - What code might you want to run in there?
- When does componentWillUnmount() run?
  - What code might you want to run in there?

Why the annoying alerts? Because they're a blocking process. That way you can look at what's been drawn to the
browser before the next message appears, and notice the differences.