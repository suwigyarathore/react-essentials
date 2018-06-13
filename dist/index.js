const { createElement } = React;
const { render } = ReactDOM;

const style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
}
const title = createElement(
  'h1',
  { id: 'title', className: 'headeer', style: style },
  'Hello world'
);

render(
  title,
  document.getElementById('react-container')
)
