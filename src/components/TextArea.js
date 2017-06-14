import React from 'react';

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput=this.handleInput.bind(this);
    this.handleKeyDown=this.handleKeyDown.bind(this);
    this.handleFocus=this.handleFocus.bind(this);

  }

  handleFocus() {
    console.log("focus");
    this.props.toggleFocus;
  }

  handleKeyDown(e) {
    const key = e.keyCode;
    return key === 9 ? this.props.toggleFocus() : null
  }

  handleInput(e) {
    const calculateContentHeight = ( ta, scanAmount ) => {
      var origHeight = ta.style.height,
          height = ta.offsetHeight,
          scrollHeight = ta.scrollHeight,
          overflow = ta.style.overflow;
      /// only bother if the ta is bigger than content
      if ( height >= scrollHeight ) {
          /// check that our browser supports changing dimension
          /// calculations mid-way through a function call...
        ta.style.height = (height + scanAmount) + 'px';
          /// because the scrollbar can cause calculation problems
          ta.style.overflow = 'hidden';
          /// by checking that scrollHeight has updated
        if ( scrollHeight < ta.scrollHeight ) {
              /// now try and scan the ta's height downwards
              /// until scrollHeight becomes larger than height
          while (ta.offsetHeight >= ta.scrollHeight) {
            ta.style.height = (height -= scanAmount)+'px';
          }
              /// be more specific to get the exact height
          while (ta.offsetHeight < ta.scrollHeight) {
            ta.style.height = (height++)+'px';
          }
              /// reset the ta back to it's original height
              ta.style.height = origHeight;
              /// put the overflow back
              ta.style.overflow = overflow;
              return height;
        }
      } else {
          return scrollHeight;
      }
    }

    const textArea = e.target;
    const style = (window.getComputedStyle) ? window.getComputedStyle(textArea) : textArea.currentStyle
    const taLineHeight = parseInt(style.lineHeight, 10)
    const taHeight = calculateContentHeight(textArea, taLineHeight);
    const numberOfLines = Math.ceil(taHeight / taLineHeight);

    // console.log("number of lines is ", numberOfLines);
    switch (true) {
      case (numberOfLines === 4):
        textArea.style.fontSize="14px";
        textArea.style.lineHeight="14px";
        break;

      case (5 <= numberOfLines && numberOfLines < 7):
        textArea.style.fontSize="13px";
        textArea.style.lineHeight="13px";
        break;

      case (numberOfLines >= 7):
        textArea.style.fontSize="11px";
        textArea.style.lineHeight="11px";
        break;

      default:
        textArea.style.fontSize="20px";
        textArea.style.lineHeight="20px";
        return;
    }
  }

  render() {
    return(
      <div>
        <div
          className="text-area"
          contentEditable="true"
          suppressContentEditableWarning
          onInput={this.handleInput}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleFocus}
        ></div>
      </div>
    );
  }
}

export default TextArea;
