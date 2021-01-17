import React from "react";
import PropTypes from 'prop-types';

const Text = ({tag, className, children, style, size,onClick}) => {

    const RenderText = () => {
        let defaultStyle = {fontSize: `${size}px`}

        if (style && size) {
            style = {...style,...defaultStyle}
        }

        return React.createElement(tag, {
            className: className,
            style: style ? style : defaultStyle,
            onClick: () => onClick()
        }, children);
    }

    return (
        <RenderText/>
    )
}

export default Text;

Text.propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string,
    size: PropTypes.number
}

Text.defaultProps = {
    tag: "p",
    size: 16
}