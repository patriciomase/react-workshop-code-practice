# React Workshop Code Practice

The idea behind this workshop is to learn by doing. You'll be guided thru a series of simple exercises matching common day by day problems and use cases you'll face after becoming a react applications developer.

## Toolbelt

You'll need some tools in this journey. Lets quickly recap:

1. Some basic javascript knowledge is assumed.
2. A computer with internet access.
3. React developer tools extension installed in Chrome or Firefox.
4. That's it.

## Are you ready? lets learn react foundamentals step by step.

1. _Creating simple components: (Functions and classes)_
   Open the project and navigate to the videos section and click on some of the movie titles. Someone forgot to add the movie image in there! Can you put the image in place creating a new component for that? One additional requeriment says if there's no image a grey placeholder should be shown.

2. _Component state: Understanding how state works_
   The developer in charge of the videos section missed one important requirement! Just one of the movies can be opened at a time. The requirement says if you click some movie and some other are open the last one should be closed automatically. Can you quickly fix that?

3. _Event Handlers: Doing something when user interaction happens_
   The left sidebar functionality is incomplete! It opens but never close! who can save the day fixing that? (Clue: when sidebar menu its open a transparent layer gets rendered covering 100% of the screen).

4. _Ref usage: playing with references to html elements_
   The client asked for disabling the default html5 controls on the video presented in homepage and replace them by custom play and pause buttons. Someone started with the ticket but it remains incomplete. (Look at the VideoPlayer component there are some code commented out in there). Can you make those buttons to work?? (Clue: html5 <video> element has `.play()` and `.pause()` methods)

5. _React Router: Dealing with params_
   The client asked for highlighting the active section on the lateral sidebar, Can you achieve that without too much effort?

6. _Composition: Adding functionality by composition instead of modifying the whole thing:_
   The api endpoint to get the video list is finally done. Can you build a new component with functionality to GET contents from an api endpoint and use the current Videos component to show the new list?

7. _Consumer/Provider: Making data available across the whole app_
   The client is very happy with our work in the last ticket. But now there's a problem. Every time the user goes to the video section a request is made, even if we already had the data previously loaded... how can this be possible? Can you fix it?
