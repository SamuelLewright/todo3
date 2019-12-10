import React from "react";
import Link from "./Link";
import { VisibilityFilters } from "./constants";

const Footer = ({ currentFilter, onUpdateVisibilityFilter }) => (
  <div>
    <span>Show: </span>
    <Link
      active={currentFilter === VisibilityFilters.SHOW_ALL}
      onClick={() => onUpdateVisibilityFilter(VisibilityFilters.SHOW_ALL)}
    >
      All
    </Link>
    <Link
      active={currentFilter === VisibilityFilters.SHOW_ACTIVE}
      onClick={() => onUpdateVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}
    >
      Active
    </Link>
    <Link
      active={currentFilter === VisibilityFilters.SHOW_COMPLETED}
      onClick={() => onUpdateVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}
    >
      Completed
    </Link>
  </div>
);

export default Footer;
