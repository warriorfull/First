const Person = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation) 
    ]);
}
const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {class: 'title'}, 'React IS rendered'),
        React.createElement(Person, {name: 'Yihua', occupation: 'instructor'}, null),
        React.createElement(Person, {name: 'Andrei', occupation: 'Lead instructor'}, null),
        React.createElement(Person, {name: 'Yihua', occupation: 'teacher'}, null),
	React.createElement(Person, {name: 'Yihua', occupation: 'teacher'}, null),
    ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));
   
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
