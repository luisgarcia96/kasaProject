import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/components/TagList.module.scss";

function TagList({ tags }) {
	return (
		<div className={styles.tagList}>
			{tags.map((tag, index) => (
				<span key={`tag-${index}`} className={styles.tag}>
					{tag}
				</span>
			))}
		</div>
	);
}

TagList.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TagList.defaultProps = {
	tags: [],
};

export default TagList;
