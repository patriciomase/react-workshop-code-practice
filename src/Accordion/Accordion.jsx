import React from "react";

import AccordionItem from "../AccordionItem/AccordionItem";
import Picture from "../Picture/Picture";

class Accordion extends React.Component {
  static defaultProps = {
    movies: []
  };

  constructor(props) {
    super(props);
    this.state = {
      opened: null
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility(listElement) {
    this.setState({
      opened: listElement === this.state.opened ? null : listElement
    });
  }

  render() {
    const { movies } = this.props;
    const { opened } = this.state;
    return (
      <React.Fragment>
        {movies.map(v => (
          <AccordionItem
            key={v.title}
            title={v.title}
            collapsed={v.title !== opened}
            onClick={this.toggleVisibility}
          >
            <Picture src={v.image} />
            <p>{v.synopsis}</p>
          </AccordionItem>
        ))}
      </React.Fragment>
    );
  }
}

export default Accordion;
