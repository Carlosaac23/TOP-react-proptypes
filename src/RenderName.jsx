import PropTypes from 'prop-types';

export default function RenderName(props) {
  return <div>{props.name}</div>;
}

RenderName.propTypes = {
  name: PropTypes.string,
};
