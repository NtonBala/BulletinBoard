import React from 'react';
import './App.css';
import Draggable from 'react-draggable';

var Note = React.createClass({
    componentDidUpdate() {
        if(this.state.editing) {
            this.refs.newText.focus();
            this.refs.newText.select();
        }
    },
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.children !== nextProps.children || this.state !== nextState
    },
    getInitialState() {
        return {editing: false}
    },
    componentWillMount() {
        this.style = {
            right: this.randomBetween(0, window.innerWidth - 150, 'px'),
            top: this.randomBetween(0, window.innerHeight - 150, 'px')
        };
    },
    randomBetween(x, y, s) {
        return (x + Math.ceil(Math.random() * (y - x))) + s
    },
    edit() {
        this.setState({editing: true});
    },
    save() {
        this.props.onChange(this.refs.newText.value, this.props.id);
        this.setState({editing: false});
    },
    remove() {
        this.props.onRemove(this.props.id);
    },
    cancel() {
        this.setState({editing: false});
    },
    renderForm() {
        return React.createElement(
            'div',
            {
                className: 'note',
                style: this.style
            },
            React.createElement(
                'textarea',
                {
                    ref: 'newText',
                    defaultValue: this.props.children
                }
            ),
            React.createElement(
                'button',
                {onClick: this.save},
                'SAVE'
            ),
            React.createElement(
                'button',
                {onClick: this.cancel},
                'X'
            )
        );
    },
    renderDisplay() {
        return React.createElement(
            'div',
            {className: 'note', style: this.style},
            React.createElement(
                'p',
                null,
                this.props.children
            ),
            React.createElement(
                'span',
                null,
                React.createElement(
                    'button',
                    {onClick: this.edit},
                    'EDIT'
                ),
                React.createElement(
                    'button',
                    {onClick: this.remove},
                    'X'
                )
            )
        );
    },
    render() {
        return React.createElement(
            Draggable,
            null,
            this.state.editing ? this.renderForm() : this.renderDisplay()
        );
    }
});

export default Note;
