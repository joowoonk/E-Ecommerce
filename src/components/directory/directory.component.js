import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem
          key={id}
          {...otherSectionProps}
          //instead of sending everything into MenuItem, otherSectionProps will do the justice.
          // history={this.props.history}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
