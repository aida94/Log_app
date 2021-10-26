# Log App

## Documentation

<b>Log Appp</b> is a simple application that list all the log displayed from the beginning. Apart from that it also shows Statistic with number of log messages per severity.

I decided to build it in React and Typescript. The main reason for using typescript is to have a clear data model from the beginning of the implementation. Also make the application more easier to read and debug. For better design I chose to use Material Ui. It is easy to create layouts and reduce time working with Css. As a state management I used Redux to engender communication and sharing data across components.

I decided not to implement backend part but I created a <b>generateRandomLog</b> function to receive random data every <i>10 seconds</i>.
One thing I would do differently if I were to implement the backend would be to add "datetime" of the last Log as parameter in request, so that the backend would reponse with the generated logs after that datetime.


## Install

    $ git clone https://github.com/aida94/Log_app.git
    $ cd Log_app
    $ npm install
    
 ### Start & watch

    $ npm start

### Simple build for production

    $ ng build
    
## Requirements Dependencies  
<li>material ui</li>
<li>moment</li>
<li>redux</li>
<li>redux thunk</li>
<li>typescript</li>
