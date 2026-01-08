import PropTypes from 'prop-types';

export default function RenderName({ name = 'Zach' }) {
  return <div>{name}</div>;
}

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};
