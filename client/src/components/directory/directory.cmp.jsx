import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./directory.style.scss";

import MenuItem from "../menu-item/menuitem-cmp";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...props }) => (
      <MenuItem key={id} {...props} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
